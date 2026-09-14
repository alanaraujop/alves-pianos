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
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Eyebrow>Acervo completo</Eyebrow>
          <SectionHeading>Instrumentos prontos para uma nova casa</SectionHeading>
        </div>
        <div className="mb-4 flex gap-2">
          {ACERVO_FILTROS.map((option) => (
            <Tag key={option.value} selected={filtro === option.value} onClick={() => setFiltro(option.value)}>
              {option.label}
            </Tag>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {lista.map((piano) => (
          <PianoCard key={piano.nome} piano={piano} />
        ))}
      </div>
    </Shell>
  );
}
