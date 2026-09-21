import type { Preview } from "@storybook/react";
import "../src/styles/globals.css";
import "../src/styles/theme.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "gray", value: "#f9fafb" },
        { name: "brand", value: "#00a99d" },
      ],
    },
  },
};

export default preview;
