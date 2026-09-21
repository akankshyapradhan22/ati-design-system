import type { Meta, StoryObj } from "@storybook/react";

const Badge = ({
  children,
  color = "brand",
  size = "md",
}: {
  children: React.ReactNode;
  color?: "brand" | "gray" | "success" | "error" | "warning";
  size?: "sm" | "md" | "lg";
}) => {
  const base = "inline-flex items-center font-medium rounded-full";
  const sizes = { sm: "px-2 py-0.5 text-xs", md: "px-2.5 py-0.5 text-xs", lg: "px-3 py-1 text-sm" };
  const colors = {
    brand: "bg-[#e5f6f5] text-[#00a99d]",
    gray: "bg-gray-100 text-gray-700",
    success: "bg-green-50 text-green-700",
    error: "bg-red-50 text-red-700",
    warning: "bg-yellow-50 text-yellow-800",
  };
  return <span className={`${base} ${sizes[size]} ${colors[color]}`}>{children}</span>;
};

const meta: Meta<typeof Badge> = {
  title: "Base/Badge",
  component: Badge,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "select", options: ["brand", "gray", "success", "error", "warning"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Brand: Story = { args: { color: "brand", size: "md", children: "New" } };
export const Success: Story = { args: { color: "success", size: "md", children: "Active" } };
export const Error: Story = { args: { color: "error", size: "md", children: "Failed" } };
export const Warning: Story = { args: { color: "warning", size: "md", children: "Pending" } };
export const Gray: Story = { args: { color: "gray", size: "md", children: "Draft" } };
