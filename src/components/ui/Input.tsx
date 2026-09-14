import { useId, type InputHTMLAttributes, type ReactNode } from "react";
import { textStyle } from "@/lib/typography";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "size" | "prefix"> {
  label?: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
  id?: string;
}

/** Single-line text field with label, hint/error text, and optional prefix/suffix. */
export function Input({ label, hint, error, prefix, suffix, id, className = "", ...rest }: InputProps) {
  const generatedId = useId();
  const uid = id ?? generatedId;

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label htmlFor={uid} className={`${textStyle.overline} text-ink-muted`}>
          {label}
        </label>
      )}
      <div
        className={`flex items-center gap-2 rounded-control border bg-surface-card px-3 shadow-inset transition-[box-shadow,border-color] duration-fast ease-standard focus-within:shadow-gold-focus ${
          error ? "border-state-danger" : "border-border focus-within:border-gold-400"
        }`}
      >
        {prefix && <span className="flex text-ink-muted">{prefix}</span>}
        <input
          id={uid}
          className={`min-w-0 flex-1 border-none bg-transparent py-[11px] ${textStyle.body} text-ink-strong outline-none placeholder:text-ink-muted`}
          {...rest}
        />
        {suffix && <span className="flex text-ink-muted">{suffix}</span>}
      </div>
      {(error || hint) && <span className={`text-xs ${error ? "text-state-danger" : "text-ink-muted"}`}>{error || hint}</span>}
    </div>
  );
}
