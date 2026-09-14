import { Badge, Card, Foto } from "@/components/ui";
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
      media={
        /* `sizes` acompanha a grade: uma coluna no celular, duas em `sm`, três
           em `lg`. É o que impede o celular de baixar a versão de 1000px para
           um cartão que ocupa 328px. O `alt` cita o instrumento porque o
           título do cartão está num elemento separado. */
        <Foto
          id={piano.imagem}
          ratio="4 / 3"
          alt={`${piano.nome} — foto ilustrativa do instrumento`}
          sizes="(min-width: 1024px) 373px, (min-width: 640px) 50vw, 100vw"
          className="rounded-none"
        />
      }
      footer={<Badge tone={ESTADO_TONE[piano.estado]}>{piano.estado}</Badge>}
    >
      {piano.descricao}
    </Card>
  );
}
