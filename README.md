# ATI Design System

Ati Motors component library — Untitled UI PRO + Ati brand tokens, built with Tailwind CSS v4.

## 📖 Storybook

**[View Component Library →](https://akankshyapradhan22.github.io/ati-design-system/)**

## Monorepo Structure

```
ati-react-ui/
├── apps/
│   ├── web/          Next.js 16 + Untitled UI PRO (all components)
│   └── storybook/    Storybook 8 component catalog
└── packages/
    └── ui/           Shared @ati/ui publishable package
```

## Brand Colors

Extracted from Figma — Ati Design System / _Primitives / Colors/Brand:

| Token | Hex |
|-------|-----|
| brand-50  | `#f2fbfa` |
| brand-500 | `#80d4ce` |
| brand-950 | `#00a99d` |

## Getting Started

```bash
pnpm install
pnpm dev          # Next.js app → localhost:3000
pnpm storybook    # Storybook   → localhost:6006
```

## Adding PRO Components

```bash
cd apps/web
npx untitledui@latest login
npx untitledui@latest add <component-name>
```
