import type { Meta, StoryObj } from "@storybook/react";
import { NavBar } from "./NavBar";
import { Button } from "./Button";

const meta: Meta<typeof NavBar> = {
  title: "Navigation/NavBar",
  component: NavBar,
  tags: ["autodocs"],
  args: {
    brand: <span className="font-display text-2xl text-gold-300">Alves Pianos</span>,
    active: "#servicos",
    links: [
      { href: "#servicos", label: "Serviços" },
      { href: "#acervo", label: "Acervo" },
      { href: "#sobre", label: "Sobre" },
      { href: "#contato", label: "Contato" },
    ],
    action: (
      <Button variant="onDark" size="sm">
        Orçamento
      </Button>
    ),
  },
  parameters: { layout: "fullscreen" },
};
export default meta;

type Story = StoryObj<typeof NavBar>;

export const Dark: Story = { args: { tone: "dark" } };
export const Light: Story = {
  args: {
    tone: "light",
    brand: <span className="font-display text-2xl text-wood-600">Alves Pianos</span>,
    action: (
      <Button variant="secondary" size="sm">
        Orçamento
      </Button>
    ),
  },
};
