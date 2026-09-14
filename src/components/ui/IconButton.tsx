import type { ButtonHTMLAttributes, ReactNode } from "react";

export type IconButtonSize = "sm" | "md" | "lg";
export type IconButtonVariant = "ghost" | "outline" | "onDark";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: IconButtonSize;
  variant?: IconButtonVariant;
  /** Accessible name. Required — the button carries no visible text. */
  label: string;
  children: ReactNode;
}

const SIZE_CLASSES: Record<IconButtonSize, string> = {
  sm: "h-[30px] w-[30px]",
  md: "h-[38px] w-[38px]",
  lg: "h-[46px] w-[46px]",
};

const VARIANT_CLASSES: Record<IconButtonVariant, string> = {
  ghost: "border-transparent text-ink-strong hover:bg-ivory-100",
  outline: "border-border text-ink-strong hover:bg-ivory-100",
  onDark: "border-border-onDark text-gold-300 hover:bg-gold-400/[0.14]",
};

/** Square, icon-only action. Always requires an accessible `label`. */
export function IconButton({ size = "md", variant = "ghost", label, children, className = "", ...rest }: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className={`inline-flex items-center justify-center rounded-control border transition-colors duration-fast ease-standard ${SIZE_CLASSES[size]} ${VARIANT_CLASSES[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
