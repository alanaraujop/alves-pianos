import type { Meta, StoryObj } from "@storybook/react";
import { Ornament } from "./Ornament";

const meta: Meta<typeof Ornament> = {
  title: "Core/Ornament",
  component: Ornament,
  tags: ["autodocs"],
  decorators: [(Story) => <div className="w-[360px]"><Story /></div>],
};
export default meta;

type Story = StoryObj<typeof Ornament>;

export const Rule: Story = { args: { variant: "rule" } };
export const Diamond: Story = { args: { variant: "diamond" } };
export const Label: Story = { args: { variant: "label", label: "Desde 1984" } };
export const Keys: Story = { args: { variant: "keys" } };
export const NeutralTone: Story = { args: { variant: "diamond", tone: "neutral" } };
