import { Button, Foto } from "@/components/ui";
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
    <section id="inicio" className="scroll-mt-header bg-gradient-ebony px-gutter pb-section pt-8 md:pt-10">
      <div className="mx-auto grid max-w-container-lg grid-cols-1 items-center gap-8 md:grid-cols-[1.05fr_.95fr] md:gap-8">
        {/* No celular a foto vem primeiro na tela mas depois no DOM: quem usa
            leitor de tela ouve a chamada antes do espaço reservado à imagem,
            enquanto quem vê recebe a imagem como abertura. */}
        <div className="order-2 md:order-1">
          <Eyebrow dark>Oficina de pianos · desde 1984</Eyebrow>
          <h1 className={`mb-4 text-pretty ${textStyle.display} text-ivory-100`}>
            Seu piano merece voltar a soar como no primeiro dia.
          </h1>
          <p className={`mb-6 max-w-[520px] ${textStyle.lead} text-ink-onDarkMuted`}>
            Restauração, afinação e venda de pianos, feitas por quem escuta instrumento há quarenta anos. Atendemos
            casas, teatros e escolas de música.
          </p>
          {/* Em telas estreitas os dois botões ocupam a linha inteira, um sobre
              o outro — é mais fácil acertar com o polegar do que dois alvos
              lado a lado espremidos. */}
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button variant="gold" size="lg" onClick={onOrcamento} className="w-full sm:w-auto">
              Pedir orçamento
            </Button>
            <Button variant="onDark" size="lg" href="#acervo" className="w-full sm:w-auto">
              Ver acervo
            </Button>
          </div>
          {/* Os três números viram grade de 3 colunas no celular em vez de uma
              fileira flex que estoura: cada coluna quebra o rótulo em duas
              linhas e nada sai da tela. */}
          <dl className="mt-7 grid grid-cols-3 gap-4 sm:gap-6">
            {STATS.map(([n, l]) => (
              <div key={l}>
                <dt className="sr-only">{l}</dt>
                <dd className="m-0">
                  <span className="block font-display text-2xl leading-none text-gold-300">{n}</span>
                  <span aria-hidden="true" className={`mt-1 block ${textStyle.small} text-ink-onDarkMuted`}>
                    {l}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="order-1 rounded-card border border-border-onDark p-1 md:order-2 md:p-[6px]">
          {/* 16/10 no celular em vez de 4/3: a foto continua presente sem
              empurrar a chamada para abaixo da dobra. É a única imagem com
              `priority` — está acima da dobra e é o maior elemento pintado,
              então adiantá-la melhora o LCP no celular. */}
          <Foto
            id="hero-oficina"
            ratio="16 / 10"
            priority
            sizes="(min-width: 768px) 520px, 100vw"
            className="md:[--placeholder-ratio:4/3]"
          />
        </div>
      </div>
    </section>
  );
}
