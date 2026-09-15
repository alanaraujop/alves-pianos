import { Card, Foto } from "@/components/ui";
import { textStyle } from "@/lib/typography";
import { Eyebrow, SectionHeading, Shell } from "./Shell";

export function Sobre() {
  return (
    <Shell id="sobre" tone="dark">
      <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[.9fr_1.1fr] md:gap-8">
        {/* O recorte é 3/4 no desktop, mas empilhado no celular essa altura
            ocupa quase uma tela inteira antes de qualquer texto. Ali ele vira
             4/3 e centralizado, com largura limitada. */}
        <Foto
          id="sobre-bancada"
          ratio="4 / 3"
          sizes="(min-width: 768px) 450px, (min-width: 420px) 380px, 100vw"
          className="mx-auto w-full max-w-[380px] md:max-w-none md:[--placeholder-ratio:3/4]"
        />
        <div>
          <Eyebrow dark>Quem faz</Eyebrow>
          <SectionHeading dark>Quarenta anos de ouvido, uma bancada só</SectionHeading>
          <p className={`mb-4 ${textStyle.body} text-ink-onDarkMuted`}>
            O Sr. Alves aprendeu o ofício cedo e nunca saiu dele. A oficina continua no mesmo bairro, com a mesma
            bancada e as mesmas ferramentas — só o número de pianos que passaram por aqui é que mudou.
          </p>
          <p className={`mb-6 ${textStyle.body} text-ink-onDarkMuted`}>
            Já atendemos teatros, escolas de música, gravadoras e famílias que só querem o piano da avó tocando de
            novo. O cuidado é o mesmo nos dois casos.
          </p>
          <div aria-hidden="true" className="mb-6 flex items-center gap-3 sm:gap-4">
            <span className="h-px flex-1 bg-gold-500" />
            <span className="whitespace-nowrap font-display italic text-[21px] leading-none text-gold-300 sm:text-[25px]">
              desde 1984
            </span>
            <span className="h-px flex-1 bg-gold-500" />
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Card tone="ebony" eyebrow="Depoimento" title="Teatro municipal">
              &ldquo;Afinação impecável na véspera do concerto. Chegou no horário e resolveu.&rdquo;
            </Card>
            <Card tone="ebony" eyebrow="Depoimento" title="Dona Marlene">
              &ldquo;Devolveram o piano da minha mãe. Chorei quando ouvi a primeira nota.&rdquo;
            </Card>
          </div>
        </div>
      </div>
    </Shell>
  );
}
