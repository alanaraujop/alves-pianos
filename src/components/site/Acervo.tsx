import { Button } from "@/components/ui";
import { ACERVO } from "@/lib/acervo-data";
import { Eyebrow, SectionHeading, Shell } from "./Shell";
import { PianoCard } from "./PianoCard";

/** Home-page preview: the first three instruments, linking through to the full collection. */
export function Acervo() {
  const destaques = ACERVO.slice(0, 3);

  return (
    <Shell id="acervo">
      <div className="mb-6">
        <Eyebrow>Acervo</Eyebrow>
        <SectionHeading>Instrumentos prontos para uma nova casa</SectionHeading>
      </div>
      {/* O salto de 1 para 3 colunas deixava o tablet com cartões largos e
          vazios; a etapa de 2 colunas em `sm` cobre a faixa 640–768px. */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {destaques.map((piano) => (
          <PianoCard key={piano.nome} piano={piano} />
        ))}
      </div>
      <div className="mt-7 flex justify-center">
        <Button variant="secondary" href="/acervo" className="w-full sm:w-auto">
          Ver todos
        </Button>
      </div>
    </Shell>
  );
}
