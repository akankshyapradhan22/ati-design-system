# Avatar

User profile images with status indicators, initials fallback, and label groups.

**Import**

```tsx
import { Avatar } from "@/components/base/avatar/avatar";
import { AvatarLabelGroup } from "@/components/base/avatar/avatar-label-group";
```

## Basic Usage

```tsx
<Avatar src="/user.jpg" alt="Priya Sharma" size="md" />
<Avatar initials="PS" size="md" />
<Avatar icon={User01} size="md" />
```

## With Status

```tsx
<Avatar src="/user.jpg" status="online" size="md" />
<Avatar src="/user.jpg" status="offline" size="sm" />
```

## Sizes

`xs` · `sm` · `md` · `lg` · `xl` · `2xl`

## Label Group

```tsx
<AvatarLabelGroup
  src="/user.jpg"
  title="Priya Sharma"
  subtitle="priya@atimotors.com"
  size="md"
/>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `src` | `string` | — | Image URL |
| `alt` | `string` | — | Alt text |
| `initials` | `string` | — | Text fallback (e.g. "PS") |
| `icon` | `FC` | — | Icon fallback |
| `size` | `xs \| sm \| md \| lg \| xl \| 2xl` | `md` | Avatar size |
| `status` | `online \| offline` | — | Status dot |
| `verified` | `boolean` | — | Verified badge |
