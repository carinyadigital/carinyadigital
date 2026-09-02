# Carinya Digital — Design System

Carinya Digital ("CD") is the digital operating arm behind Carinya Parc, a working farm. It packages the digital capability built for the farm — website, content, marketing, bookings, admin — for other small rural businesses that need the same leverage without an internal team.

This is a **greenfield brand**: a close cousin of Carinya Parc rather than a copy — same rural-authentic roots, its own more considered/editorial identity.

The production source of truth is in the monorepo packages, not a parallel token sheet:

| Layer | Package | Role |
| --- | --- | --- |
| Tokens + Tailwind theme | `@carinya-digital/theme` (`packages/carinya-theme`) | CSS-first Tailwind CSS 4 `@theme` tokens |
| Components | `@carinya-digital/ui` (`packages/ui`) | Shared React primitives, styled with those tokens |
| Interaction | `@base-ui/react` | Unstyled accessible primitives under the UI package |

Do not copy tokens into apps. Do not keep a vanilla `:root` sheet beside the theme package.

## Content fundamentals

- Voice is plain-spoken, grounded, unhurried — a working farm, not a lifestyle label or a SaaS pitch.
- Full name "Carinya Digital" on first mention; "CD" (capitalised in prose) or the "cd" mark thereafter.
- Say: "Less admin, more capacity." / "Proven on a working farm." / "A website that keeps up with you."
- Avoid: AI/agentic jargon, corporate agency polish, overpromising a full farm platform, exclamation points, emoji.
- Values (regeneration, stewardship, collaboration, transparency) stay implicit in how things are described, not stated as a slogans list.

## Visual foundations

- **Colour**: Paper (`#F6F3EC`) and Ink (`#2B2822`) carry the page; Eucalypt (`#5C6A4A`) leads as the one primary accent; Clay (`#A05A2C`) is a sparing secondary accent (a single figure, a rule, an active state). Sage (`#A9B596`) is a tint, mainly on dark grounds. Max two accents in any one view. No gradients.
- **Type**: Spectral (serif) for display/headings and italic pull-quotes; IBM Plex Sans for body and UI; IBM Plex Mono, uppercase with wide letter-spacing, for eyebrows/labels/data.
- **Wordmark**: lowercase logotype, two lines ("carinya" / "**digital**" in Eucalypt, heavier weight), a small Eucalypt dot aligned to the first line's x-height. "cd" shorthand mark: lowercase "c" + Eucalypt "d". Do not invent a graphic logo.
- **Spacing**: 4px-based scale (8/16/32/64/96px), generous whitespace, section rhythm on 96–120px vertical padding.
- **Shape**: mostly square corners (`rounded-sm` / 2px on buttons and cards); pill radius reserved for tags only. Flat 1px hairline borders instead of shadows — no drop shadows anywhere in the system.
- **Cards**: flat fill (`bg-card`), 1px border or a 1px border-gap grid between tiles, no shadow, no rounding beyond `rounded-sm`.
- **Imagery**: minimal/typographic-led for now; placeholders where real farm/place photography will go later.
- **Motion**: none defined yet — keep interactions simple (colour/opacity shifts on hover) if added.

## Iconography

None defined — the brand currently has no icon set. A small solid-circle "dot" glyph functions as the only mark. If icons are needed later, prefer a plain single-weight line set (e.g. Lucide) over anything illustrative or filled.

---

## Theme package (`@carinya-digital/theme`)

CSS-first Tailwind CSS 4 theme. This package **is** the brand token sheet and the Tailwind theme in one.

```css
@import '@carinya-digital/theme';
```

That import pulls in `tailwindcss` plus `packages/carinya-theme/css/tokens.css`. All brand tokens live in a single `@theme` block (plus `.dark` semantic overrides). Tailwind v4 prefixes colour tokens as `--color-*`, so `--color-eucalypt` becomes the `eucalypt` / `bg-eucalypt` / `text-eucalypt` utilities.

Fonts are **not** bundled. Consuming apps load Spectral, IBM Plex Sans, and IBM Plex Mono (Fontsource in the Astro site; `next/font` in Next apps) and expose them as `--font-spectral`, `--font-ibm-plex-sans`, and `--font-ibm-plex-mono`. The theme maps those to `font-heading`, `font-sans`, and `font-mono`.

| Token family | Notes |
| --- | --- |
| Brand colours (eucalypt, clay, sage) | Primary accent is eucalypt; clay is sparing secondary |
| Neutrals (ink, paper, line, muted, faint) | Flat surfaces — no shadow tokens |
| Semantic colours (background, primary, muted, ring, …) | Also inverse text for dark surfaces |
| Radius (`sm`, `md`, `pill`) | Square by default; pill reserved for tags |
| Type scale (`text-display` … `text-label`) | Spectral headings, Plex Sans body, mono labels |
| Spacing | Tailwind defaults on a 4px grid |

