export interface BrandProps {
  /** `false` renders the wordmark in wood tones, for light headers/footers. */
  dark?: boolean;
}

/**
 * Wordmark used in the header and footer. The brand's only real asset today
 * is `assets/logo-original.jpg` from the design-system project — a vector
 * mark was never commissioned, so this renders a typographic monogram in
 * its place. Swap the `<span>` mark below for an `<img>` once a real logo
 * file lands in `public/assets/`.
 */
export function Brand({ dark = true }: BrandProps) {
  return (
    <span className="flex items-center gap-[10px]">
      <span
        aria-hidden="true"
        className="flex h-9 w-9 items-center justify-center rounded-xs bg-gradient-gold font-display text-base text-wood-800"
      >
        AP
      </span>
      <span className={`font-display text-[24px] leading-none tracking-[.02em] ${dark ? "text-gold-300" : "text-wood-600"}`}>
        Alves Pianos
      </span>
    </span>
  );
}
