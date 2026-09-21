import type { Meta, StoryObj } from "@storybook/react";
import { ProgressIndicators } from "@/components/base/progress-indicators/progress-indicators";

const meta: Meta<typeof ProgressIndicators> = {
  title: "Base/ProgressIndicator",
  component: ProgressIndicators,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  decorators: [(Story) => <div className="w-80"><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Quarter: Story = { args: { value: 25, label: "25% complete" } };
export const Half: Story = { args: { value: 50, label: "50% complete" } };
export const ThreeQuarter: Story = { args: { value: 75, label: "75% complete" } };
export const Complete: Story = { args: { value: 100, label: "Complete" } };
