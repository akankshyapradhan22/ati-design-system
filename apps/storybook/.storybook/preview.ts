import type { Preview } from "@storybook/react";
import "../../web/src/styles/globals.css";
import "../../web/src/styles/theme.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
