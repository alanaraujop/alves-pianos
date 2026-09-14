import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Forms/Select",
  component: Select,
  tags: ["autodocs"],
  args: {
    label: "Serviço",
    options: [
      { value: "a", label: "Afinação" },
      { value: "r", label: "Restauração" },
      { value: "v", label: "Compra ou venda" },
    ],
  },
  decorators: [(Story) => <div className="max-w-xs"><Story /></div>],
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {};
export const WithHint: Story = { args: { hint: "Escolha o serviço mais próximo do que você precisa." } };
