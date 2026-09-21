import type { Meta, StoryObj } from "@storybook/react";

const Button = ({
  children,
  color = "primary",
  size = "md",
  disabled = false,
}: {
  children: React.ReactNode;
  color?: "primary" | "secondary" | "destructive";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}) => {
  const base = "inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-100";
  const sizes = { sm: "px-3 py-1.5 text-sm", md: "px-4 py-2 text-sm", lg: "px-5 py-2.5 text-base" };
  const colors = {
    primary: "bg-[#00a99d] hover:bg-[#1ab2a7] text-white disabled:opacity-50",
    secondary: "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50",
    destructive: "bg-red-600 hover:bg-red-700 text-white disabled:opacity-50",
  };
  return (
    <button className={`${base} ${sizes[size]} ${colors[color]}`} disabled={disabled}>
      {children}
    </button>
  );
};

const meta: Meta<typeof Button> = {
  title: "Base/Button",
  component: Button,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "select", options: ["primary", "secondary", "destructive"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { color: "primary", size: "md", children: "Button" } };
export const Secondary: Story = { args: { color: "secondary", size: "md", children: "Button" } };
export const Destructive: Story = { args: { color: "destructive", size: "md", children: "Delete" } };
export const Disabled: Story = { args: { color: "primary", size: "md", disabled: true, children: "Button" } };
export const Large: Story = { args: { color: "primary", size: "lg", children: "Button" } };
