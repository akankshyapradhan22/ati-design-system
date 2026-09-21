import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@/components/base/checkbox/checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Base/Checkbox",
  component: Checkbox,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm","md"] },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { size: "sm", label: "Remember me" } };
export const WithHint: Story = { args: { size: "sm", label: "Remember me", hint: "Save my login details for next time." } };
export const Checked: Story = { args: { size: "sm", label: "I accept the terms", defaultSelected: true } };
export const Indeterminate: Story = { args: { size: "sm", label: "Select all", isIndeterminate: true } };
export const Disabled: Story = { args: { size: "sm", label: "Disabled option", isDisabled: true } };
