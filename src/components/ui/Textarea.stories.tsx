import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Forms/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  args: { label: "Conte sobre o piano", placeholder: "Marca, modelo, há quanto tempo não é afinado…" },
  decorators: [(Story) => <div className="max-w-md"><Story /></div>],
};
export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};
export const WithError: Story = { args: { error: "Conte um pouco mais sobre o instrumento." } };
