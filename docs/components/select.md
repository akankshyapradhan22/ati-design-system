# Select

Dropdown selection with optional search (ComboBox). Built on React Aria.

**Import**

```tsx
import { Select } from "@/components/base/select/select";
import { MultiSelect } from "@/components/base/select/multi-select";
```

## Basic

```tsx
const vehicles = [
  { id: "truck", name: "Truck" },
  { id: "van", name: "Van" },
];

<Select label="Vehicle type" placeholder="Select type" items={vehicles}>
  {(item) => <Select.Item id={item.id}>{item.name}</Select.Item>}
</Select>
```

## With Search (ComboBox)

```tsx
<Select.ComboBox label="Search vehicles" placeholder="Type to search…" items={vehicles}>
  {(item) => <Select.Item id={item.id}>{item.name}</Select.Item>}
</Select.ComboBox>
```

## With Avatars

```tsx
<Select items={drivers} icon={User01}>
  {(driver) => (
    <Select.Item avatarUrl={driver.avatar} supportingText={driver.license}>
      {driver.name}
    </Select.Item>
  )}
</Select>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | — | Field label |
| `placeholder` | `string` | — | Placeholder |
| `items` | `Array` | — | Data items |
| `size` | `sm \| md \| lg` | `md` | Select size |
| `isRequired` | `boolean` | `false` | Required |
| `isDisabled` | `boolean` | `false` | Disabled |
