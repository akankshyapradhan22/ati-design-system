import type { Meta, StoryObj } from "@storybook/react";
import { LoadingIndicator } from "@/components/application/loading-indicator/loading-indicator";

const meta: Meta<typeof LoadingIndicator> = {
  title: "Application/LoadingIndicator",
  component: LoadingIndicator,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm","md","lg"] },
    color: { control: "select", options: ["brand","gray","white"] },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Brand: Story = { args: { size: "md", color: "brand" } };
export const Gray: Story = { args: { size: "md", color: "gray" } };
export const Small: Story = { args: { size: "sm", color: "brand" } };
export const Large: Story = { args: { size: "lg", color: "brand" } };
