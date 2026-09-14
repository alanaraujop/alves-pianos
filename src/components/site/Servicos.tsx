"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Badge, Foto, Tabs } from "@/components/ui";
import type { ImagemId } from "@/lib/imagens";
import { textStyle } from "@/lib/typography";
import { Eyebrow, SectionHeading, Shell } from "./Shell";

type ServicoKey = "afinacao" | "restauro" | "venda";

const SERVICOS: Record<
  ServicoKey,
  { imagens: ImagemId[]; titulo: string; descricao: string; beneficios: string[]; preco: string }
> = {
  afinacao: {
    imagens: ["srv-afinacao-1", "srv-afinacao-2"],
    titulo: "Afinação",
    descricao:
      "Ajuste de altura e temperamento com regulagem fina do toque. Recomendada a cada seis meses — o clima daqui mexe muito com a madeira.",
    beneficios: ["Afinação em 440 Hz ou tom de orquestra", "Regulagem de teclado e pedais", "Relatório do estado do instrumento"],
    preco: "a partir de R$ 700",
  },
  restauro: {
    imagens: ["srv-restauro-1", "srv-restauro-2"],
    titulo: "Restauração",
    descricao:
      "Da estrutura ao verniz: cordas, martelos, teclado, mecanismo e acabamento. O instrumento sai pronto para mais uma geração.",
    beneficios: ["Troca de cordas e cravelhas", "Recuperação de marfim e verniz", "Revisão completa da mecânica"],
    preco: "orçamento após avaliação",
  },
  venda: {
    imagens: ["srv-venda-1", "srv-venda-2"],
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
          panelId="servicos-painel"
          idBase="servico"
          items={[
            { value: "afinacao", label: "Afinação" },
            { value: "restauro", label: "Restauração" },
            { value: "venda", label: "Compra e venda" },
          ]}
        />
      </div>
      {/* O painel declara qual aba o comanda; `tabIndex={0}` deixa o conteúdo
          alcançável pelo teclado logo depois das abas, como manda o padrão
          ARIA quando o painel tem texto rolável. */}
      <div
        id="servicos-painel"
        role="tabpanel"
        aria-labelledby={`servico-${tab}`}
        tabIndex={0}
        className="grid grid-cols-1 items-start gap-6 focus-visible:outline-none md:grid-cols-2"
      >
        <div>
          <h3 className={`mb-3 ${textStyle.h2} text-ink-strong`}>{servico.titulo}</h3>
          <p className={`mb-5 ${textStyle.body} text-ink-body`}>{servico.descricao}</p>
          <ul className="mb-5 flex flex-col gap-3">
            {servico.beneficios.map((beneficio) => (
              <li key={beneficio} className={`flex items-start gap-3 ${textStyle.body} text-ink-body`}>
                {/* `items-start` + `flex-none`: sem isso o ícone estica com a
                    linha e se centraliza no meio de um item que quebrou em
                    duas linhas — o que só aparece no celular. */}
                <span aria-hidden="true" className="mt-1 flex flex-none text-gold-500">
                  <Check size={16} strokeWidth={1.5} />
                </span>
                {beneficio}
              </li>
            ))}
          </ul>
          <Badge tone="gold">{servico.preco}</Badge>
        </div>
        {/* Duas colunas já no celular deixariam cada foto com ~160px de lado.
            A primeira dobra ocupa a largura toda até `xs`, onde o par volta a
            caber lado a lado. */}
        <div className="grid grid-cols-1 gap-4 xs:grid-cols-2">
          {servico.imagens.map((id) => (
            <Foto
              key={id}
              id={id}
              ratio="1 / 1"
              sizes="(min-width: 1024px) 280px, (min-width: 420px) 45vw, 100vw"
              className="border border-border-hairline"
            />
          ))}
        </div>
      </div>
    </Shell>
  );
}
