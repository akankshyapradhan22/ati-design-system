import type { Meta, StoryObj } from "@storybook/react";
import { Check, Download, Plus, Trash02 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";

const meta: Meta<typeof Button> = {
  title: "Base/Button",
  component: Button,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "select", options: ["primary","secondary","tertiary","link-gray","link-color","primary-destructive","secondary-destructive","tertiary-destructive"] },
    size: { control: "select", options: ["xs","sm","md","lg","xl"] },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { color: "primary", size: "md", children: "Button" } };
export const Secondary: Story = { args: { color: "secondary", size: "md", children: "Button" } };
export const Tertiary: Story = { args: { color: "tertiary", size: "md", children: "Button" } };
export const WithLeadingIcon: Story = { args: { color: "primary", size: "md", iconLeading: Plus, children: "Add item" } };
export const WithTrailingIcon: Story = { args: { color: "secondary", size: "md", iconTrailing: Download, children: "Download" } };
export const Destructive: Story = { args: { color: "primary-destructive", size: "md", iconLeading: Trash02, children: "Delete" } };
export const Loading: Story = { args: { color: "primary", size: "md", isLoading: true, showTextWhileLoading: true, children: "Saving…" } };
export const Disabled: Story = { args: { color: "primary", size: "md", isDisabled: true, children: "Button" } };
export const Small: Story = { args: { color: "primary", size: "sm", children: "Button" } };
export const Large: Story = { args: { color: "primary", size: "lg", children: "Button" } };
export const IconOnly: Story = { args: { color: "primary", size: "md", iconLeading: Check } };
