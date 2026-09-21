# Toggle

On/off switch built on React Aria's `Switch`.

**Import**

```tsx
import { Toggle } from "@/components/base/toggle/toggle";
```

## Usage

```tsx
<Toggle label="Notifications" />
<Toggle label="Dark mode" defaultSelected />
<Toggle label="Disabled" isDisabled />
```

## Controlled

```tsx
<Toggle
  label="Alerts"
  isSelected={alertsEnabled}
  onChange={setAlertsEnabled}
/>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | — | Toggle label |
| `isSelected` | `boolean` | — | Controlled state |
| `defaultSelected` | `boolean` | `false` | Default uncontrolled state |
| `isDisabled` | `boolean` | `false` | Disabled |
