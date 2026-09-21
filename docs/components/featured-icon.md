# Featured Icon

Decorative icon with themed background for emphasis in empty states, modals, and cards.

**Import**

```tsx
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
```

## Usage

```tsx
<FeaturedIcon icon={CheckCircle} color="success" theme="light" size="lg" />
<FeaturedIcon icon={AlertTriangle} color="warning" theme="gradient" size="xl" />
<FeaturedIcon icon={XCircle} color="error" theme="dark" size="md" />
<FeaturedIcon icon={Info} color="brand" theme="outline" size="lg" />
<FeaturedIcon icon={Settings} color="gray" theme="modern" size="lg" />
```

## Colors

`brand` · `gray` · `error` · `warning` · `success`

## Themes

| Theme | Description |
|---|---|
| `light` | Subtle tinted background + colored icon |
| `gradient` | Gradient background effect |
| `dark` | Solid color background + white icon |
| `modern` | Gray contemporary style (`gray` color only) |
| `modern-neue` | Alternative modern style (`gray` color only) |
| `outline` | Border + transparent background |

## Sizes

`sm` (32px) · `md` (40px) · `lg` (48px) · `xl` (56px)
