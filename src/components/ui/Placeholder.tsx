import type { HTMLAttributes } from "react";
import { textStyle } from "@/lib/typography";

export type PlaceholderTone = "sunken" | "ebony";

export interface PlaceholderProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  ratio?: string;
  tone?: PlaceholderTone;
}

/**
 * Stand-in for real photography. The brand has no photo library yet — every
 * image slot in the site renders this instead of a stock or generated image.
 */
export function Placeholder({ label = "Foto a fornecer", ratio = "4 / 3", tone = "sunken", className = "", style, ...rest }: PlaceholderProps) {
  return (
    <div
      style={{ aspectRatio: ratio, ...style }}
      className={`flex items-center justify-center rounded-media border border-border-hairline p-4 text-center ${textStyle.overline} ${
        tone === "ebony" ? "bg-gradient-ebony text-ink-onDarkMuted" : "bg-ivory-200 text-ink-muted"
      } ${className}`}
      {...rest}
    >
      {label}
    </div>
  );
}
