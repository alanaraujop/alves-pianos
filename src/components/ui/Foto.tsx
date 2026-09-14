import Image from "next/image";
import type { CSSProperties } from "react";
import { IMAGENS, type ImagemId } from "@/lib/imagens";

export interface FotoProps {
  /** Chave no registro `IMAGENS`. */
  id: ImagemId;
  /** Proporção do recorte, no formato CSS (`"4 / 3"`). */
  ratio?: string;
  /**
   * Larguras de renderização por breakpoint, repassadas ao `sizes` do
   * `next/image`. É o que decide qual arquivo do `srcset` o celular baixa —
   * sem isso o navegador assume a largura da viewport inteira e puxa a versão
   * grande numa tela de 360px.
   */
  sizes?: string;
  /**
   * Fotos acima da dobra (só o Hero) carregam com prioridade; as demais ficam
   * preguiçosas, que é o padrão do `next/image`.
   */
  priority?: boolean;
  /** Texto alternativo. Use `alt=""` quando a foto for puramente decorativa. */
  alt?: string;
  className?: string;
}

/**
 * Foto do site, com o mesmo contrato de proporção do `Placeholder` — inclusive
 * a custom property `--placeholder-ratio`, para que uma seção possa pedir um
 * recorte diferente por breakpoint (`md:[--placeholder-ratio:3/4]`) sem trocar
 * de componente.
 *
 * Usa `fill` + `object-cover`: a caixa manda na proporção e a foto se ajusta,
 * então o mesmo arquivo serve o recorte deitado do celular e o em pé do
 * desktop sem deformar. O leve `saturate`/`sepia` é o que costura fotos de
 * origens diferentes na mesma paleta quente da marca — sem ele a mistura de
 * temperaturas de cor aparece de imediato.
 */
export function Foto({ id, ratio, sizes = "100vw", priority = false, alt, className = "" }: FotoProps) {
  const imagem = IMAGENS[id];

  return (
    <div
      style={{ ...(ratio ? { "--placeholder-ratio": ratio } : {}) } as CSSProperties}
      className={`relative isolate aspect-[var(--placeholder-ratio,4/3)] overflow-hidden rounded-media bg-ivory-200 ${className}`}
    >
      <Image
        src={imagem.src}
        alt={alt ?? imagem.alt}
        fill
        sizes={sizes}
        priority={priority}
        placeholder="blur"
        blurDataURL={imagem.blurDataURL}
        className="object-cover [filter:saturate(.88)_sepia(.06)_contrast(1.02)]"
      />
    </div>
  );
}