Semantic mappings to prefer in UI: `bg-background`, `text-foreground`, `bg-card`, `bg-primary`, `text-primary-foreground`, `text-muted-foreground`, `border-border`, `ring-ring`. Reach for raw brand names (`eucalypt`, `clay`, `sage`) when a semantic token is too coarse.

See `packages/carinya-theme/README.md` for the type-utility table.

## Tailwind CSS 4

There is no `tailwind.config.ts` for brand tokens. Tailwind v4 is configured in CSS:

1. `@import 'tailwindcss'` lives in the theme package (`css/index.css`).
2. `@theme { … }` in `css/tokens.css` registers colours, fonts, type, radius.
3. `@custom-variant dark (&:where(.dark, .dark *));` plus a `.dark { … }` block override semantic colours. `@theme` always compiles onto `:root`; do not try to scope a second `@theme` block to `.dark`.

Consuming apps:

- Depend on `tailwindcss` ^4 and `@tailwindcss/postcss`.
- Point PostCSS at `@tailwindcss/postcss` (no Autoprefixer-era `tailwind.config.js` pipeline).
- Import `@carinya-digital/theme` once from the app global stylesheet.
- Keep app-only CSS (`@plugin` typography, page overrides) in the app. Do not redeclare brand tokens there.

## UI package (`@carinya-digital/ui`)

Shared React components for CD apps, styled with the theme tokens.

```tsx
import { Button, ContentCard, Input, Tag, Stat, Container, Hero } from '@carinya-digital/ui';
```

Current set (sized to marketing and simple forms):

| Component | Purpose |
| --- | --- |
| `Button` / `ButtonLink` | Primary / secondary / ghost / destructive / link. Wraps Base UI `Button`. `ButtonLink` is the same styles on an anchor. |
| `Input` | Text field with optional mono uppercase label. |
| `Tag` | Light / dark tones. The only pill-radius component. |
| `Card` / `ContentCard` | Flat surface; optional index, title, description. |
| `Stat` | Large serif figure + short label. |
| `Container` / `Section` / `Main` | Layout chrome — 1280px max, 96px section rhythm. |
| `Heading` / `Subheading` / `Eyebrow` / `Text` | Type primitives (Spectral / Plex Sans / Plex Mono). |
| `Wordmark` | Typographic carinya / **digital** mark with eucalypt dot. |
| `TextLink` | Nav, action, muted, and body link styles. |
| `Hero` / `FeatureSplit` / `FeatureGrid` / `StatBand` / `CallToAction` | Marketing section shells. `Hero` and `CallToAction` take `align` (`start` / `center`); `StatBand` can lead with a headline and description; `FaqList` has `stack` and `split` layouts. |
| `Feature` / `Announcement` / `Stack` | Text-only feature cell; compact linked eyebrow (square, mono, not a pill); flex grouping for Astro-to-React slots. |
| `InstallCommand` | Copyable install snippet (client). |
| `FaqItem` / `FaqList` | Disclosure FAQ, no extra JS framework. Native `<details>`. |
| `ImageSlot` / `Chip` / `BorderGrid` / `InverseSurface` | Placeholders (optional `src` when an image exists), chips, 1px gap grids, ink bands. |
| `cn` | `clsx` + `tailwind-merge` helper. |

Reuse these before adding a new primitive. New components belong in this package when more than one app will use them; app-specific chrome stays in the app.

`@carinya-digital/theme` is a devDependency of the UI package so components can be typechecked against the token names; apps must still import the theme CSS themselves.

## Base UI

[Base UI](https://base-ui.com) (`@base-ui/react`) supplies **unstyled, accessible** primitives (keyboard, focus, ARIA). The UI package wraps those primitives and applies Carinya Digital classes — it does not reimplement behaviour.

Rules:

- Prefer a Base UI primitive for anything interactive (button, dialog, checkbox, menu, tabs). Native elements are fine for purely presentational pieces (`Card`, `Tag`, `Stat`).
- Style with Tailwind token utilities and `class-variance-authority` for variants. Do not add CSS modules or inline brand colours.
- Pass Base UI's `render` prop through when the wrapper needs to merge into another element (e.g. a Next.js `Link`).
- Add `"use client"` only on modules that use Base UI or other client APIs. Presentational components stay server-safe.

`Button` is the reference implementation: Base UI `Button` + `cva` variants + `cn()`. Follow that shape for the next interactive primitive.

## Caveats

- No logo/mark file — wordmark is typographic only. Do not invent a graphic mark.
- Component set is still small. Add to `@carinya-digital/ui` when a second surface needs the same control; keep one-off layout in the app.
- If Carinya Parc brand materials need reconciliation later, change tokens in `@carinya-digital/theme` first, then components.
