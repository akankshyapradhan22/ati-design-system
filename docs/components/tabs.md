# Tabs

Horizontal tab navigation. Built on React Aria's `Tabs`.

**Import**

```tsx
import { Tabs } from "@/components/base/tabs/tabs";
```

## Usage

```tsx
<Tabs defaultSelectedKey="overview">
  <Tabs.List>
    <Tabs.Tab id="overview">Overview</Tabs.Tab>
    <Tabs.Tab id="analytics">Analytics</Tabs.Tab>
    <Tabs.Tab id="settings">Settings</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel id="overview">Overview content</Tabs.Panel>
  <Tabs.Panel id="analytics">Analytics content</Tabs.Panel>
  <Tabs.Panel id="settings">Settings content</Tabs.Panel>
</Tabs>
```

## Props

| Prop | Type | Description |
|---|---|---|
| `defaultSelectedKey` | `string` | Initial active tab |
| `selectedKey` | `string` | Controlled active tab |
| `onSelectionChange` | `(key: string) => void` | Selection handler |
