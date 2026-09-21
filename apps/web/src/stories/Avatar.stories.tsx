import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "@/components/base/avatar/avatar";
import { AvatarLabelGroup } from "@/components/base/avatar/avatar-label-group";

const meta: Meta<typeof Avatar> = {
  title: "Base/Avatar",
  component: Avatar,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["xs","sm","md","lg","xl","2xl"] },
    status: { control: "select", options: [undefined,"online","offline"] },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = { args: { size: "md", src: "https://i.pravatar.cc/150?img=1", alt: "User" } };
export const WithInitials: Story = { args: { size: "md", initials: "OR" } };
export const Online: Story = { args: { size: "md", src: "https://i.pravatar.cc/150?img=2", alt: "User", status: "online" } };
export const Offline: Story = { args: { size: "md", src: "https://i.pravatar.cc/150?img=3", alt: "User", status: "offline" } };
export const Small: Story = { args: { size: "sm", initials: "AB" } };
export const Large: Story = { args: { size: "xl", src: "https://i.pravatar.cc/150?img=4", alt: "User" } };

export const LabelGroup: Story = {
  render: () => (
    <AvatarLabelGroup
      src="https://i.pravatar.cc/150?img=5"
      title="Olivia Rhye"
      subtitle="olivia@untitledui.com"
      size="md"
    />
  ),
};
