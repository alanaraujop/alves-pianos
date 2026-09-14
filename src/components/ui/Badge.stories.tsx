import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Core/Badge",
  component: Badge,
  tags: ["autodocs"],
  args: { children: "Restaurado" },
  argTypes: {
    tone: { control: "select", options: ["gold", "clay", "neutral", "success", "onDark"] },
  },
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Gold: Story = { args: { tone: "gold" } };
export const Clay: Story = { args: { tone: "clay", children: "Em restauro" } };
export const Neutral: Story = { args: { tone: "neutral", children: "Categoria" } };
export const Success: Story = { args: { tone: "success", children: "Disponível" } };
export const OnDark: Story = {
  args: { tone: "onDark", children: "a partir de R$ 700" },
  parameters: { backgrounds: { default: "ebony" } },
};

export const AllTones: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge tone="gold">Gold</Badge>
      <Badge tone="clay">Clay</Badge>
      <Badge tone="neutral">Neutral</Badge>
      <Badge tone="success">Success</Badge>
      <Badge tone="onDark">On dark</Badge>
    </div>
  ),
};
