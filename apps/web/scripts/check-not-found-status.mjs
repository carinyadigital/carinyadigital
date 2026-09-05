/**
 * Starts the production preview server and asserts unknown routes return
 * HTTP 404 with the custom not-found document, not a 200 that only looks
 * like an error page.
 */
import { spawn } from 'node:child_process';
import { createServer } from 'node:net';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const host = '127.0.0.1';

/**
 * @returns {Promise<number>}
 */
function getFreePort() {
  return new Promise((resolve, reject) => {
    const server = createServer();
    server.unref();
    server.listen(0, host, () => {
      const address = server.address();
      if (!address || typeof address === 'string') {
        reject(new Error('Could not allocate a TCP port'));
        return;
      }
      const { port } = address;
      server.close((error) => (error ? reject(error) : resolve(port)));
    });
    server.on('error', reject);
  });
}

/**
 * @param {number} port
 * @returns {Promise<import('node:child_process').ChildProcess>}
 */
function startPreview(port) {
  return new Promise((resolve, reject) => {
    const child = spawn(
      'pnpm',
      ['exec', 'astro', 'preview', '--host', host, '--port', String(port)],
      {
        cwd: root,
        stdio: ['ignore', 'pipe', 'pipe'],
      },
    );

    const output = [];
    let settled = false;

    const finish = (error) => {
      if (settled) {
        return;
      }
      settled = true;
      clearTimeout(readyTimeout);
      child.stdout?.off('data', onChunk);
      child.stderr?.off('data', onChunk);
      child.off('exit', onExit);
      if (error) {
        reject(error);
        return;
      }
      resolve(child);
    };

    const readyTimeout = setTimeout(() => {
      child.kill('SIGTERM');
      finish(
        new Error(
          `astro preview did not become ready within 20s\n${output.join('')}`,
        ),
      );
    }, 20_000);

    const onChunk = (chunk) => {
      const text = String(chunk);
      output.push(text);
      if (/localhost|127\.0\.0\.1/.test(text)) {
        finish();
      }
    };
    const onExit = (code) => {
      finish(
        new Error(
          `astro preview exited before becoming ready (code ${code})\n${output.join('')}`,
        ),
      );
    };

    child.stdout?.on('data', onChunk);
    child.stderr?.on('data', onChunk);
    child.on('error', (error) => {
      finish(error);
    });
    child.on('exit', onExit);
  });
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

const port = await getFreePort();
const origin = `http://${host}:${port}`;
const preview = await startPreview(port);

try {
  const home = await fetchPage(`${origin}/`);
  assert(home.status === 200, `Expected / to return 200, got ${home.status}`);

  const unknownPaths = [
    '/this-route-does-not-exist',
    '/definitely/missing/page',
  ];

  for (const pathname of unknownPaths) {
    const page = await fetchPage(`${origin}${pathname}`);
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
  preview.kill('SIGTERM');
}
