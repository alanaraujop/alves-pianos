import type { Meta, StoryObj } from "@storybook/react";
import { Placeholder } from "./Placeholder";

const meta: Meta<typeof Placeholder> = {
  title: "Core/Placeholder",
  component: Placeholder,
  tags: ["autodocs"],
  decorators: [(Story) => <div className="w-80"><Story /></div>],
};
export default meta;

type Story = StoryObj<typeof Placeholder>;

export const Sunken: Story = { args: { label: "Foto do instrumento" } };
export const Ebony: Story = { args: { label: "Foto do Sr. Alves na oficina — a fornecer", tone: "ebony" }, parameters: { backgrounds: { default: "ebony" } } };
export const Portrait: Story = { args: { label: "Retrato — a fornecer", ratio: "3 / 4" } };
export const Square: Story = { args: { label: "Foto do instrumento", ratio: "1 / 1" } };
