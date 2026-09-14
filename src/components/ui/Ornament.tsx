import type { HTMLAttributes } from "react";
import { textStyle } from "@/lib/typography";

export type OrnamentVariant = "rule" | "diamond" | "label" | "keys";
export type OrnamentTone = "gold" | "neutral";

export interface OrnamentProps extends HTMLAttributes<HTMLDivElement> {
  variant?: OrnamentVariant;
  tone?: OrnamentTone;
  /** Only used by the `label` variant. */
  label?: string;
}

/** Classic divider vocabulary: hairline rule, centered diamond, labeled rule, or a strip of keys. */
export function Ornament({ variant = "rule", tone = "gold", label, className = "", ...rest }: OrnamentProps) {
  const line = tone === "gold" ? "bg-gold-300" : "bg-border";
  const ink = tone === "gold" ? "text-ink-accent" : "text-ink-muted";

  if (variant === "keys") {
    return (
      <div className={`flex h-[14px] gap-[2px] ${className}`} {...rest}>
        {Array.from({ length: 7 }, (_, i) => (
          <span key={i} className={`w-[6px] rounded-b-[1px] ${i % 2 ? "bg-wood-600" : "bg-gold-400"}`} />
        ))}
      </div>
    );
  }

  if (variant === "diamond") {
    return (
      <div className={`flex items-center gap-3 ${className}`} {...rest}>
        <span className={`h-px flex-1 ${line}`} />
        <span className={`h-[6px] w-[6px] rotate-45 ${line}`} />
        <span className={`h-px flex-1 ${line}`} />
      </div>
    );
  }

  if (variant === "label") {
    return (
      <div className={`flex items-center gap-4 ${className}`} {...rest}>
        <span className={`h-px flex-1 ${line}`} />
        <span className={`${textStyle.overline} ${ink}`}>{label}</span>
        <span className={`h-px flex-1 ${line}`} />
      </div>
    );
  }

  return <div className={`h-[3px] border-y ${tone === "gold" ? "border-gold-300" : "border-border"} ${className}`} {...rest} />;
}
