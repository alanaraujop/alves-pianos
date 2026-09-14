import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

export type IconButtonSize = "sm" | "md" | "lg";
export type IconButtonVariant = "ghost" | "outline" | "onDark";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: IconButtonSize;
  variant?: IconButtonVariant;
  /** Accessible name. Required — the button carries no visible text. */
  label: string;
  children: ReactNode;
}

/**
 * Only `md` and `lg` are large enough para o dedo por conta própria. O `sm`
 * mantém o desenho compacto de 32px que a régua visual pede, mas estende a
 * área clicável até 44px com um `::after` invisível — o alvo de toque cresce
 * sem que a moldura desenhada engorde (WCAG 2.5.8).
 */
const SIZE_CLASSES: Record<IconButtonSize, string> = {
  sm: "h-8 w-8 after:absolute after:left-1/2 after:top-1/2 after:h-tap after:w-tap after:-translate-x-1/2 after:-translate-y-1/2 after:content-['']",
  md: "h-tap w-tap",
  lg: "h-12 w-12",
};

const VARIANT_CLASSES: Record<IconButtonVariant, string> = {
  ghost: "border-transparent text-ink-strong hover:bg-ivory-100",
  outline: "border-border text-ink-strong hover:bg-ivory-100",
  onDark: "border-border-onDark text-gold-300 hover:bg-gold-400/[0.14] focus-visible:shadow-focus-on-dark",
};

/**
 * Square, icon-only action. Always requires an accessible `label`.
 *
 * Encaminha a `ref` porque quem abre um painel com este botão precisa
 * devolver o foco a ele ao fechar — é o caso do menu do celular na `NavBar`.
 */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { size = "md", variant = "ghost", label, children, className = "", ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type="button"
      aria-label={label}
      className={`relative inline-flex flex-none items-center justify-center rounded-control border transition-colors duration-fast ease-standard ${SIZE_CLASSES[size]} ${VARIANT_CLASSES[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
});
