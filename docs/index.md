# ATI Design System

The official component library and design system for Ati Motors — built on **Untitled UI PRO** with Ati's custom teal brand tokens and **Tailwind CSS v4**.

<div class="grid cards" markdown>

-   :material-palette: **Brand Colors**

    ---

    Ati teal scale extracted from Figma, replacing Untitled UI's default purple.

    [:octicons-arrow-right-24: Foundations → Colors](foundations/colors.md)

-   :material-checkbox-multiple-blank: **90+ Components**

    ---

    Buttons, inputs, selects, modals, tables, data-viz and more — all accessible via React Aria.

    [:octicons-arrow-right-24: Components](components/index.md)

-   :material-theme-light-dark: **Dark Mode**

    ---

    Every token has light and dark mode values baked in via CSS variables.

    [:octicons-arrow-right-24: Design Tokens](tokens.md)

-   :material-tailwind: **Tailwind CSS v4**

    ---

    Token-driven with `@theme {}` blocks — no config file needed.

    [:octicons-arrow-right-24: Getting Started](getting-started.md)

</div>

## Figma Source

Design tokens, components and spacing are defined in the [Ati Design System Figma file](https://www.figma.com/design/rnuMOfe8AtnrZAAxr1IsMF/Ati-Design-System). The teal brand scale (`--color-brand-50` → `--color-brand-950`) was extracted directly from the `_Primitives / Colors/Brand` collection.

## Stack

| Layer | Technology |
|---|---|
| Components | Untitled UI PRO (React, TypeScript) |
| Styling | Tailwind CSS v4 + CSS Variables |
| Accessibility | React Aria Components |
| Animation | Framer Motion, tailwindcss-animate |
| Icons | @untitledui/icons (1,100+ icons) |
| Monorepo | Turborepo + pnpm workspaces |
