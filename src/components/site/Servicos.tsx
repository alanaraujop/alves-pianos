"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Badge, Placeholder, Tabs } from "@/components/ui";
import { textStyle } from "@/lib/typography";
import { Eyebrow, SectionHeading, Shell } from "./Shell";

type ServicoKey = "afinacao" | "restauro" | "venda";

const SERVICOS: Record<
  ServicoKey,
  { imagens: [string, string][]; titulo: string; descricao: string; beneficios: string[]; preco: string }
> = {
  afinacao: {
    imagens: [
      ["srv-afinacao-1", "Mãos afinando o instrumento"],
      ["srv-afinacao-2", "Chave de afinação e cravelhas"],
    ],
    titulo: "Afinação",
    descricao:
      "Ajuste de altura e temperamento com regulagem fina do toque. Recomendada a cada seis meses — o clima daqui mexe muito com a madeira.",
    beneficios: ["Afinação em 440 Hz ou tom de orquestra", "Regulagem de teclado e pedais", "Relatório do estado do instrumento"],
    preco: "a partir de R$ 700",
  },
  restauro: {
    imagens: [
      ["srv-restauro-1", "Mecanismo aberto na bancada"],
      ["srv-restauro-2", "Detalhe do verniz recuperado"],
    ],
    titulo: "Restauração",
    descricao:
      "Da estrutura ao verniz: cordas, martelos, teclado, mecanismo e acabamento. O instrumento sai pronto para mais uma geração.",
    beneficios: ["Troca de cordas e cravelhas", "Recuperação de marfim e verniz", "Revisão completa da mecânica"],
    preco: "orçamento após avaliação",
  },
  venda: {
    imagens: [
      ["srv-venda-1", "Piano pronto para entrega"],
      ["srv-venda-2", "Teclado revisado em close"],
    ],
    titulo: "Compra e venda",
    descricao:
      "Pianos revisados por nós, com garantia de doze meses. Também avaliamos o seu instrumento se você quiser vender.",
    beneficios: ["Avaliação técnica gratuita", "Transporte e primeira afinação inclusos", "Garantia de doze meses"],
    preco: "acervo a partir de R$ 6.800",
  },
};

export function Servicos() {
  const [tab, setTab] = useState<ServicoKey>("afinacao");
  const servico = SERVICOS[tab];

  return (
    <Shell id="servicos" tone="sunken">
      <Eyebrow>O que fazemos</Eyebrow>
      <SectionHeading>Cada piano tem uma história — o cuidado é sob medida para a sua</SectionHeading>
      <div className="mb-6">
        <Tabs
          value={tab}
          onChange={(value) => setTab(value as ServicoKey)}
          items={[
            { value: "afinacao", label: "Afinação" },
            { value: "restauro", label: "Restauração" },
            { value: "venda", label: "Compra e venda" },
          ]}
        />
      </div>
      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
        <div>
          <h3 className={`mb-3 ${textStyle.h2} text-ink-strong`}>{servico.titulo}</h3>
          <p className={`mb-5 ${textStyle.body} text-ink-body`}>{servico.descricao}</p>
          <ul className="mb-5 flex flex-col gap-3">
            {servico.beneficios.map((beneficio) => (
              <li key={beneficio} className={`flex gap-3 ${textStyle.body} text-ink-body`}>
                <span className="mt-0.5 flex text-gold-500">
                  <Check size={16} strokeWidth={1.5} />
                </span>
                {beneficio}
              </li>
            ))}
          </ul>
          <Badge tone="gold">{servico.preco}</Badge>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {servico.imagens.map(([id, texto]) => (
            <div key={id} className="aspect-square overflow-hidden rounded-media border border-border-hairline">
              <Placeholder label={texto} ratio="1 / 1" className="h-full w-full rounded-none border-none" />
            </div>
          ))}
        </div>
      </div>
    </Shell>
  );
}
