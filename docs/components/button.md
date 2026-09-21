# Button

The most frequently used interactive element. Built on React Aria's `Button` and `Link`.

**Import**

```tsx
import { Button } from "@/components/base/buttons/button";
```

## Variants

```tsx
<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button color="tertiary">Tertiary</Button>
<Button color="link-color">Link</Button>
<Button color="primary-destructive">Delete</Button>
```

## Sizes

```tsx
<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
```

## With Icons

```tsx
import { Save01, Trash02, ChevronDown } from "@untitledui/icons";

<Button iconLeading={Save01}>Save</Button>
<Button iconTrailing={ChevronDown}>Options</Button>
<Button iconLeading={Trash02} color="primary-destructive">Delete</Button>

{/* Icon-only — always include an aria-label */}
<Button iconLeading={Save01} aria-label="Save" />
```

## States

```tsx
<Button isLoading>Saving…</Button>
<Button isLoading showTextWhileLoading>Saving…</Button>
<Button isDisabled>Disabled</Button>
```

## As a Link

```tsx
<Button href="/dashboard" color="link-color">Go to Dashboard</Button>
<Button href="https://example.com" color="secondary" iconTrailing={ExternalLink01}>
  External
</Button>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `color` | `primary \| secondary \| tertiary \| link-gray \| link-color \| link-destructive \| primary-destructive \| secondary-destructive \| tertiary-destructive` | `primary` | Visual variant |
| `size` | `xs \| sm \| md \| lg \| xl` | `sm` | Button size |
| `iconLeading` | `FC \| ReactNode` | — | Icon before text |
| `iconTrailing` | `FC \| ReactNode` | — | Icon after text |
| `isDisabled` | `boolean` | `false` | Disabled state |
| `isLoading` | `boolean` | `false` | Loading spinner |
| `showTextWhileLoading` | `boolean` | `false` | Keep text visible while loading |
| `href` | `string` | — | Renders as `<a>` |
