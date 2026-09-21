import type { Meta, StoryObj } from "@storybook/react";
import { SearchLg, Upload01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { EmptyState } from "@/components/application/empty-state/empty-state";

const meta: Meta<typeof EmptyState> = {
  title: "Application/EmptyState",
  component: EmptyState,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  decorators: [(Story) => <div className="w-[400px]"><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: SearchLg,
    title: "No results found",
    description: "Your search didn't match any projects. Try adjusting your search.",
    actions: <Button size="sm" color="primary">Clear search</Button>,
  },
};

export const WithUpload: Story = {
  args: {
    icon: Upload01,
    title: "Upload your first file",
    description: "Start by uploading a file to get going.",
    actions: (
      <div className="flex gap-3">
        <Button size="sm" color="secondary">Learn more</Button>
        <Button size="sm" color="primary" iconLeading={Upload01}>Upload file</Button>
      </div>
    ),
  },
};
