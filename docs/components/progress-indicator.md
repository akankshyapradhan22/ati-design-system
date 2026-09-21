# Progress Indicator

Linear progress bars for upload, loading, and completion states.

**Import**

```tsx
import { ProgressIndicator } from "@/components/base/progress-indicators/progress-indicator";
```

## Usage

```tsx
<ProgressIndicator value={40} label="Uploading…" />
<ProgressIndicator value={75} showValue />
<ProgressIndicator value={100} color="success" label="Complete" />
<ProgressIndicator isIndeterminate label="Processing…" />
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `number` | — | Progress 0–100 |
| `label` | `string` | — | Accessible label |
| `showValue` | `boolean` | `false` | Show percentage text |
| `color` | `brand \| success \| error` | `brand` | Track color |
| `isIndeterminate` | `boolean` | `false` | Animated indeterminate |
