import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "@/components/base/toggle/toggle";

const meta: Meta<typeof Toggle> = {
  title: "Base/Toggle",
  component: Toggle,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm","md"] },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { size: "md" } };
export const Selected: Story = { args: { size: "md", defaultSelected: true } };
export const WithLabel: Story = { args: { size: "md", label: "Remember me", hint: "Save my login details for next time." } };
export const Disabled: Story = { args: { size: "md", isDisabled: true } };
export const Small: Story = { args: { size: "sm", label: "Small toggle" } };
