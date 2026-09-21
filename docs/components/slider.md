# Slider

Range and single-value sliders. Built on React Aria's `Slider`.

**Import**

```tsx
import { Slider } from "@/components/base/slider/slider";
```

## Usage

```tsx
{/* Single value */}
<Slider label="Volume" defaultValue={50} />

{/* Range */}
<Slider label="Price range" defaultValue={[20, 80]} />

{/* Disabled */}
<Slider label="Speed limit" defaultValue={60} isDisabled />
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | — | Slider label |
| `defaultValue` | `number \| [number, number]` | — | Initial value(s) |
| `value` | `number \| [number, number]` | — | Controlled value |
| `minValue` | `number` | `0` | Minimum |
| `maxValue` | `number` | `100` | Maximum |
| `step` | `number` | `1` | Step increment |
| `isDisabled` | `boolean` | `false` | Disabled |
