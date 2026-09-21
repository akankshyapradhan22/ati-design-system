import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@/components/base/badges/badges";

const meta: Meta<typeof Badge> = {
  title: "Base/Badge",
  component: Badge,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "select", options: ["gray","brand","error","warning","success","blue","indigo","purple","pink","orange"] },
    size: { control: "select", options: ["sm","md","lg"] },
    type: { control: "select", options: ["pill-color","color","modern"] },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Brand: Story = { args: { color: "brand", size: "md", type: "pill-color", children: "New" } };
export const Success: Story = { args: { color: "success", size: "md", type: "pill-color", children: "Active" } };
export const Error: Story = { args: { color: "error", size: "md", type: "pill-color", children: "Failed" } };
export const Warning: Story = { args: { color: "warning", size: "md", type: "pill-color", children: "Pending" } };
export const Gray: Story = { args: { color: "gray", size: "md", type: "pill-color", children: "Draft" } };
export const Modern: Story = { args: { color: "gray", size: "md", type: "modern", children: "Label" } };
export const Color: Story = { args: { color: "brand", size: "md", type: "color", children: "Brand" } };
