# Shadows

All shadow tokens are defined in `apps/web/src/styles/theme.css`.

## Elevation Scale

| Token | CSS Value | Usage |
|---|---|---|
| `shadow-xs` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift — dropdowns, tooltips |
| `shadow-sm` | `0 1px 3px rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)` | Cards, inputs |
| `shadow-md` | `0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.06)` | Popovers, menus |
| `shadow-lg` | Multi-layer | Modals, drawers |
| `shadow-xl` | Multi-layer | Floating panels |
| `shadow-2xl` | `0 24px 48px -12px rgba(0,0,0,0.18)` | Dialogs, sheets |
| `shadow-3xl` | `0 32px 64px -12px rgba(0,0,0,0.14)` | Hero illustrations |

## Skeuomorphic Shadows

For inset button depth effects:

| Token | Usage |
|---|---|
| `shadow-skeuomorphic` | Button inset border + depth |
| `shadow-xs-skeuomorphic` | Combined xs + skeuomorphic |

## Usage

```tsx
<div className="shadow-md rounded-xl p-6 bg-primary">Card content</div>
<div className="shadow-2xl rounded-2xl p-8">Modal</div>
```
