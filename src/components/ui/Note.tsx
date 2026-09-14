import type { ReactNode } from "react";
import { textStyle } from "@/lib/typography";

export type NoteTone = "info" | "gold" | "success" | "danger";

export interface NoteProps {
  tone?: NoteTone;
  title?: ReactNode;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

const TONE_CLASSES: Record<NoteTone, { bg: string; border: string; ink: string; mark: string }> = {
  info: { bg: "bg-ivory-100", border: "border-border", ink: "text-ink-body", mark: "text-wood-400" },
  gold: { bg: "bg-gold-100", border: "border-gold-200", ink: "text-gold-600", mark: "text-gold-500" },
  success: { bg: "bg-[#E7EAE1]", border: "border-[#CBD3C1]", ink: "text-felt-600", mark: "text-felt-400" },
  danger: { bg: "bg-[#F3E2DE]", border: "border-[#E0C3BC]", ink: "text-state-danger", mark: "text-state-danger" },
};

/** Block-level notice — confirmations, warnings, inline callouts. */
export function Note({ tone = "info", title, icon, children, className = "" }: NoteProps) {
  const t = TONE_CLASSES[tone];

  return (
    <div className={`flex gap-3 rounded-card border p-4 ${t.bg} ${t.border} ${className}`}>
      {icon && <span className={`flex flex-none ${t.mark}`}>{icon}</span>}
      <div>
        {title && <div className={`mb-1 ${textStyle.label} ${t.ink}`}>{title}</div>}
        <div className={`${textStyle.small} text-ink-body`}>{children}</div>
      </div>
    </div>
  );
}
