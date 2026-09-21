import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../../web/src/components/base/buttons/button";

const meta: Meta<typeof Button> = {
  title: "Base/Button",
  component: Button,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: [
        "primary", "secondary", "tertiary",
        "link-gray", "link-color",
        "primary-destructive", "secondary-destructive",
      ],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { color: "primary", size: "md", children: "Button" },
};

export const Secondary: Story = {
  args: { color: "secondary", size: "md", children: "Button" },
};

export const Destructive: Story = {
  args: { color: "primary-destructive", size: "md", children: "Delete" },
};

export const Loading: Story = {
  args: { color: "primary", size: "md", isLoading: true, showTextWhileLoading: true, children: "Saving…" },
};
