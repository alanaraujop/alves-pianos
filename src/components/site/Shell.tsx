import type { ReactNode } from "react";
import { textStyle } from "@/lib/typography";

export type ShellTone = "page" | "sunken" | "dark";

export interface ShellProps {
  id?: string;
  tone?: ShellTone;
  children: ReactNode;
}

const TONE_CLASSES: Record<ShellTone, string> = {
  page: "bg-surface-page",
  sunken: "bg-surface-sunken",
  dark: "bg-gradient-ebony",
};

/** Full-bleed section wrapper with the site's standard container and vertical rhythm. */
export function Shell({ id, tone = "page", children }: ShellProps) {
  return (
    <section id={id} className={`scroll-mt-[88px] px-6 py-9 ${TONE_CLASSES[tone]}`}>
      <div className="mx-auto max-w-container-lg">{children}</div>
    </section>
  );
}

export interface EyebrowProps {
  dark?: boolean;
  children: ReactNode;
}

export function Eyebrow({ dark = false, children }: EyebrowProps) {
  return <div className={`mb-3 ${textStyle.overline} ${dark ? "text-gold-300" : "text-ink-accent"}`}>{children}</div>;
}

export interface SectionHeadingProps {
  dark?: boolean;
  children: ReactNode;
}

export function SectionHeading({ dark = false, children }: SectionHeadingProps) {
  return <h2 className={`mb-4 text-pretty ${textStyle.h1} ${dark ? "text-ivory-100" : "text-ink-strong"}`}>{children}</h2>;
}
