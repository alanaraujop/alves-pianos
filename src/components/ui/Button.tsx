import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "gold" | "secondary" | "ghost" | "onDark";
export type ButtonSize = "sm" | "md" | "lg";

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Stretches the button to the width of its container. */
  full?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  children?: ReactNode;
  className?: string;
};

export type ButtonProps = CommonProps &
  ({ href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps | "href">) |
  (CommonProps & { href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps>);

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-2xs",
  md: "px-6 py-3 text-xs",
  lg: "px-[34px] py-4 text-sm",
};

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "border-wood-600 bg-wood-600 text-ivory-100 hover:border-wood-700 hover:bg-wood-700",
  gold: "border-gold-500 bg-gold-400 text-wood-700 hover:border-gold-400 hover:bg-gold-300",
  secondary: "border-border-strong bg-transparent text-ink-strong hover:border-wood-500 hover:bg-ivory-100",
  ghost: "border-transparent bg-transparent text-ink-link normal-case tracking-normal hover:text-ink-linkHover",
  onDark: "border-gold-500 bg-transparent text-gold-300 hover:border-gold-400 hover:bg-gold-400/[0.14]",
};

/** Primary call-to-action control. Renders as `<a>` when `href` is given, `<button>` otherwise. */
export function Button({
  variant = "primary",
  size = "md",
  full = false,
  iconLeft,
  iconRight,
  children,
  className = "",
  href,
  ...rest
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-control border font-sans font-medium uppercase tracking-wide leading-none no-underline transition-colors duration-fast ease-standard active:translate-y-px disabled:pointer-events-none disabled:opacity-45 ${SIZE_CLASSES[size]} ${VARIANT_CLASSES[variant]} ${full ? "w-full" : ""} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {iconLeft}
        {children}
        {iconRight}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
