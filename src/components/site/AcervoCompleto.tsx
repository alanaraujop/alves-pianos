"use client";

import { useState } from "react";
import { Tag } from "@/components/ui";
import { ACERVO, ACERVO_FILTROS } from "@/lib/acervo-data";
import { Eyebrow, SectionHeading, Shell } from "./Shell";
import { PianoCard } from "./PianoCard";

/** Full collection page: every instrument, filterable by type. */
export function AcervoCompleto() {
  const [filtro, setFiltro] = useState<(typeof ACERVO_FILTROS)[number]["value"]>("todos");
  const lista = ACERVO.filter((piano) => filtro === "todos" || piano.tipo === filtro);

  return (
    <Shell id="acervo">
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-4">
        <div>
          <Eyebrow>Acervo completo</Eyebrow>
          <SectionHeading>Instrumentos prontos para uma nova casa</SectionHeading>
        </div>
        {/* Quatro etiquetas em fileira não cabem em 360px. No celular a lista
            rola na horizontal, sangrando até a borda da tela para que fique
            evidente que há mais filtros à direita; a partir de `sm` ela
            simplesmente quebra em linhas. O grupo é rotulado para que o leitor
            de tela anuncie a que servem os botões. */}
        <div
          role="group"
          aria-label="Filtrar acervo por tipo"
          className="-mx-gutter mb-4 flex w-[calc(100%+2*var(--gutter))] gap-2 overflow-x-auto px-gutter pb-1 sm:mx-0 sm:w-auto sm:flex-wrap sm:overflow-visible sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {ACERVO_FILTROS.map((option) => (
            <Tag
              key={option.value}
              selected={filtro === option.value}
              onClick={() => setFiltro(option.value)}
              className="flex-none"
            >
              {option.label}
            </Tag>
          ))}
        </div>
      </div>
      {/* `aria-live` avisa quem não vê a grade de que a contagem mudou ao
          trocar de filtro — sem isso a ação parece não ter efeito. */}
      <p aria-live="polite" className="sr-only">
        {lista.length} {lista.length === 1 ? "instrumento" : "instrumentos"} no acervo.
      </p>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {lista.map((piano) => (
          <PianoCard key={piano.nome} piano={piano} />
        ))}
      </div>
    </Shell>
  );
}
