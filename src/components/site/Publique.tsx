import { Check } from "lucide-react";
import { Button, Card, Input, Note, Select, Textarea } from "@/components/ui";
import { textStyle } from "@/lib/typography";
import { Eyebrow, SectionHeading, Shell } from "./Shell";

export interface PubliqueProps {
  enviado: boolean;
  onEnviado: () => void;
}

const PASSOS: [string, string][] = [
  ["Você conta a história", "Marca, ano, estado e o que já foi feito no instrumento."],
  ["A gente avalia", "Visita técnica com laudo escrito. Taxa única de R$ 150."],
  ["Entra no acervo", "Anúncio com fotos, laudo e nosso selo."],
];

/** "Anuncie no acervo" — sellers submit an instrument for the workshop to evaluate. */
export function Publique({ enviado, onEnviado }: PubliqueProps) {
  return (
    <Shell id="publicar" tone="dark">
      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[1.05fr_.95fr] md:gap-8">
        <div>
          <Eyebrow dark>Anuncie no acervo</Eyebrow>
          <SectionHeading dark>Quem compra aqui confia no ouvido de quarenta anos</SectionHeading>
          <p className={`mb-6 ${textStyle.body} text-ink-onDarkMuted`}>
            Nosso acervo não é um classificado. Cada instrumento passa pela bancada antes de aparecer no site — quem
            entra na lista carrega junto a curadoria que construímos desde 1984. É por isso que os pianos daqui vendem
            bem.
          </p>
          {/* Lista ordenada de verdade: o leitor de tela anuncia "lista de 3
              itens" e a posição de cada passo, o que uma pilha de `div` não
              transmite. */}
          <ol className="mb-6 flex list-none flex-col gap-5 p-0">
            {PASSOS.map(([titulo, descricao], index) => (
              <li key={titulo} className="flex gap-3 sm:gap-4">
                {/* `aria-hidden` porque "01", "02" lidos em voz alta não
                    acrescentam nada: a ordem dos passos já vem da estrutura. */}
                <span
                  aria-hidden="true"
                  className="w-9 flex-none font-display text-2xl leading-none text-gold-400 sm:w-11"
                >
                  0{index + 1}
                </span>
                <div>
                  <div className={`mb-1 ${textStyle.h3} text-ivory-100`}>{titulo}</div>
                  <div className={`${textStyle.small} text-ink-onDarkMuted`}>{descricao}</div>
                </div>
              </li>
            ))}
          </ol>
          <Card tone="ebony" eyebrow="O que garantimos" title="Laudo técnico e selo de avaliação">
            Se o piano não estiver em condições de entrar no acervo, dizemos na hora e explicamos o que falta. A taxa
            cobre a visita e o laudo.
          </Card>
        </div>
        <div className="rounded-card border border-border-hairline bg-surface-card p-4 shadow-lg sm:p-6">
          {enviado ? (
            <Note tone="success" title="Recebemos o seu piano" icon={<Check size={18} strokeWidth={1.5} />}>
              Entramos em contato em até um dia útil para marcar a avaliação.
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
                <Input label="Nome" placeholder="Como podemos te chamar?" name="nome" autoComplete="name" />
                <Input
                  label="Telefone"
                  placeholder="(21) 90000-0000"
                  name="telefone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                />
              </div>
              <Input label="Marca e ano" placeholder="Essenfelder, 1962" name="instrumento" />
              <Select
                label="Tipo"
                options={[
                  { value: "v", label: "Vertical" },
                  { value: "c", label: "Cauda" },
                  { value: "o", label: "Não sei dizer" },
                ]}
              />
              <Textarea label="Conte a história dele" rows={4} placeholder="Há quanto tempo está com você, se já foi restaurado, como está soando…" />
              <Button variant="gold" full type="submit">
                Quero anunciar
              </Button>
            </form>
          )}
        </div>
      </div>
    </Shell>
  );
}
