import type { Meta, StoryObj } from "@storybook/react";
import { Instagram } from "lucide-react";
import { IconButton } from "./IconButton";

const meta: Meta<typeof IconButton> = {
  title: "Core/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  args: {
    label: "Instagram",
    children: <Instagram size={18} strokeWidth={1.5} />,
  },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    variant: { control: "select", options: ["ghost", "outline", "onDark"] },
  },
};
export default meta;

type Story = StoryObj<typeof IconButton>;

export const Ghost: Story = { args: { variant: "ghost" } };
export const Outline: Story = { args: { variant: "outline" } };
export const OnDark: Story = { args: { variant: "onDark" }, parameters: { backgrounds: { default: "ebony" } } };

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <IconButton size="sm" label="Instagram"><Instagram size={16} strokeWidth={1.5} /></IconButton>
      <IconButton size="md" label="Instagram"><Instagram size={18} strokeWidth={1.5} /></IconButton>
      <IconButton size="lg" label="Instagram"><Instagram size={20} strokeWidth={1.5} /></IconButton>
    </div>
  ),
};
