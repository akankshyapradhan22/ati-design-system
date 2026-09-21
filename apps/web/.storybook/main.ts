import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";
import type { Plugin } from "vite";

const stripUseClient: Plugin = {
  name: "strip-use-client",
  transform(code, id) {
    if (!/\.(tsx?|jsx?)$/.test(id)) return;
    const cleaned = code.replace(/^["']use client["'];?\s*\n/, "");
    if (cleaned === code) return;
    return { code: cleaned, map: null };
  },
};

const config: StorybookConfig = {
  stories: ["../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: { autodocs: "tag" },
  viteFinal: async (config) => {
    const { default: tailwindcss } = await import("@tailwindcss/vite");
    config.plugins = [...(config.plugins || []), tailwindcss(), stripUseClient];
    config.resolve = {
      ...config.resolve,
      alias: {
        ...((config.resolve?.alias as Record<string, string>) || {}),
        "@": path.resolve(__dirname, "../src"),
      },
    };
    config.build = {
      ...config.build,
      rollupOptions: {
        ...config.build?.rollupOptions,
        onwarn(warning, warn) {
          if (warning.code === "MODULE_LEVEL_DIRECTIVE") return;
          warn(warning);
        },
      },
    };
    return config;
  },
};

export default config;
