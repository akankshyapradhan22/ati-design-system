# Icons

## @untitledui/icons (Free)

1,100+ line-style icons included in the repo. All are SVG components accepting standard HTML attributes.

```tsx
import { Home01, Settings01, ChevronDown, Check } from "@untitledui/icons";

// Standalone
<Home01 className="size-5 text-fg-secondary" />

// As component prop (tree-shakeable)
<Button iconLeading={Home01}>Dashboard</Button>

// As JSX element — must add data-icon
<Button iconLeading={<ChevronDown data-icon className="size-4" />}>
  Options
</Button>
```

## Sizing

| Class | Size | Use case |
|---|---|---|
| `size-4` | 16px | Inline icons, dense UI |
| `size-5` | 20px | Default icon size |
| `size-6` | 24px | Prominent icons |
| `size-8` | 32px | Featured icons (sm) |
| `size-10` | 40px | Featured icons (md) |

## Colors

```tsx
// Semantic colors (recommended)
<Home01 className="size-5 text-fg-primary" />       // high contrast
<Home01 className="size-5 text-fg-secondary" />     // medium
<Home01 className="size-5 text-fg-tertiary" />      // subtle
<Home01 className="size-5 text-fg-brand-primary" /> // brand teal

// Accessibility
<Home01 className="size-5" aria-hidden="true" />    // decorative
<Home01 className="size-5" aria-label="Home" />     // meaningful
```

## @untitledui/file-icons

File-type icons (PDF, ZIP, image, etc.):

```tsx
import { FilePdf } from "@untitledui/file-icons";
<FilePdf className="size-8" />
```
