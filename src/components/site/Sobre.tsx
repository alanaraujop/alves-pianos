import { Card, Placeholder } from "@/components/ui";
import { textStyle } from "@/lib/typography";
import { Eyebrow, SectionHeading, Shell } from "./Shell";

export function Sobre() {
  return (
    <Shell id="sobre" tone="dark">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[.9fr_1.1fr]">
        <Placeholder tone="ebony" ratio="3 / 4" label="Retrato do Sr. Alves — a fornecer" />
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
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px flex-1 bg-gold-500" />
            <span className="font-script text-[30px] leading-none text-gold-300">desde 1984</span>
            <span className="h-px flex-1 bg-gold-500" />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
