import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Dialog } from "./Dialog";
import { Button } from "./Button";
import { Input } from "./Input";
import { Select } from "./Select";

const meta: Meta<typeof Dialog> = {
  title: "Feedback/Dialog",
  component: Dialog,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Dialog>;

export const QuickQuote: Story = {
  render: function QuickQuoteDemo() {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="gold" onClick={() => setOpen(true)}>
          Pedir orçamento
        </Button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          eyebrow="Orçamento rápido"
          title="Vamos ouvir o seu piano"
          footer={
            <>
              <Button variant="secondary" size="sm" onClick={() => setOpen(false)}>
                Agora não
              </Button>
              <Button variant="gold" size="sm" onClick={() => setOpen(false)}>
                Enviar
              </Button>
            </>
          }
        >
          <div className="flex flex-col gap-4">
            <Input label="Telefone" placeholder="(21) 90000-0000" hint="Respondemos em até um dia útil." />
            <Select
              label="Serviço"
              options={[
                { value: "a", label: "Afinação" },
                { value: "r", label: "Restauração" },
                { value: "v", label: "Compra ou venda" },
              ]}
            />
          </div>
        </Dialog>
      </>
    );
  },
};
