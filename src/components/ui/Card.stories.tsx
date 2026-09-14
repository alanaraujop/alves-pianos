import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Badge } from "./Badge";
import { Placeholder } from "./Placeholder";

const meta: Meta<typeof Card> = {
  title: "Core/Card",
  component: Card,
  tags: ["autodocs"],
  args: {
    eyebrow: "R$ 14.800",
    title: "Essenfelder 1962",
    children: "Jacarandá, mecanismo revisado, cordas novas.",
  },
  argTypes: {
    tone: { control: "select", options: ["paper", "sunken", "ebony"] },
  },
  decorators: [(Story) => <div className="max-w-sm"><Story /></div>],
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Paper: Story = { args: { tone: "paper" } };
export const Sunken: Story = { args: { tone: "sunken" } };
export const Ebony: Story = { args: { tone: "ebony" }, parameters: { backgrounds: { default: "ebony" } } };

export const WithMedia: Story = {
  args: {
    media: <Placeholder ratio="4 / 3" label="Foto do instrumento" className="rounded-none border-x-0 border-t-0" />,
    footer: <Badge tone="success">Disponível</Badge>,
  },
};

export const Interactive: Story = {
  args: { interactive: true },
};

export const WithInlay: Story = {
  args: { inlay: true },
};
