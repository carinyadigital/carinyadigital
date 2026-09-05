# AGENTS.md

Carinya Digital ([carinyadigital.com](https://carinyadigital.com)) — pnpm + Turborepo monorepo for the public site, design tokens, and shared UI.

Where a package has its own `AGENTS.md`, that nested file wins for work inside it. Keep this file to repo-wide facts.

## Packages

| Package | Description | Path |
|---------|-------------|------|
| `web` | Public site (Astro 7, React islands, Tailwind CSS 4) | `apps/web` |
| `@carinya-digital/theme` | CSS-first Tailwind 4 `@theme` tokens | `packages/carinya-theme` |
| `@carinya-digital/ui` | Shared React primitives (Base UI) | `packages/ui` |
| `@repo/eslint-config` | Shared ESLint configs | `packages/eslint-config` |
| `@repo/typescript-config` | Shared tsconfig presets | `packages/typescript-config` |

## Commands

| Command | Description |
|---------|-------------|
| `pnpm install` | Install (pnpm `11.25.0`, Node `>=24`) |
| `pnpm dev` | Dev all packages (Turbo) |
| `pnpm web:dev` | Site only (`turbo run dev --filter=web`) |
| `pnpm lint` | ESLint (`--max-warnings 0` in packages that define it) |
| `pnpm check-types` | `tsc --noEmit` via Turbo |
| `pnpm build` | Production build all packages |
| `pnpm format` | Prettier write `**/*.{ts,tsx,md}` — does **not** include `.astro` or `.css` |

No test runner or CI is wired yet.

## Cross-Package Patterns

- Tokens live only in `@carinya-digital/theme` (`css/tokens.css`). Import with `@import '@carinya-digital/theme'`. Do not copy tokens into apps or keep a parallel `:root` sheet. There is no `tailwind.config.ts` for brand tokens.
- Fonts are **not** in the theme package. Consuming apps load Spectral, IBM Plex Sans, and IBM Plex Mono and set `--font-spectral`, `--font-ibm-plex-sans`, `--font-ibm-plex-mono`.
- UI: import from `@carinya-digital/ui`. Interactive primitives wrap Base UI; reuse before adding. New shared components go in `packages/ui`; one-off chrome stays in the app.
- Apps must still import the theme CSS themselves. The UI package has the theme as a **devDependency** for typechecking only.
- `cn()` in `packages/ui/src/lib/cn.ts` extends `tailwind-merge` for custom `text-*` and `tracking-*` tokens — use it instead of a local helper.
- Brand, copy, and UI rules: `docs/design-system.md` (intent) and `skills/carinyadigital/SKILL.md` (agent skill). Australian English; no emoji; no exclamation points.

## Code Style

- TypeScript strict (`packages/typescript-config`).
- Apps and `packages/ui` use single quotes and semicolons. `packages/eslint-config` still uses the Turbo starter’s double quotes — do not “fix” that as a drive-by unless asked.
- `"use client"` only on modules that use Base UI or other client APIs.

## Gotchas

- Dark mode is a **class on a subtree**, not `prefers-color-scheme`. `InverseSurface` (and inverse `FeatureSplit` tones) set `class="dark"`. The theme registers `@custom-variant dark (&:where(.dark, .dark *));` — do not add a second `@theme` block scoped to `.dark`.
- Consuming-app CSS must `@source` the UI package (see `apps/web/src/styles/global.css`) or Tailwind will not emit classes used only inside `@carinya-digital/ui`.
- Vite/Astro must `ssr.noExternal: ['@carinya-digital/ui']` or the workspace UI package fails SSR.
- `turbo.json` `build.outputs` still lists `.next/**` from the starter; the live app is Astro (`dist/`, `.astro/`). `@repo/eslint-config/next-js` and `packages/typescript-config/nextjs.json` are unused leftovers — this repo has no Next.js app.
- `temp/` is gitignored (throwaway mocks and design exports).

## Boundaries

- Always: change brand tokens in `packages/carinya-theme`, not in an app. Read `docs/design-system.md` before copy or UI work. Reuse `@carinya-digital/ui` before adding a primitive.
- Ask first: before adding a new app, a test runner, or committing anything under `temp/`.
- Never: commit `.env*`, `*.pem`, credentials, or connection strings; invent a graphic logo (wordmark is typographic only); copy theme tokens into an app.

## Key Files

- `docs/design-system.md` — brand, type, colour, component rules
- `skills/carinyadigital/SKILL.md` — agent skill for CD copy and UI
- `packages/carinya-theme/css/tokens.css` — token source of truth
- `packages/ui/src/index.ts` — UI public exports
