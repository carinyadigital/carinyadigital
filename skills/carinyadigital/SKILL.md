---
name: carinya-digital
description: >-
  Orients work in the Carinya Digital monorepo — public site, design tokens,
  and shared UI. Use when working in this repo, or when the user mentions
  Carinya Digital, CD brand, theme, or design system. Do not use for Carinya
  Parc farm-site work.
user-invocable: true
---

# Carinya Digital

Carinya Digital ([carinyadigital.com](https://carinyadigital.com)) is a pnpm +
Turborepo monorepo for the public site (`apps/web`), CSS-first design tokens
(`packages/carinya-theme`), and shared React primitives (`packages/ui`).

## Source of truth

The complete documentation lives in `docs/`. Do not rely on this skill for
guidance — always read those docs, which match this repo:

```
docs/
```

Start with `docs/design-system.md`. It contains brand, copy, and UI intent.
Read other files in `docs/` when they exist and match the task. Before writing
copy or changing the site, theme, or UI packages, read the relevant doc there
first.

Repo-wide commands, package boundaries, and gotchas live in `AGENTS.md`. Nested
`AGENTS.md` files win inside that package.
