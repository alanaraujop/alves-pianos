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
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {destaques.map((piano) => (
          <PianoCard key={piano.nome} piano={piano} />
        ))}
      </div>
      <div className="mt-7 flex justify-center">
        <Button variant="secondary" href="/acervo">
          Ver todos
        </Button>
      </div>
    </Shell>
  );
}
