import { Check, Clock, Instagram, MapPin, Phone } from "lucide-react";
import { Button, Checkbox, Input, Note, Select, Textarea } from "@/components/ui";
import { textStyle } from "@/lib/typography";
import { Eyebrow, SectionHeading, Shell } from "./Shell";

export interface ContatoProps {
  enviado: boolean;
  onEnviado: () => void;
}

const CONTATOS = [
  { Icon: Phone, texto: "(21) 98682-3794 · WhatsApp" },
  { Icon: MapPin, texto: "R. Bergson Gurjão Farias, s/n — Campo Grande, Rio de Janeiro" },
  { Icon: Clock, texto: "Segunda a sábado, 8h às 18h" },
  { Icon: Instagram, texto: "@alvespianos" },
];

export function Contato({ enviado, onEnviado }: ContatoProps) {
  return (
    <Shell id="contato" tone="sunken">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_1.1fr]">
        <div>
          <Eyebrow>Contato</Eyebrow>
          <SectionHeading>Conte o que está acontecendo com o seu piano</SectionHeading>
          <p className={`mb-6 ${textStyle.body} text-ink-body`}>
            A avaliação é sem compromisso. Se der para resolver por telefone, a gente resolve por telefone.
          </p>
          <div className="flex flex-col gap-4">
            {CONTATOS.map(({ Icon, texto }) => (
              <div key={texto} className={`flex items-center gap-3 ${textStyle.body} text-ink-body`}>
                <span className="flex text-gold-500">
                  <Icon size={18} strokeWidth={1.5} />
                </span>
                {texto}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-card border border-border-hairline bg-surface-card p-6 shadow-sm">
          {enviado ? (
            <Note tone="success" title="Pedido recebido" icon={<Check size={18} strokeWidth={1.5} />}>
              Retornamos em até um dia útil, no WhatsApp que você deixou.
            </Note>
          ) : (
            <form
              className="flex flex-col gap-4"
              onSubmit={(event) => {
                event.preventDefault();
                onEnviado();
              }}
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input label="Nome" placeholder="Como podemos te chamar?" />
                <Input label="Telefone" placeholder="(21) 90000-0000" />
              </div>
              <Select
                label="Serviço"
                options={[
                  { value: "a", label: "Afinação" },
                  { value: "r", label: "Restauração" },
                  { value: "v", label: "Compra ou venda" },
                ]}
              />
              <Textarea label="Conte sobre o piano" rows={4} placeholder="Marca, modelo, há quanto tempo não é afinado…" />
              <Checkbox label="Quero receber dicas de conservação" />
              <Button variant="gold" full type="submit">
                Enviar pedido
              </Button>
            </form>
          )}
        </div>
      </div>
    </Shell>
  );
}
