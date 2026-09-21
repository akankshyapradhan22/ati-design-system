# Checkbox

Boolean selection with indeterminate state support. Built on React Aria's `Checkbox`.

**Import**

```tsx
import { Checkbox } from "@/components/base/checkbox/checkbox";
```

## Usage

```tsx
<Checkbox label="Remember me" />
<Checkbox label="Remember me" hint="Save login for 30 days" />
<Checkbox label="Select all" isIndeterminate />
<Checkbox label="Disabled" isDisabled />
```

## Controlled

```tsx
const [checked, setChecked] = useState(false);
<Checkbox
  label="Notifications"
  isSelected={checked}
  onChange={setChecked}
/>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | — | Checkbox label |
| `hint` | `string` | — | Helper text |
| `size` | `sm \| md` | `sm` | Checkbox size |
| `isSelected` | `boolean` | — | Controlled checked state |
| `isIndeterminate` | `boolean` | `false` | Dash/indeterminate state |
| `isDisabled` | `boolean` | `false` | Disabled |
