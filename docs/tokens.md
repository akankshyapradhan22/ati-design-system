# Design Tokens

All tokens are CSS custom properties defined in `apps/web/src/styles/theme.css` and applied via Tailwind CSS v4's `@theme {}` block.

## How Tokens Work

```css
/* In theme.css */
@theme {
  --color-brand-950: #00a99d;
  --font-body: "Inter", sans-serif;
  --shadow-md: 0px 4px 6px -1px rgba(0,0,0,0.1);
}
```

```html
<!-- In components (Tailwind generates utilities from @theme vars) -->
<div class="bg-brand-950 font-body shadow-md">…</div>
```

## Token Categories

| Category | Prefix | Example |
|---|---|---|
| Brand colors | `--color-brand-*` | `--color-brand-950` → `#00a99d` |
| Semantic text | `--color-text-*` | `--color-text-primary` |
| Semantic bg | `--color-bg-*` | `--color-bg-brand-solid` |
| Semantic border | `--color-border-*` | `--color-border-brand` |
| Semantic fg | `--color-fg-*` | `--color-fg-primary` |
| Typography | `--text-*` / `--font-*` | `--text-md`, `--font-body` |
| Spacing | `--spacing` | 4px base unit |
| Radius | `--radius-*` | `--radius-lg` → 8px |
| Shadows | `--shadow-*` | `--shadow-xl` |
| Utility colors | `--color-utility-*` | `--color-utility-red-500` |

## Dark Mode

Tokens automatically switch in dark mode. The `.dark-mode` class on `<html>` remaps semantic tokens:

```css
.dark-mode {
  --color-bg-primary: var(--color-neutral-950);
  --color-text-primary: var(--color-neutral-50);
  --color-border-primary: var(--color-neutral-700);
  /* ... */
}
```

No component changes needed — every component using semantic tokens gets dark mode for free.

## Full Token Reference

See `apps/web/src/styles/theme.css` for the complete list of ~200 tokens.
