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
    // O monograma e o nome encolhem um pouco no celular para dividir a barra
    // com o botão de menu. `flex-none` evita que a marca seja a peça sacrificada
    // quando o cabeçalho aperta — cabe inteira mesmo em 320px.
    <span className="flex flex-none items-center gap-2 sm:gap-[10px]">
      <span
        aria-hidden="true"
        className="flex h-8 w-8 flex-none items-center justify-center rounded-xs bg-gradient-gold font-display text-sm text-wood-800 sm:h-9 sm:w-9 sm:text-base"
      >
        AP
      </span>
      <span
        className={`whitespace-nowrap font-display text-[20px] leading-none tracking-[.02em] sm:text-[24px] ${
          dark ? "text-gold-300" : "text-wood-600"
        }`}
      >
        Alves Pianos
      </span>
    </span>
  );
}
