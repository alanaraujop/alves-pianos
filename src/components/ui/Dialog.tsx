"use client";

import { useEffect, type MouseEvent, type ReactNode } from "react";
import { textStyle } from "@/lib/typography";

export interface DialogProps {
  open: boolean;
  title?: ReactNode;
  eyebrow?: ReactNode;
  onClose: () => void;
  footer?: ReactNode;
  children: ReactNode;
  width?: number;
}

/** Modal over a blurred scrim. Closes on backdrop click or Escape. */
export function Dialog({ open, title, eyebrow, onClose, footer, children, width = 520 }: DialogProps) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const stopPropagation = (event: MouseEvent<HTMLDivElement>) => event.stopPropagation();

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-[color:var(--overlay-scrim)] p-5 backdrop-blur-veil"
    >
      <div
        onClick={stopPropagation}
        style={{ maxWidth: width }}
        className="w-full rounded-card border border-border bg-surface-card p-6 shadow-lg"
      >
        {eyebrow && <div className={`mb-2 ${textStyle.overline} text-ink-accent`}>{eyebrow}</div>}
        {title && <h2 className="mb-4 font-display font-regular text-xl leading-snug text-ink-strong">{title}</h2>}
        <div className={`${textStyle.body} text-ink-body`}>{children}</div>
        {footer && <div className="mt-6 flex justify-end gap-3">{footer}</div>}
      </div>
    </div>
  );
}
