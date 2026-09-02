# Carinya Digital

Monorepo for [carinyadigital.com](https://carinyadigital.com) — pnpm + Turborepo.

## Apps and packages

- `apps/web` — public site (Astro 7, React islands, Tailwind CSS 4)
- `@carinya-digital/theme` — CSS-first design tokens
- `@carinya-digital/ui` — shared React primitives (Base UI)
- `@repo/eslint-config` / `@repo/typescript-config` — shared tooling

## Develop

```sh
pnpm install
pnpm dev                 # all packages
pnpm --filter web dev    # site only
```

Quality checks:

```sh
pnpm lint
pnpm check-types
pnpm build
```

Brand and UI rules: [`docs/design-system.md`](docs/design-system.md).
