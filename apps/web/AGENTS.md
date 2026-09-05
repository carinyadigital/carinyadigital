# AGENTS.md

Public Carinya Digital site — Astro 7 with React islands. Repo-wide commands, tokens, and UI rules live in the root `AGENTS.md`; this file is the site delta.

## Commands

| Command | Description |
|---------|-------------|
| `pnpm --filter web dev` | Astro dev server |
| `pnpm --filter web build` | `astro build` |
| `pnpm --filter web preview` | `astro preview` |
| `pnpm --filter web lint` | ESLint |
| `pnpm --filter web check-types` | `tsc --noEmit` — **excludes `**/*.astro`** (`tsconfig.json`) |
| `pnpm --filter web check-not-found` | After `build`: preview unknown routes and assert HTTP 404 |

`@astrojs/check` is installed but not wired as a script. Root `pnpm format` does not format `.astro` files.

## Architecture

- Routes: `src/pages/` (file-based). Today: `/`, `/about`, `/agent-resources`, `/agent-plugins`, `/financial-planners`, `/waratah`, `/claude-cowork`, `404`.
- Marketing copy and nav: `src/content/site.ts` — do not scatter page copy into components. Footer columns live in `footer` there; `Footer.astro` is the only renderer and `Layout.astro` mounts it on every route.
- Chrome: `src/layouts/Layout.astro` (`lang="en-AU"`), `src/components/Navbar.astro` / `Footer.astro`. `MobileNav.tsx` is the only site-local client island.
- Alias `@/*` → `./src/*` (Vite + tsconfig).

## Key Files

- `astro.config.ts` — `site: https://carinyadigital.com`, React, Tailwind Vite plugin, `@` alias, `ssr.noExternal: ['@carinya-digital/ui']`
- `src/styles/global.css` — Fontsource imports, `@import '@carinya-digital/theme'`, `@source` globs for the UI package and this app
- `src/content/site.ts` — site name, nav, resource page data

## Gotchas

- Astro templates use `class`; React components from `@carinya-digital/ui` take `className`. Passing `className` into UI components from `.astro` is correct.
- `src/components/FeatureSplit.astro` is a **site-local** slot wrapper. `packages/ui` also exports `FeatureSplit`. Prefer the package when you do not need Astro named slots; do not create a third variant.
- Interactive UI (`Button`, `InstallCommand`) is a React island; presentational UI can be imported into `.astro` without a client directive.
- `FeatureSplit.astro` inverse tone sets `dark` on the `<section>` — same subtree-dark contract as `InverseSurface`.
- `src/pages/404.astro` sets `Astro.response.status = 404`. Keep that assignment: a custom not-found screen served as HTTP 200 is a soft-404. After a build, `pnpm --filter web check-not-found` curls unknown routes on `astro preview` and asserts a real 404 plus `noindex`.

## Boundaries

- Always: add a resource page by extending `src/content/site.ts` and a folder under `src/pages/` with `index.astro` (listing lives in `src/pages/agent-resources/`).
- Never: redeclare brand tokens in `global.css` beyond font-family custom properties and `@source` paths.
