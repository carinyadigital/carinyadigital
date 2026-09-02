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

`@astrojs/check` is installed but not wired as a script. Root `pnpm format` does not format `.astro` files.

## Architecture

- Routes: `src/pages/` (file-based). Today: `/`, `/resources`, `/resources/financial-planners`, `/resources/waratah`, `404`.
- Marketing copy and nav: `src/content/site.ts` — do not scatter page copy into components.
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

## Boundaries

- Always: add a resource page by extending `src/content/site.ts` and a file under `src/pages/resources/`.
- Never: redeclare brand tokens in `global.css` beyond font-family custom properties and `@source` paths.
