# Empty State

Placeholder UI for empty lists, search results, or first-time states.

**Import**

```tsx
import { EmptyState } from "@/components/application/empty-state/empty-state";
```

## Usage

```tsx
<EmptyState
  icon={SearchLg}
  title="No vehicles found"
  description="Try adjusting your filters or search terms."
  action={<Button color="primary">Add vehicle</Button>}
/>
```

## Props

| Prop | Type | Description |
|---|---|---|
| `icon` | `FC` | Featured icon |
| `title` | `string` | Heading text |
| `description` | `string` | Supporting text |
| `action` | `ReactNode` | CTA button(s) |
