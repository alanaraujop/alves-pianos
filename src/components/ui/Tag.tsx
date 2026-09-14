"use client";

import type { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";
import { textStyle } from "@/lib/typography";

export interface TagProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  /** Filter/selected state. */
  selected?: boolean;
  /** Click handler. Renders as a plain `<span>` when omitted (non-interactive). */
  onClick?: () => void;
  /** Shows a remove (×) affordance when provided. */
  onRemove?: () => void;
  children?: ReactNode;
}

/** Filterable or removable etiquette-style tag. */
export function Tag({ selected = false, onClick, onRemove, children, className = "", ...rest }: TagProps) {
  const Element = onClick ? "button" : "span";

  return (
    <Element
      type={onClick ? "button" : undefined}
      onClick={onClick}
      aria-pressed={onClick ? selected : undefined}
      className={`inline-flex items-center gap-2 whitespace-nowrap rounded-pill border px-3 py-[6px] transition-colors duration-fast ease-standard ${textStyle.label} ${
        selected
          ? "border-wood-600 bg-wood-600 text-ivory-100"
          : `border-border-hairline bg-ivory-100 text-ink-body ${onClick ? "hover:bg-ivory-200" : ""}`
      } ${onClick ? "cursor-pointer" : ""} ${className}`}
      {...rest}
    >
      {children}
      {onRemove && (
        <button
          type="button"
          onClick={(event: MouseEvent<HTMLButtonElement>) => {
            event.stopPropagation();
            onRemove();
          }}
          aria-label="Remover"
          className="inline-flex leading-none text-sm text-current"
        >
          ×
        </button>
      )}
    </Element>
  );
}
