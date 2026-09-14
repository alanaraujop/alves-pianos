import type { CSSProperties, HTMLAttributes } from "react";
import { textStyle } from "@/lib/typography";

export type PlaceholderTone = "sunken" | "ebony";

export interface PlaceholderProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  ratio?: string;
  tone?: PlaceholderTone;
}

/**
 * Stand-in for real photography.
 *
 * Os espaços de imagem do site hoje são preenchidos pelo componente `Foto`,
 * com fotos de acervo livre (ver o aviso em `lib/imagens.ts`). Este
 * componente continua no kit para vestir espaços que ainda não têm imagem
 * definida e para documentar a proporção esperada de cada um.
 *
 * A proporção viaja numa custom property em vez de ir direto em
 * `style.aspectRatio`: estilo embutido vence classe, e sem isso não haveria
 * como pedir uma proporção diferente por breakpoint. Com a variável, quem usa
 * o componente escreve `md:[--placeholder-ratio:4/3]` e o recorte muda com a
 * tela — é assim que a foto do Hero deita no celular sem empurrar o texto
 * para fora da dobra.
 */
export function Placeholder({ label = "Foto a fornecer", ratio = "4 / 3", tone = "sunken", className = "", style, ...rest }: PlaceholderProps) {
  return (
    <div
      style={{ "--placeholder-ratio": ratio, ...style } as CSSProperties}
      className={`flex aspect-[var(--placeholder-ratio)] items-center justify-center rounded-media border border-border-hairline p-4 text-center ${textStyle.overline} ${
        tone === "ebony" ? "bg-gradient-ebony text-ink-onDarkMuted" : "bg-ivory-200 text-ink-muted"
      } ${className}`}
      {...rest}
    >
      {label}
    </div>
  );
}
