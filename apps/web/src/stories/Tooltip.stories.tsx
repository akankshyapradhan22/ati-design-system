import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/base/buttons/button";
import { Tooltip } from "@/components/base/tooltip/tooltip";

const meta: Meta = {
  title: "Base/Tooltip",
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tooltip label="This is a tooltip" supporting="Supporting text here">
      <Button size="md" color="secondary">Hover me</Button>
    </Tooltip>
  ),
};

export const WithoutSupporting: Story = {
  render: () => (
    <Tooltip label="Quick tooltip">
      <Button size="md" color="secondary">Hover me</Button>
    </Tooltip>
  ),
};
