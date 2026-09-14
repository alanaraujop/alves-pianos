import type { Meta, StoryObj } from "@storybook/react";
import { Check, Info, TriangleAlert } from "lucide-react";
import { Note } from "./Note";

const meta: Meta<typeof Note> = {
  title: "Feedback/Note",
  component: Note,
  tags: ["autodocs"],
  args: {
    title: "Pedido recebido",
    children: "Retornamos em até um dia útil, no WhatsApp que você deixou.",
  },
  decorators: [(Story) => <div className="max-w-md"><Story /></div>],
};
export default meta;

type Story = StoryObj<typeof Note>;

export const Info_: Story = { name: "Info", args: { tone: "info", icon: <Info size={18} strokeWidth={1.5} /> } };
export const Gold: Story = { args: { tone: "gold", title: "Antes de enviar", icon: <Info size={18} strokeWidth={1.5} /> } };
export const Success: Story = { args: { tone: "success", icon: <Check size={18} strokeWidth={1.5} /> } };
export const Danger: Story = {
  args: { tone: "danger", title: "Não conseguimos enviar", children: "Confira o telefone e tente de novo.", icon: <TriangleAlert size={18} strokeWidth={1.5} /> },
};
