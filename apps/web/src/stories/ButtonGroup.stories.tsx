import type { Meta, StoryObj } from "@storybook/react";
import { AlignCenter, AlignJustify, AlignLeft, AlignRight } from "@untitledui/icons";
import { ButtonGroup } from "@/components/base/button-group/button-group";

const meta: Meta<typeof ButtonGroup> = {
  title: "Base/ButtonGroup",
  component: ButtonGroup,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { id: "left", label: "Left", icon: AlignLeft },
      { id: "center", label: "Center", icon: AlignCenter },
      { id: "right", label: "Right", icon: AlignRight },
      { id: "justify", label: "Justify", icon: AlignJustify },
    ],
    defaultSelectedKey: "left",
  },
};

export const TextOnly: Story = {
  args: {
    items: [
      { id: "day", label: "Day" },
      { id: "week", label: "Week" },
      { id: "month", label: "Month" },
      { id: "year", label: "Year" },
    ],
    defaultSelectedKey: "week",
  },
};
