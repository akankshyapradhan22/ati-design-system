import type { Meta, StoryObj } from "@storybook/react";
import { Mail01, SearchLg } from "@untitledui/icons";
import { Input } from "@/components/base/input/input";

const meta: Meta<typeof Input> = {
  title: "Base/Input",
  component: Input,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm","md","lg"] },
  },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { label: "Email", placeholder: "olivia@untitledui.com" } };
export const WithIcon: Story = { args: { label: "Email", placeholder: "olivia@untitledui.com", icon: Mail01 } };
export const WithHint: Story = { args: { label: "Email", placeholder: "olivia@untitledui.com", hint: "We'll only use this for important updates." } };
export const Required: Story = { args: { label: "Email", placeholder: "olivia@untitledui.com", isRequired: true } };
export const Invalid: Story = { args: { label: "Email", placeholder: "olivia@untitledui.com", isInvalid: true, hint: "Please enter a valid email address." } };
export const Disabled: Story = { args: { label: "Email", placeholder: "olivia@untitledui.com", isDisabled: true } };
export const Search: Story = { args: { label: "Search", placeholder: "Search…", icon: SearchLg } };
