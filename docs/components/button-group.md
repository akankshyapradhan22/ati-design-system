# Button Group

Segmented control / toggle group for mutually exclusive options. Built on React Aria's `ToggleButtonGroup`.

**Import**

```tsx
import { ButtonGroup } from "@/components/base/button-group/button-group";
```

## Usage

```tsx
<ButtonGroup
  items={[
    { id: "day", label: "Day" },
    { id: "week", label: "Week" },
    { id: "month", label: "Month" },
  ]}
  defaultSelectedKey="week"
/>
```

## With Icons

```tsx
import { AlignLeft, AlignCenter, AlignRight } from "@untitledui/icons";

<ButtonGroup
  items={[
    { id: "left", label: "Left", icon: AlignLeft },
    { id: "center", label: "Center", icon: AlignCenter },
    { id: "right", label: "Right", icon: AlignRight },
  ]}
  defaultSelectedKey="left"
/>
```
