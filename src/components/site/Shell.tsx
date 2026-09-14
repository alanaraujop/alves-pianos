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

/**
 * Full-bleed section wrapper with the site's standard container and vertical
 * rhythm.
 *
 * O respiro é fluido (`px-gutter`/`py-section`): 16px de margem e 48px de
 * ritmo vertical no celular, 24px e 96px no desktop. O `scroll-mt` segue a
 * altura real do cabeçalho fixo em vez de um 88px chutado, senão a âncora
 * para atrás da barra no celular, onde ela é mais baixa.
 */
export function Shell({ id, tone = "page", children }: ShellProps) {
  return (
    <section id={id} className={`scroll-mt-header px-gutter py-section ${TONE_CLASSES[tone]}`}>
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
