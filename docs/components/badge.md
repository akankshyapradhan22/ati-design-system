# Badge

Status indicators and labels. Three variants: `Badge`, `BadgeWithDot`, `BadgeWithIcon`.

**Import**

```tsx
import { Badge, BadgeWithDot, BadgeWithIcon } from "@/components/base/badges/badges";
```

## Variants

```tsx
<Badge color="brand" type="pill-color">New</Badge>
<Badge color="success" type="color">Active</Badge>
<Badge color="gray" type="modern">Draft</Badge>

<BadgeWithDot color="success" type="pill-color">Online</BadgeWithDot>
<BadgeWithDot color="error" type="pill-color">Offline</BadgeWithDot>

<BadgeWithIcon iconLeading={ArrowUp} color="success">+12%</BadgeWithIcon>
<BadgeWithIcon iconLeading={ArrowDown} color="error">−3%</BadgeWithIcon>
```

## Colors

`gray` · `brand` · `error` · `warning` · `success` · `slate` · `sky` · `blue` · `indigo` · `purple` · `pink` · `rose` · `orange`

## Types

| Type | Description |
|---|---|
| `pill-color` | Rounded pill with color background |
| `color` | Square-ish badge with color background |
| `modern` | Gray outline style |

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `color` | string | `gray` | Color palette |
| `type` | `pill-color \| color \| modern` | `pill-color` | Style variant |
| `size` | `sm \| md \| lg` | `md` | Badge size |
