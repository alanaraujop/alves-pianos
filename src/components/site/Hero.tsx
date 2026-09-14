import { Button, Placeholder } from "@/components/ui";
import { textStyle } from "@/lib/typography";
import { Eyebrow } from "./Shell";

export interface HeroProps {
  onOrcamento: () => void;
}

const STATS: [string, string][] = [
  ["40", "anos de ofício"],
  ["1.200+", "pianos afinados"],
  ["3", "teatros atendidos"],
];

export function Hero({ onOrcamento }: HeroProps) {
  return (
    <section id="inicio" className="bg-gradient-ebony px-6 pb-9 pt-10">
      <div className="mx-auto grid max-w-container-lg grid-cols-1 items-center gap-8 md:grid-cols-[1.05fr_.95fr]">
        <div>
          <Eyebrow dark>Oficina de pianos · desde 1984</Eyebrow>
          <h1 className={`mb-4 text-pretty ${textStyle.display} text-ivory-100`}>
            Seu piano merece voltar a soar como no primeiro dia.
          </h1>
          <p className={`mb-6 max-w-[520px] ${textStyle.lead} text-ink-onDarkMuted`}>
            Restauração, afinação e venda de pianos, feitas por quem escuta instrumento há quarenta anos. Atendemos
            casas, teatros e escolas de música.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant="gold" size="lg" onClick={onOrcamento}>
              Pedir orçamento
            </Button>
            <Button variant="onDark" size="lg" href="#acervo">
              Ver acervo
            </Button>
          </div>
          <div className="mt-7 flex gap-6">
            {STATS.map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-2xl leading-none text-gold-300">{n}</div>
                <div className={`mt-1 ${textStyle.small} text-ink-onDarkMuted`}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-card border border-border-onDark p-[6px]">
          <Placeholder tone="ebony" ratio="4 / 3" label="Foto do Sr. Alves na oficina — a fornecer" />
        </div>
      </div>
    </section>
  );
}
