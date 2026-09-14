import { textStyle } from "@/lib/typography";

export interface TabItem {
  value: string;
  label: string;
}

export type TabsTone = "light" | "dark";

export interface TabsProps {
  items?: TabItem[];
  value?: string;
  onChange?: (value: string) => void;
  tone?: TabsTone;
}

/** Underlined tab row, gold on the active item. */
export function Tabs({ items = [], value, onChange, tone = "light" }: TabsProps) {
  const dark = tone === "dark";

  return (
    <div role="tablist" className={`flex gap-6 border-b ${dark ? "border-border-onDark" : "border-border-hairline"}`}>
      {items.map((item) => {
        const active = item.value === value;
        return (
          <button
            key={item.value}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange?.(item.value)}
            className={`-mb-px border-b-2 bg-transparent pb-3 ${textStyle.label} text-xs uppercase tracking-caps transition-colors duration-fast ease-standard ${
              active
                ? `border-gold-400 ${dark ? "text-gold-300" : "text-ink-strong"}`
                : `border-transparent ${dark ? "text-ink-onDarkMuted" : "text-ink-muted"}`
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
