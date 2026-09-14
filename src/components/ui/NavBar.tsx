"use client";

import type { MouseEvent, ReactNode } from "react";
import { textStyle } from "@/lib/typography";

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

/** Site header: brand mark, link row with an active underline, and a trailing action. */
export function NavBar({ brand, links = [], active, onNavigate, action, tone = "dark" }: NavBarProps) {
  const dark = tone === "dark";

  return (
    <header
      className={`flex items-center justify-between gap-6 border-b px-6 py-4 ${
        dark ? "border-border-onDark bg-gradient-ebony" : "border-border-hairline bg-surface-card"
      }`}
    >
      <div className="flex items-center gap-3">{brand}</div>
      <nav className="flex items-center gap-6">
        {links.map((link) => {
          const isActive = link.href === active;
          return (
            <a
              key={link.href}
              href={link.href}
              onClick={(event: MouseEvent<HTMLAnchorElement>) => {
                if (onNavigate) {
                  event.preventDefault();
                  onNavigate(link.href);
                }
              }}
              className={`${textStyle.label} border-b pb-0.5 text-xs uppercase tracking-caps no-underline transition-colors duration-fast ease-standard ${
                isActive
                  ? `border-gold-400 ${dark ? "text-gold-300" : "text-ink-strong"}`
                  : `border-transparent ${dark ? "text-ink-onDarkMuted" : "text-ink-muted"}`
              }`}
            >
              {link.label}
            </a>
          );
        })}
        {action}
      </nav>
    </header>
  );
}
