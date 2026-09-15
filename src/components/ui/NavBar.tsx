"use client";

import { useEffect, useId, useRef, useState, type MouseEvent, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { textStyle } from "@/lib/typography";
import { IconButton } from "./IconButton";

export interface NavLink {
  href: string;
  label: string;
}

export type NavBarTone = "dark" | "light";

export interface NavBarProps {
  brand: ReactNode;
  links?: NavLink[];
  active?: string;
  onNavigate?: (href: string) => void;
  action?: ReactNode;
  tone?: NavBarTone;
}

/**
 * Site header: brand mark, link row with an active underline, and a trailing
 * action.
 *
 * Abaixo de `lg` a fileira de links não cabe — quatro rótulos em caixa alta
 * com `tracking-caps` mais o botão de orçamento passam de 700px, e em 768px
 * ainda espremiam a marca até cortá-la. Ali ela vira um painel
 * sanfonado controlado por um botão: `aria-expanded`/`aria-controls` ligam os
 * dois, Escape fecha e devolve o foco ao botão, e o toque fora fecha também.
 * Não há armadilha de foco porque o painel é uma revelação no fluxo da
 * página, não um diálogo modal — tabular para além do último item leva ao
 * conteúdo, que é o comportamento esperado de um menu.
 */
export function NavBar({ brand, links = [], active, onNavigate, action, tone = "dark" }: NavBarProps) {
  const dark = tone === "dark";
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus();
    };
    const onPointerDown = (event: PointerEvent) => {
      if (headerRef.current?.contains(event.target as Node)) return;
      setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  // O painel some sozinho quando a tela cresce até o layout de desktop; sem
  // isto, girar o aparelho deixaria o menu aberto sobre a barra já expandida.
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const sync = () => desktop.matches && setOpen(false);
    desktop.addEventListener("change", sync);
    return () => desktop.removeEventListener("change", sync);
  }, []);

  const linkClasses = (isActive: boolean) =>
    `${textStyle.label} uppercase tracking-caps no-underline transition-colors duration-fast ease-standard ${
      isActive ? (dark ? "text-gold-300" : "text-ink-strong") : dark ? "text-ink-onDarkMuted" : "text-ink-muted"
    }`;

  const handleClick = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    setOpen(false);
    if (onNavigate) {
      event.preventDefault();
      onNavigate(href);
    }
  };

  return (
    <header
      ref={headerRef}
      className={`relative border-b px-gutter py-2 lg:py-3 ${
        dark ? "border-border-onDark bg-gradient-ebony" : "border-border-hairline bg-surface-card"
      }`}
    >
      <div className="mx-auto flex max-w-container-lg items-center justify-between gap-3 lg:gap-6">
        <div className="flex min-w-0 items-center">{brand}</div>

        {/* Barra de navegação do desktop. */}
        <nav aria-label="Principal" className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={link.href === active ? "page" : undefined}
              onClick={handleClick(link.href)}
              // O sublinhado dourado precisa ficar colado no texto, então a
              // área clicável cresce por um `::after` invisível de 44px em vez
              // de padding — o alvo passa a valer para o dedo e para o mouse
              // sem afastar o indicador de estado ativo.
              className={`relative border-b pb-0.5 after:absolute after:inset-x-0 after:top-1/2 after:h-11 after:-translate-y-1/2 after:content-[''] ${
                link.href === active ? "border-gold-400" : "border-transparent"
              } ${linkClasses(link.href === active)}`}
            >
              {link.label}
            </a>
          ))}
          {action}
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          {/* A chamada principal fica na barra assim que há largura para ela.
              Em telas muito estreitas ela desce para dentro do painel, onde
              aparece em largura cheia — nunca some. */}
          <div className="hidden xs:flex">{action}</div>
          <IconButton
            ref={toggleRef}
            variant={dark ? "onDark" : "outline"}
            label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </IconButton>
        </div>
      </div>

      {/* Painel do celular. Fica no DOM só quando aberto para que os links não
          entrem na ordem de tabulação enquanto estão escondidos. */}
      {open && (
        <nav
          id={menuId}
          aria-label="Principal"
          className={`absolute inset-x-0 top-full z-40 flex flex-col gap-1 border-b px-gutter pb-4 pt-2 shadow-lg lg:hidden ${
            dark ? "border-border-onDark bg-gradient-ebony" : "border-border-hairline bg-surface-card"
          }`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={link.href === active ? "page" : undefined}
              onClick={handleClick(link.href)}
              className={`flex min-h-tap items-center border-l-2 px-3 ${
                link.href === active
                  ? `border-gold-400 ${dark ? "bg-gold-400/[0.08]" : "bg-ivory-100"}`
                  : "border-transparent"
              } ${linkClasses(link.href === active)}`}
            >
              {link.label}
            </a>
          ))}
          {action && (
            /* Acionar a chamada dentro do painel fecha o menu e devolve o foco
               ao botão que o abriu. Sem isso o controle clicado é removido do
               DOM junto com o painel e, se ele tiver aberto um diálogo, não
               sobra elemento para onde devolver o foco ao fechá-lo. */
            <div
              className="mt-3 xs:hidden [&>*]:w-full"
              onClick={() => {
                setOpen(false);
                toggleRef.current?.focus();
              }}
            >
              {action}
            </div>
          )}
        </nav>
      )}
    </header>
  );
}
