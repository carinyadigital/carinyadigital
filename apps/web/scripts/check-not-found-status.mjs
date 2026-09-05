/**
 * Serves the production build and asserts unknown routes return HTTP 404
 * with the custom not-found document, not a 200 that only looks like an
 * error page. Missing files are served from 404.html — the same contract
 * static hosts use for this site.
 */
import { createServer } from 'node:http';
import { access, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const dist = path.join(root, 'dist');
const host = '127.0.0.1';

/**
 * @param {string} filePath
 */
async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

/**
 * @param {string} pathname
 */
async function resolveFile(pathname) {
  const relative = decodeURIComponent(pathname).replace(/^\/+/, '');
  const candidates = relative
    ? [
        path.join(dist, relative),
        path.join(dist, `${relative}.html`),
        path.join(dist, relative, 'index.html'),
      ]
    : [path.join(dist, 'index.html')];

  for (const candidate of candidates) {
    if (!candidate.startsWith(dist)) {
      continue;
    }
    if (!(await exists(candidate))) {
      continue;
    }
    const info = await stat(candidate);
    if (info.isFile()) {
      return candidate;
    }
  }
  return undefined;
}

/**
 * @returns {Promise<{ origin: string, close: () => Promise<void> }>}
 */
async function startStaticServer() {
  if (!(await exists(path.join(dist, '404.html')))) {
    throw new Error('apps/web/dist/404.html is missing. Run the web build first.');
  }

  const notFound = await readFile(path.join(dist, '404.html'));

  const server = createServer(async (request, response) => {
    const url = new URL(request.url ?? '/', `http://${host}`);
    const filePath = await resolveFile(url.pathname);
    if (!filePath) {
      response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      response.end(notFound);
      return;
    }
    const body = await readFile(filePath);
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(body);
  });

  await new Promise((resolve, reject) => {
    server.listen(0, host, resolve);
    server.on('error', reject);
  });

  const address = server.address();
  if (!address || typeof address === 'string') {
    throw new Error('Could not determine the static server port');
  }

  return {
    origin: `http://${host}:${address.port}`,
    close: () =>
      new Promise((resolve, reject) => {
        server.close((error) => (error ? reject(error) : resolve()));
      }),
  };
}

/**
 * @param {string} url
 * @returns {Promise<{ status: number, body: string }>}
 */
async function fetchPage(url) {
  const response = await fetch(url, { redirect: 'manual' });
  const body = await response.text();
  return { status: response.status, body };
}

/**
 * @param {boolean} condition
 * @param {string} message
 */
function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const server = await startStaticServer();

try {
  const home = await fetchPage(`${server.origin}/`);
  assert(home.status === 200, `Expected / to return 200, got ${home.status}`);

  const unknownPaths = [
    '/this-route-does-not-exist',
    '/definitely/missing/page',
  ];

  for (const pathname of unknownPaths) {
    const page = await fetchPage(`${server.origin}${pathname}`);
    assert(
      page.status === 404,
      `Expected ${pathname} to return HTTP 404, got ${page.status}`,
    );
    assert(
      page.body.includes('Page not found'),
      `Expected ${pathname} to render the custom not-found page`,
    );
    assert(
      page.body.includes('noindex'),
      `Expected ${pathname} to include a noindex robots directive`,
    );
    assert(
      !page.body.includes('rel="canonical"'),
      `Expected ${pathname} not to advertise a canonical URL`,
    );
  }

  console.log(
    `Unknown routes return HTTP 404 with the custom not-found page (${unknownPaths.join(', ')}).`,
  );
} finally {
  await server.close();
}
