import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "@/components/base/slider/slider";

const meta: Meta<typeof Slider> = {
  title: "Base/Slider",
  component: Slider,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  decorators: [(Story) => <div className="w-80"><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { label: "Volume", defaultValue: 50 } };
export const WithRange: Story = { args: { label: "Price range", defaultValue: [20, 80] } };
export const Disabled: Story = { args: { label: "Disabled", defaultValue: 40, isDisabled: true } };
