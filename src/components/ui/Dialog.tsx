"use client";

import { useEffect, useId, useRef, type MouseEvent, type ReactNode } from "react";
import { X } from "lucide-react";
import { textStyle } from "@/lib/typography";
import { IconButton } from "./IconButton";

export interface DialogProps {
  open: boolean;
  title?: ReactNode;
  eyebrow?: ReactNode;
  onClose: () => void;
  footer?: ReactNode;
  children: ReactNode;
  width?: number;
}

/**
 * Modal over a blurred scrim.
 *
 * O que muda em relação a um modal "só visual":
 * — `role="dialog"` fica na caixa, não no fundo clicável, senão o leitor de
 *   tela anuncia a área de fechar como sendo o diálogo;
 * — `aria-labelledby` amarra o título, dando nome ao diálogo;
 * — o foco entra na caixa ao abrir e volta ao elemento que a abriu ao fechar;
 * — Tab circula dentro do diálogo enquanto ele está aberto (2.4.3);
 * — a rolagem do fundo trava, o que no celular é o defeito mais visível —
 *   sem isso o dedo arrasta a página atrás do modal;
 * — há um botão de fechar visível: no celular não existe tecla Escape, e
 *   acertar o fundo é um alvo impreciso.
 */
export function Dialog({ open, title, eyebrow, onClose, footer, children, width = 520 }: DialogProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const panel = panelRef.current;

    const focusables = () =>
      Array.from(
        panel?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      ).filter((element) => element.offsetParent !== null);

    // Foca a caixa, não o primeiro controle. Assim o leitor de tela anuncia o
    // título e o papel do diálogo ao abrir (em vez de "Fechar, botão"), e no
    // celular o teclado virtual não sobe sozinho tampando o conteúdo. O Tab
    // seguinte entra normalmente no primeiro campo.
    panel?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const items = focusables();
      const first = items[0];
      const last = items[items.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      // `isConnected` porque quem abriu o diálogo pode ter saído do DOM nesse
      // meio-tempo — é o caso do botão dentro do menu do celular, que fecha
      // junto com o painel. Focar um elemento solto joga o foco para o topo
      // da página; melhor deixar onde já está.
      if (previouslyFocused?.isConnected) previouslyFocused.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  const stopPropagation = (event: MouseEvent<HTMLDivElement>) => event.stopPropagation();

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-end justify-center overflow-y-auto overscroll-contain bg-[color:var(--overlay-scrim)] p-0 backdrop-blur-veil sm:items-center sm:p-5"
    >
      {/* No celular o diálogo encosta na base da tela como uma folha: o polegar
          alcança os botões sem esticar. A partir de `sm` volta a ser um cartão
          centrado. `max-h`/`overflow-y` garantem que um formulário alto role
          dentro da caixa em vez de vazar para fora da tela. */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        onClick={stopPropagation}
        tabIndex={-1}
        style={{ maxWidth: width }}
        className="max-h-[92dvh] w-full overflow-y-auto rounded-t-card focus-visible:outline-none border border-border bg-surface-card p-5 pb-safe shadow-lg sm:max-h-[85dvh] sm:rounded-card sm:p-6 sm:pb-6"
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <div className="min-w-0">
            {eyebrow && <div className={`mb-2 ${textStyle.overline} text-ink-accent`}>{eyebrow}</div>}
            {title && (
              <h2 id={titleId} className="font-display font-bold text-xl leading-snug text-ink-strong">
                {title}
              </h2>
            )}
          </div>
          <IconButton size="sm" variant="ghost" label="Fechar" onClick={onClose} className="-mr-1 -mt-1">
            <X size={18} strokeWidth={1.5} />
          </IconButton>
        </div>
        <div className={`${textStyle.body} text-ink-body`}>{children}</div>
        {/* Os botões empilham em telas estreitas, em largura cheia e na ordem
            inversa: a ação principal fica em cima, ao alcance do polegar. */}
        {footer && (
          <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end [&>*]:w-full sm:[&>*]:w-auto">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
