import { Badge, Card, Placeholder } from "@/components/ui";
import type { BadgeTone } from "@/components/ui";
import type { Piano } from "@/lib/acervo-data";

const ESTADO_TONE: Record<Piano["estado"], BadgeTone> = {
  "Em restauro": "clay",
  Disponível: "success",
  Restaurado: "gold",
};

export function PianoCard({ piano }: { piano: Piano }) {
  return (
    <Card
      interactive
      tone="paper"
      eyebrow={piano.preco}
      title={piano.nome}
      media={<Placeholder ratio="4 / 3" label="Foto do instrumento" className="rounded-none border-x-0 border-t-0" />}
      footer={<Badge tone={ESTADO_TONE[piano.estado]}>{piano.estado}</Badge>}
    >
      {piano.descricao}
    </Card>
  );
}
