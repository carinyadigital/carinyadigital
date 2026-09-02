# `@carinya-digital/theme`

CSS-first Tailwind CSS 4 theme for Carinya Digital. Production token source of truth.

```css
@import '@carinya-digital/theme';
```

Site-specific CSS (`@plugin` typography, component utilities, page overrides) stays in consuming apps. Fonts load in the consuming app (`--font-spectral`, `--font-ibm-plex-sans`, `--font-ibm-plex-mono`) via Fontsource, `next/font`, or equivalent; this package does not `@import` Google Fonts.

## What this package owns

All brand tokens live in `css/tokens.css` as a single `@theme` block (plus `.dark` semantic overrides). Tailwind v4 prefixes colour tokens as `--color-*`.

| Token family | In `@theme` | Notes |
| --- | --- | --- |
| Brand colours (eucalypt, clay, sage) | Yes | Primary accent is eucalypt; clay is sparing secondary |
| Neutrals (ink, paper, line, muted, faint) | Yes | Flat surfaces — no shadows defined |
| Semantic colours (background, primary, muted, ring, charts, …) | Yes | Also inverse text for dark surfaces |
| Radius (`sm`, `md`, `pill`) | Yes | Square corners by default; pill reserved for tags |
| Type scale (`text-display` … `text-label`) | Yes | Spectral headings, IBM Plex Sans body, mono labels |
| Spacing | Tailwind defaults | 4px grid: spacing `1` = 4px … `30` = 120px |

Do not copy tokens into consuming apps. Do not keep a parallel vanilla `:root` sheet.

## Type utilities

| Class | Size | Default line-height / extras |
| --- | --- | --- |
| `text-display` | clamp(44px, 7vw, 104px) | 1.05 |
| `text-h1` | clamp(32px, 4.5vw, 56px) | 1.05 |
| `text-h2` | clamp(28px, 3.4vw, 42px) | 1.3 |
| `text-h3` | 28px | 1.3 |
| `text-body-lg` | 18px | 1.65 |
| `text-body` | 16px | 1.65 |
| `text-small` | 15px | 1.65 |
| `text-label` | 12px | tracking 0.08em, weight 500 — add `uppercase` for eyebrows |
| `tracking-label` | 0.08em | |
| `tracking-label-loose` | 0.12em | |
