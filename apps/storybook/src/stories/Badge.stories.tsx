import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../../../web/src/components/base/badges/badges";

const meta: Meta<typeof Badge> = {
  title: "Base/Badge",
  component: Badge,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["gray", "brand", "error", "warning", "success", "blue", "purple"],
    },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Brand: Story = {
  args: { color: "brand", size: "md", children: "New" },
};

export const Success: Story = {
  args: { color: "success", size: "md", children: "Active" },
};

export const Error: Story = {
  args: { color: "error", size: "md", children: "Failed" },
};
