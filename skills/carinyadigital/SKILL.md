---
name: carinya-digital
description: >-
  Applies Carinya Digital brand, design tokens (@carinya-digital/theme), and UI
  (@carinya-digital/ui, Base UI) when writing copy or building CD interfaces.
  Use when drafting CD copy or branded UI; choosing eucalypt, clay, Spectral,
  or radius; adding Button, Tag, or Card; reading docs/design-system.md; or
  when the user mentions Carinya Digital, CD brand, voice, theme, or design
  system. Do not use for Carinya Parc farm-site work.
user-invocable: true
---

Read `docs/` before designing, writing copy, or adding UI. Always start with
`docs/design-system.md`. Read other files in `docs/` when they exist and match
the task (copy → voice; routing/packages → architecture; scope → product). Do
not skip this — the packages implement the docs; the docs are the source of
intent.

Then read the production sources:

- `packages/carinya-theme/README.md` and `packages/carinya-theme/css/tokens.css`
  before choosing colour, type, or radius.
- `packages/ui/src/` before adding or restyling a component.

If invoked without a brief, ask what to build (production app vs throwaway
prototype) and whether the output is copy, UI, or both.

## Copy

Follow the content fundamentals in `docs/design-system.md`. Australian English.
No emoji, no exclamation points, no AI/agency jargon.

## Visual and UI

- Tokens: `@import '@carinya-digital/theme'`. Do not copy tokens into apps. Do
  not invent a second token sheet. Prefer semantic colour tokens (`bg-primary`);
  raw brand names when those are too coarse.
- Components: import from `@carinya-digital/ui`. Interactive primitives wrap
  Base UI (`@base-ui/react`). Reuse before adding. Match existing variants.
- Tailwind CSS 4 is CSS-first — the theme package *is* the Tailwind config.
  There is no `tailwind.config.ts` for brand tokens.
- Headings: Spectral (`font-heading`). Body/UI: IBM Plex Sans (`font-sans`).
  Labels/eyebrows: IBM Plex Mono (`font-mono`), uppercase, `tracking-label`.
- Lead with eucalypt (`primary`). Clay is a sparing secondary accent. Sage is a
  tint on dark grounds. Max two accents in one view. No gradients. No shadows.
- Square corners (`rounded-sm`, 2px). `rounded-pill` for tags only.

## Production vs prototype

- **Production (this repo):** reuse `@carinya-digital/theme` and
  `@carinya-digital/ui`. Site-specific CSS stays in the consuming app.
- **Throwaway mocks:** static HTML is fine; use the token names and visual
  rules in `docs/design-system.md`. Prototype inside an app when you need
  Tailwind. Do not invent a parallel component set.
