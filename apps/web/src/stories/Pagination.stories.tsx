import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "@/components/application/pagination/pagination";

const meta: Meta<typeof Pagination> = {
  title: "Application/Pagination",
  component: Pagination,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  decorators: [(Story) => <div className="w-[700px]"><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { total: 100, pageSize: 10, defaultPage: 1 } };
export const MiddlePage: Story = { args: { total: 100, pageSize: 10, defaultPage: 5 } };
export const LastPage: Story = { args: { total: 100, pageSize: 10, defaultPage: 10 } };
