import type { Config } from "tailwindcss";

/**
 * Every value here points at a CSS custom property defined in
 * `src/styles/tokens.css`. Tailwind classes stay the single way to style
 * components, and the design tokens stay the single source of truth for
 * their values — change a token once, every class using it updates.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}", "./.storybook/preview.tsx"],
  theme: {
    extend: {
      colors: {
        gold: {
          100: "var(--gold-100)",
          200: "var(--gold-200)",
          300: "var(--gold-300)",
          400: "var(--gold-400)",
          500: "var(--gold-500)",
          600: "var(--gold-600)",
        },
        clay: {
          100: "var(--clay-100)",
          200: "var(--clay-200)",
          300: "var(--clay-300)",
          400: "var(--clay-400)",
          500: "var(--clay-500)",
          600: "var(--clay-600)",
        },
        wood: {
          100: "var(--wood-100)",
          200: "var(--wood-200)",
          300: "var(--wood-300)",
          400: "var(--wood-400)",
          500: "var(--wood-500)",
          600: "var(--wood-600)",
          700: "var(--wood-700)",
          800: "var(--wood-800)",
        },
        ivory: {
          50: "var(--ivory-50)",
          100: "var(--ivory-100)",
          200: "var(--ivory-200)",
          300: "var(--ivory-300)",
          400: "var(--ivory-400)",
          500: "var(--ivory-500)",
        },
        felt: {
          400: "var(--felt-400)",
          600: "var(--felt-600)",
        },
        surface: {
          page: "var(--surface-page)",
          card: "var(--surface-card)",
          sunken: "var(--surface-sunken)",
          inverse: "var(--surface-inverse)",
          accent: "var(--surface-accent)",
        },
        ink: {
          strong: "var(--text-strong)",
          body: "var(--text-body)",
          muted: "var(--text-muted)",
          onDark: "var(--text-on-dark)",
          onDarkMuted: "var(--text-on-dark-muted)",
          accent: "var(--text-accent)",
          link: "var(--text-link)",
          linkHover: "var(--text-link-hover)",
        },
        border: {
          hairline: "var(--border-hairline)",
          DEFAULT: "var(--border-default)",
          strong: "var(--border-strong)",
          gold: "var(--border-gold)",
          onDark: "var(--border-on-dark)",
        },
        state: {
          success: "var(--state-success)",
          warning: "var(--state-warning)",
          danger: "var(--state-danger)",
          info: "var(--state-info)",
        },
      },
      backgroundImage: {
        "gradient-gold": "var(--gradient-gold)",
        "gradient-ebony": "var(--gradient-ebony)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"],
        script: ["var(--font-script)"],
      },
      fontSize: {
        "2xs": "var(--text-2xs)",
        xs: "var(--text-xs)",
        sm: "var(--text-sm)",
        md: "var(--text-md)",
        lg: "var(--text-lg)",
        xl: "var(--text-xl)",
        "2xl": "var(--text-2xl)",
        "3xl": "var(--text-3xl)",
        "4xl": "var(--text-4xl)",
        "5xl": "var(--text-5xl)",
        "6xl": "var(--text-6xl)",
      },
      lineHeight: {
        tight: "var(--leading-tight)",
        snug: "var(--leading-snug)",
        normal: "var(--leading-normal)",
        loose: "var(--leading-loose)",
      },
      letterSpacing: {
        tight: "var(--tracking-tight)",
        normal: "var(--tracking-normal)",
        wide: "var(--tracking-wide)",
        caps: "var(--tracking-caps)",
      },
      fontWeight: {
        light: "var(--weight-light)",
        regular: "var(--weight-regular)",
        medium: "var(--weight-medium)",
        semibold: "var(--weight-semibold)",
      },
      spacing: {
        "0": "var(--space-0)",
        "1": "var(--space-1)",
        "2": "var(--space-2)",
        "3": "var(--space-3)",
        "4": "var(--space-4)",
        "5": "var(--space-5)",
        "6": "var(--space-6)",
        "7": "var(--space-7)",
        "8": "var(--space-8)",
        "9": "var(--space-9)",
        "10": "var(--space-10)",
        "11": "var(--space-11)",
      },
      maxWidth: {
        "container-sm": "var(--container-sm)",
        "container-md": "var(--container-md)",
        "container-lg": "var(--container-lg)",
        "container-xl": "var(--container-xl)",
        prose: "640px",
      },
      borderRadius: {
        none: "var(--radius-none)",
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        DEFAULT: "var(--radius-md)",
        lg: "var(--radius-lg)",
        pill: "var(--radius-pill)",
        control: "var(--radius-control)",
        card: "var(--radius-card)",
        media: "var(--radius-media)",
      },
      boxShadow: {
        none: "var(--shadow-none)",
        xs: "var(--shadow-xs)",
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        inset: "var(--shadow-inset)",
        "gold-focus": "var(--shadow-gold-focus)",
      },
      backdropBlur: {
        veil: "10px",
      },
      transitionTimingFunction: {
        standard: "var(--ease-standard)",
        "out-soft": "var(--ease-out-soft)",
        in: "var(--ease-in)",
      },
      transitionDuration: {
        instant: "90ms",
        fast: "160ms",
        normal: "240ms",
        slow: "420ms",
        reveal: "700ms",
      },
    },
  },
  plugins: [],
};

export default config;
