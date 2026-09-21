import type { Meta, StoryObj } from "@storybook/react";
import { AlertCircle, CheckCircle, InfoCircle, Settings01 } from "@untitledui/icons";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

const meta: Meta<typeof FeaturedIcon> = {
  title: "Foundations/FeaturedIcon",
  component: FeaturedIcon,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm","md","lg","xl"] },
    color: { control: "select", options: ["brand","gray","error","warning","success"] },
    theme: { control: "select", options: ["light","gradient","dark","modern","outline"] },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const BrandLight: Story = { args: { icon: Settings01, color: "brand", theme: "light", size: "lg" } };
export const SuccessLight: Story = { args: { icon: CheckCircle, color: "success", theme: "light", size: "lg" } };
export const ErrorLight: Story = { args: { icon: AlertCircle, color: "error", theme: "light", size: "lg" } };
export const WarningGradient: Story = { args: { icon: AlertCircle, color: "warning", theme: "gradient", size: "lg" } };
export const BrandDark: Story = { args: { icon: InfoCircle, color: "brand", theme: "dark", size: "lg" } };
export const GrayModern: Story = { args: { icon: Settings01, color: "gray", theme: "modern", size: "lg" } };
export const Outline: Story = { args: { icon: InfoCircle, color: "brand", theme: "outline", size: "lg" } };
export const ExtraLarge: Story = { args: { icon: CheckCircle, color: "success", theme: "light", size: "xl" } };
