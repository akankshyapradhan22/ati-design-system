import type { Meta, StoryObj } from "@storybook/react";
import { BarChart01, Home01, Settings01, Users01 } from "@untitledui/icons";
import { Tabs } from "@/components/application/tabs/tabs";

const meta: Meta<typeof Tabs> = {
  title: "Application/Tabs",
  component: Tabs,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["underline","bar","button-group","folder"] },
    size: { control: "select", options: ["sm","md"] },
  },
  decorators: [(Story) => <div className="w-[600px]"><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  { id: "overview", label: "Overview" },
  { id: "analytics", label: "Analytics" },
  { id: "team", label: "Team" },
  { id: "settings", label: "Settings" },
];

const itemsWithIcons = [
  { id: "home", label: "Home", icon: Home01 },
  { id: "analytics", label: "Analytics", icon: BarChart01 },
  { id: "team", label: "Team", icon: Users01 },
  { id: "settings", label: "Settings", icon: Settings01 },
];

export const Underline: Story = { args: { variant: "underline", size: "md", items, defaultSelectedKey: "overview" } };
export const Bar: Story = { args: { variant: "bar", size: "md", items, defaultSelectedKey: "overview" } };
export const ButtonGroup: Story = { args: { variant: "button-group", size: "md", items, defaultSelectedKey: "overview" } };
export const WithIcons: Story = { args: { variant: "underline", size: "md", items: itemsWithIcons, defaultSelectedKey: "home" } };
