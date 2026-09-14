import { Button, Dialog, Input, Select } from "@/components/ui";

export interface OrcamentoDialogProps {
  open: boolean;
  onClose: () => void;
}

/** Quick-quote modal opened from the header "Orçamento" action on every page. */
export function OrcamentoDialog({ open, onClose }: OrcamentoDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      eyebrow="Orçamento rápido"
      title="Vamos ouvir o seu piano"
      footer={
        <>
          <Button variant="secondary" size="sm" onClick={onClose}>
            Agora não
          </Button>
          <Button variant="gold" size="sm" onClick={onClose}>
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
  );
}
