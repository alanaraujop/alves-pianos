import type { HTMLAttributes, ReactNode } from "react";
import { textStyle } from "@/lib/typography";

export type CardTone = "paper" | "sunken" | "ebony";

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  tone?: CardTone;
  /** Draws the classic recessed inner hairline instead of full-bleed padding. */
  inlay?: boolean;
  /** Lifts and deepens the shadow on hover. */
  interactive?: boolean;
  media?: ReactNode;
  eyebrow?: ReactNode;
  title?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
}

const TONE_CLASSES: Record<CardTone, string> = {
  paper: "border-border-hairline bg-surface-card text-ink-body",
  sunken: "border-border-hairline bg-surface-sunken text-ink-body",
  ebony: "border-border-onDark bg-gradient-ebony text-ink-onDarkMuted",
};

/** Content container, optionally with an inner inlay frame or hover elevation. */
export function Card({
  tone = "paper",
  inlay = false,
  interactive = false,
  media,
  eyebrow,
  title,
  footer,
  children,
  className = "",
  ...rest
}: CardProps) {
  const dark = tone === "ebony";

  return (
    <div
      className={`overflow-hidden rounded-card border shadow-xs transition-[box-shadow,transform] duration-normal ease-out-soft ${TONE_CLASSES[tone]} ${
        interactive ? "hover:-translate-y-0.5 hover:shadow-md" : ""
      } ${className}`}
      {...rest}
    >
      {media}
      <div className={inlay ? `m-2 rounded-xs border p-5 ${dark ? "border-border-onDark" : "border-border-hairline"}` : "p-5"}>
        {eyebrow && (
          <div className={`mb-2 ${textStyle.overline} ${dark ? "text-gold-300" : "text-ink-accent"}`}>{eyebrow}</div>
        )}
        {title && <h3 className={`mb-2 ${textStyle.h3} ${dark ? "text-ivory-100" : "text-ink-strong"}`}>{title}</h3>}
        {children && <div className={textStyle.small}>{children}</div>}
        {footer && <div className="mt-4">{footer}</div>}
      </div>
    </div>
  );
}
