# Colors

All colors are defined as CSS custom properties in `apps/web/src/styles/theme.css` and consumed via Tailwind's `@theme {}` block.

## Brand — Ati Teal

Extracted from the Figma `_Primitives / Colors/Brand` collection. This teal scale replaces Untitled UI's default purple across all interactive components.

<div class="color-grid">
  <div class="color-chip"><div class="chip-block" style="--c:#f2fbfa"></div><div class="chip-label"><code>brand-50</code><span>#f2fbfa</span></div></div>
  <div class="color-chip"><div class="chip-block" style="--c:#e5f6f5"></div><div class="chip-label"><code>brand-100</code><span>#e5f6f5</span></div></div>
  <div class="color-chip"><div class="chip-block" style="--c:#cceeeb"></div><div class="chip-label"><code>brand-200</code><span>#cceeeb</span></div></div>
  <div class="color-chip"><div class="chip-block" style="--c:#b2e5e2"></div><div class="chip-label"><code>brand-300</code><span>#b2e5e2</span></div></div>
  <div class="color-chip"><div class="chip-block" style="--c:#99ddd8"></div><div class="chip-label"><code>brand-400</code><span>#99ddd8</span></div></div>
  <div class="color-chip"><div class="chip-block" style="--c:#80d4ce"></div><div class="chip-label"><code>brand-500</code><span>#80d4ce</span></div></div>
  <div class="color-chip"><div class="chip-block" style="--c:#66cbc4"></div><div class="chip-label"><code>brand-600</code><span>#66cbc4</span></div></div>
  <div class="color-chip"><div class="chip-block" style="--c:#4dc3ba"></div><div class="chip-label"><code>brand-700</code><span>#4dc3ba</span></div></div>
  <div class="color-chip"><div class="chip-block" style="--c:#33bab1"></div><div class="chip-label"><code>brand-800</code><span>#33bab1</span></div></div>
  <div class="color-chip"><div class="chip-block" style="--c:#1ab2a7"></div><div class="chip-label"><code>brand-900</code><span>#1ab2a7</span></div></div>
  <div class="color-chip"><div class="chip-block" style="--c:#00a99d"></div><div class="chip-label"><code>brand-950</code><span>#00a99d</span></div></div>
</div>

Usage in Tailwind:

```html
<div class="bg-brand-600 text-white">Primary button</div>
<div class="text-brand-700">Brand link</div>
<div class="border-brand-500">Focused input</div>
```

## Semantic Text Colors

| Token | Light value | Usage |
|---|---|---|
| `text-primary` | neutral-900 | Page headings, body copy |
| `text-secondary` | neutral-700 | Labels, section headings |
| `text-tertiary` | neutral-600 | Supporting text, captions |
| `text-quaternary` | neutral-500 | Footer headings, subtle labels |
| `text-placeholder` | neutral-500 | Input placeholders |
| `text-brand-primary` | brand-900 | Brand headings |
| `text-brand-secondary` | brand-700 | Brand buttons, accented text |
| `text-error-primary` | red-600 | Error messages |
| `text-warning-primary` | yellow-600 | Warning text |
| `text-success-primary` | green-600 | Success text |
| `text-white` | white | Always white |
| `text-primary_on-brand` | white | Text on brand backgrounds |

## Semantic Background Colors

| Token | Light value | Usage |
|---|---|---|
| `bg-primary` | white | Main page background |
| `bg-secondary` | neutral-50 | Section backgrounds |
| `bg-tertiary` | neutral-100 | Card backgrounds |
| `bg-brand-primary` | brand-50 | Brand-tinted backgrounds |
| `bg-brand-solid` | brand-600 | Solid brand elements (toggles, CTAs) |
| `bg-error-primary` | red-50 | Error state backgrounds |
| `bg-warning-primary` | yellow-50 | Warning state backgrounds |
| `bg-success-primary` | green-50 | Success state backgrounds |
| `bg-overlay` | neutral-950 | Modal overlays |

## Semantic Border Colors

| Token | Light value | Usage |
|---|---|---|
| `border-primary` | neutral-300 | Input fields, button groups, checkboxes |
| `border-secondary` | neutral-200 | Cards, tables, content dividers |
| `border-brand` | brand-500 | Focused inputs, active states |
| `border-error` | red-500 | Error state inputs |

## Utility Palettes

The following color palettes are available for badges, status indicators, and utility UI. In dark mode they automatically flip to their inverse step (50 → 950, 100 → 900, etc.).

**Available palettes:** `blue` · `neutral` · `red` · `yellow` · `green` · `orange` · `indigo` · `fuchsia` · `pink` · `purple` · `sky` · `slate` · `emerald` · `amber`

Each palette exposes steps `50` through `700` via `--color-utility-{palette}-{step}`.
