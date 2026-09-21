# Input

Text input fields with labels, hints, icons, and validation states. Built on React Aria's `TextField`.

**Import**

```tsx
import { Input } from "@/components/base/input/input";
import { InputGroup } from "@/components/base/input/input-group";
```

## Basic

```tsx
<Input label="Email" placeholder="priya@atimotors.com" />
<Input label="Search" placeholder="Search vehicles…" icon={SearchLg} />
```

## Validation States

```tsx
<Input label="VIN" isRequired hint="Required field" />
<Input
  label="Email"
  isInvalid
  hint="Please enter a valid email address"
  icon={Mail01}
/>
```

## Sizes

```tsx
<Input size="sm" label="Small" placeholder="…" />
<Input size="md" label="Medium" placeholder="…" />
<Input size="lg" label="Large" placeholder="…" />
```

## Input Group (with addons)

```tsx
<InputGroup label="Website" trailingAddon={<Button size="sm">Copy</Button>}>
  <InputBase placeholder="www.atimotors.com" />
</InputGroup>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | — | Field label |
| `placeholder` | `string` | — | Placeholder text |
| `hint` | `string` | — | Helper text below input |
| `tooltip` | `string` | — | Help icon tooltip |
| `icon` | `FC` | — | Leading icon |
| `size` | `sm \| md \| lg` | `md` | Input size |
| `isRequired` | `boolean` | `false` | Shows asterisk |
| `isDisabled` | `boolean` | `false` | Disabled state |
| `isInvalid` | `boolean` | `false` | Error state |
