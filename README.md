# Carinya Digital

Public site for [carinyadigital.com](https://carinyadigital.com), plus the theme and UI packages that power it.

## Overview

Carinya Digital is the studio behind Carinya Parc. This monorepo holds the public site, CSS-first design tokens, and shared React primitives. Clone it to run the site locally or to work on the brand system.

## Packages

| Package | Description | Path |
|---------|-------------|------|
| `web` | Public site (Astro 7, React islands, Tailwind CSS 4) | `apps/web` |
| `@carinya-digital/theme` | CSS-first Tailwind 4 `@theme` tokens | `packages/carinya-theme` |
| `@carinya-digital/ui` | Shared React primitives (Base UI) | `packages/ui` |
| `@repo/eslint-config` | Shared ESLint configs | `packages/eslint-config` |
| `@repo/typescript-config` | Shared TypeScript presets | `packages/typescript-config` |

## Getting started

Requires Node `>=24` and [pnpm](https://pnpm.io) `11.25.0`.

```bash
pnpm install
pnpm web:dev
```

The site runs at the URL Astro prints (typically `http://localhost:4321`). Use `pnpm dev` to start every package.

## Development

```bash
pnpm lint
pnpm check-types
pnpm build
```

Brand and UI rules: [`docs/design-system.md`](docs/design-system.md). Token reference: [`packages/carinya-theme/README.md`](packages/carinya-theme/README.md).

## Conventions

See [`AGENTS.md`](AGENTS.md) for coding conventions, gotchas, and package boundaries.

## Ownership & licence

Owned by Carinya Digital. MIT — see [`LICENSE`](LICENSE).
