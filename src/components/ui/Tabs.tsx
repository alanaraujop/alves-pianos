"use client";

import { useRef, type KeyboardEvent } from "react";
import { textStyle } from "@/lib/typography";

export interface TabItem {
  value: string;
  label: string;
}

export type TabsTone = "light" | "dark";

export interface TabsProps {
  items?: TabItem[];
  value?: string;
  onChange?: (value: string) => void;
  tone?: TabsTone;
  /**
   * `id` do painel que estas abas comandam. Informe-o sempre que houver um
   * `role="tabpanel"` correspondente — é o que amarra aba e conteúdo para o
   * leitor de tela.
   */
  panelId?: string;
  /** Prefixo dos `id` gerados para cada aba, referenciados pelo painel. */
  idBase?: string;
}

/**
 * Underlined tab row, gold on the active item.
 *
 * Segue o padrão ARIA de abas: uma só entra na ordem de tabulação (tabindex
 * móvel) e as setas caminham entre elas, em vez de obrigar quem usa teclado a
 * tabular por cada aba para chegar ao conteúdo. No celular a fileira rola na
 * horizontal — três rótulos em caixa alta com `tracking-caps` não cabem em
 * 360px, e comprimi-los quebraria tanto a leitura quanto o alvo de toque.
 */
export function Tabs({ items = [], value, onChange, tone = "light", panelId, idBase = "tab" }: TabsProps) {
  const dark = tone === "dark";
  const listRef = useRef<HTMLDivElement>(null);

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const keys = ["ArrowRight", "ArrowLeft", "Home", "End"];
    if (!keys.includes(event.key)) return;
    event.preventDefault();

    const current = items.findIndex((item) => item.value === value);
    const last = items.length - 1;
    if (last < 0) return;
    const next =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? last
          : event.key === "ArrowRight"
            ? (current + 1) % items.length
            : (current - 1 + items.length) % items.length;

    onChange?.(items[next]!.value);
    listRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus();
  };

  return (
    <div
      ref={listRef}
      role="tablist"
      onKeyDown={onKeyDown}
      className={`-mx-gutter flex gap-5 overflow-x-auto border-b px-gutter sm:mx-0 sm:gap-6 sm:px-0 ${
        dark ? "border-border-onDark" : "border-border-hairline"
      } [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
    >
      {items.map((item) => {
        const active = item.value === value;
        return (
          <button
            key={item.value}
            id={`${idBase}-${item.value}`}
            type="button"
            role="tab"
            aria-selected={active}
            aria-controls={panelId}
            tabIndex={active ? 0 : -1}
            onClick={() => onChange?.(item.value)}
            className={`-mb-px flex min-h-tap flex-none items-end whitespace-nowrap border-b-2 bg-transparent pb-3 ${textStyle.label} text-xs uppercase tracking-caps transition-colors duration-fast ease-standard ${
              active
                ? `border-gold-400 ${dark ? "text-gold-300" : "text-ink-strong"}`
                : `border-transparent ${dark ? "text-ink-onDarkMuted" : "text-ink-muted"}`
            } ${dark ? "focus-visible:shadow-focus-on-dark" : ""}`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
