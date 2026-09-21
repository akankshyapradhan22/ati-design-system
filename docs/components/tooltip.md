# Tooltip

Contextual hint on hover/focus. Built on React Aria's `Tooltip`.

**Import**

```tsx
import { Tooltip } from "@/components/base/tooltip/tooltip";
```

## Usage

```tsx
<Tooltip content="Save your work">
  <Button iconLeading={Save01} aria-label="Save" />
</Tooltip>

<Tooltip content="This field is required" placement="top">
  <HelpCircle className="size-4 text-fg-quaternary" />
</Tooltip>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `content` | `string \| ReactNode` | — | Tooltip text |
| `placement` | `top \| bottom \| left \| right` | `top` | Position |
| `children` | `ReactNode` | — | Trigger element |
