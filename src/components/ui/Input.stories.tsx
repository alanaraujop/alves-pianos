import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Forms/Input",
  component: Input,
  tags: ["autodocs"],
  args: { label: "Telefone", placeholder: "(21) 90000-0000" },
  decorators: [(Story) => <div className="max-w-xs"><Story /></div>],
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};
export const WithHint: Story = { args: { hint: "Respondemos em até um dia útil." } };
export const WithError: Story = { args: { error: "Confira o telefone e tente de novo." } };
export const Disabled: Story = { args: { disabled: true, defaultValue: "(21) 90000-0000" } };
