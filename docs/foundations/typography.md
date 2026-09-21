# Typography

## Font Families

| Token | Value | Usage |
|---|---|---|
| `--font-body` | Inter, -apple-system, Segoe UI, Roboto | Body copy, UI labels |
| `--font-display` | Inter (same) | Display headings |
| `--font-mono` | ui-monospace, Roboto Mono, Menlo | Code blocks |

## Type Scale

All sizes are computed from `--spacing` (4px base unit).

| Token | Size | Line Height | Usage |
|---|---|---|---|
| `text-xs` | 12px | 18px | Helper text, captions |
| `text-sm` | 14px | 20px | Labels, table cells |
| `text-md` | 16px | 24px | Body text (default) |
| `text-lg` | 18px | 28px | Large body, card titles |
| `text-xl` | 20px | 30px | Section headings |
| `text-display-xs` | 24px | 32px | Small display headings |
| `text-display-sm` | 30px | 38px | Modal titles, page headings |
| `text-display-md` | 36px | 44px | Hero headings (−0.72px tracking) |
| `text-display-lg` | 48px | 60px | Landing hero (−0.96px tracking) |
| `text-display-xl` | 60px | 72px | Marketing splash (−1.2px tracking) |
| `text-display-2xl` | 72px | 90px | Max display size (−1.44px tracking) |

## Usage

```tsx
<h1 className="text-display-md font-semibold text-primary">
  Fleet Management
</h1>
<p className="text-md text-secondary">
  Monitor vehicle health, location, and performance in real time.
</p>
<code className="font-mono text-sm text-tertiary">
  VIN-4829301
</code>
```
