/**
 * Tailwind can't express the CSS `font` shorthand the design tokens use
 * (e.g. `--type-body`), so each semantic type role is spelled out here once
 * as a class string and reused by every component. Change a role in one
 * place instead of hunting through every component that reads body text.
 */
export const textStyle = {
  display: "font-display font-light text-5xl leading-tight",
  h1: "font-display font-regular text-4xl leading-tight",
  h2: "font-display font-regular text-3xl leading-snug",
  h3: "font-display font-medium text-xl leading-snug",
  lead: "font-sans font-light text-lg leading-normal",
  body: "font-sans font-regular text-md leading-normal",
  small: "font-sans font-regular text-sm leading-normal",
  label: "font-sans font-medium text-xs leading-[1.2]",
  overline: "font-sans font-medium text-2xs leading-[1.2] uppercase tracking-caps",
} as const;
