# Pagination

Page navigation controls for data tables and lists.

**Import**

```tsx
import { Pagination } from "@/components/base/pagination/pagination";
```

## Usage

```tsx
<Pagination
  totalPages={12}
  currentPage={3}
  onPageChange={(page) => setPage(page)}
/>

<Pagination
  totalPages={50}
  currentPage={currentPage}
  onPageChange={setCurrentPage}
  showFirstLast
/>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `totalPages` | `number` | — | Total page count |
| `currentPage` | `number` | — | Active page |
| `onPageChange` | `(page: number) => void` | — | Page change handler |
| `showFirstLast` | `boolean` | `false` | Show first/last buttons |
