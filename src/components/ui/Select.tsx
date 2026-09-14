import { useId, type ReactNode, type SelectHTMLAttributes } from "react";
import { textStyle } from "@/lib/typography";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "id"> {
  label?: ReactNode;
  hint?: ReactNode;
  options?: SelectOption[];
  id?: string;
}

/** Native dropdown, styled to match `Input`, with a drawn chevron affordance. */
export function Select({ label, hint, options = [], id, className = "", ...rest }: SelectProps) {
  const generatedId = useId();
  const uid = id ?? generatedId;

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label htmlFor={uid} className={`${textStyle.overline} text-ink-muted`}>
          {label}
        </label>
      )}
      <div className="relative flex">
        <select
          id={uid}
          className={`flex-1 appearance-none rounded-control border border-border bg-surface-card py-[11px] pl-3 pr-9 ${textStyle.body} text-ink-strong outline-none shadow-inset transition-[box-shadow,border-color] duration-fast ease-standard focus:border-gold-400 focus:shadow-gold-focus`}
          {...rest}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-[14px] top-1/2 h-[7px] w-[7px] -translate-y-1/2 rotate-45 border-b border-r border-ink-muted"
        />
      </div>
      {hint && <span className="text-xs text-ink-muted">{hint}</span>}
    </div>
  );
}
