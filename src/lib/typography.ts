/**
 * Tailwind can't express the CSS `font` shorthand the design tokens use
 * (e.g. `--type-body`), so each semantic type role is spelled out here once
 * as a class string and reused by every component. Change a role in one
 * place instead of hunting through every component that reads body text.
 *
 * Título é sempre Libre Baskerville Bold — é o único corte de título que a
 * marca tem, então a hierarquia entre `display`, `h1`, `h2` e `h3` vem só do
 * tamanho, e não de variações de peso que o navegador teria de sintetizar.
 */
export const textStyle = {
  display: "font-display font-bold text-5xl leading-tight tracking-tight",
  h1: "font-display font-bold text-4xl leading-tight tracking-tight",
  h2: "font-display font-bold text-3xl leading-snug",
  h3: "font-display font-bold text-xl leading-snug",
  lead: "font-sans font-regular text-lg leading-normal",
  body: "font-sans font-regular text-md leading-normal",
  small: "font-sans font-regular text-sm leading-normal",
  label: "font-sans font-medium text-xs leading-[1.2]",
  overline: "font-sans font-medium text-2xs leading-[1.2] uppercase tracking-caps",
} as const;
