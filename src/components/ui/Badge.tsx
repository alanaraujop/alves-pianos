import type { HTMLAttributes } from "react";
import { textStyle } from "@/lib/typography";

export type BadgeTone = "gold" | "clay" | "neutral" | "success" | "onDark";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Visual tone. Defaults to `gold`. */
  tone?: BadgeTone;
}

const TONE_CLASSES: Record<BadgeTone, string> = {
  gold: "bg-gold-100 text-gold-600 border border-gold-200",
  clay: "bg-clay-100 text-clay-600 border border-clay-200",
  neutral: "bg-ivory-100 text-ink-muted border border-border-hairline",
  success: "bg-[#E7EAE1] text-felt-600 border border-[#CBD3C1]",
  onDark: "bg-gold-400/10 text-gold-300 border border-border-onDark",
};

/** Static label for a category or state — never interactive. */
export function Badge({ tone = "gold", className = "", children, ...rest }: BadgeProps) {
  return (
    <span
      className={`inline-block whitespace-nowrap rounded-xs px-[10px] py-[5px] ${textStyle.overline} ${TONE_CLASSES[tone]} ${className}`}
      {...rest}
    >
      {children}
    </span>
  );
}
