# Getting Started

## Prerequisites

- Node.js 18+
- pnpm 9+

## Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/akankshyapradhan22/ati-design-system.git
cd ati-design-system
pnpm install
```

## Run the dev server

```bash
pnpm dev
```

Opens the Next.js app at `http://localhost:3000` with all components.

## Import a component

All components live under `apps/web/src/components/`. Import using the `@/` alias:

```tsx
import { Button } from "@/components/base/buttons/button";
import { Badge } from "@/components/base/badges/badges";
import { Avatar } from "@/components/base/avatar/avatar";

export default function Example() {
  return (
    <div className="flex items-center gap-3">
      <Avatar src="/avatar.jpg" size="md" />
      <Button color="primary" size="md">Save changes</Button>
      <Badge color="success" type="pill-color">Active</Badge>
    </div>
  );
}
```

## Brand color override

Edit `apps/web/src/styles/theme.css` to update the brand scale:

```css
@theme {
  --color-brand-50:  #f2fbfa;
  --color-brand-100: #e5f6f5;
  /* ... */
  --color-brand-950: #00a99d;  /* primary action color */
}
```

## Monorepo structure

```
ati-design-system/
├── apps/
│   └── web/               # Next.js 16 app with all UI components
│       ├── src/
│       │   ├── components/ # 90+ UI components (base, app, marketing, foundations)
│       │   ├── styles/     # Tailwind theme + global CSS
│       │   └── hooks/      # Custom React hooks
│       └── package.json
├── packages/
│   └── ui/                # Publishable @ati/ui package
└── docs/                  # This documentation (MkDocs)
```
