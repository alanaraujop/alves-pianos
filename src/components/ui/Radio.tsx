import { useId, type InputHTMLAttributes, type ReactNode } from "react";
import { textStyle } from "@/lib/typography";

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "type"> {
  label?: ReactNode;
  id?: string;
}

/** Single-choice control shown alongside its sibling options. */
export function Radio({ label, checked = false, disabled = false, id, onChange, className = "", ...rest }: RadioProps) {
  const generatedId = useId();
  const uid = id ?? generatedId;

  return (
    <label
      htmlFor={uid}
      className={`inline-flex min-h-tap items-center gap-3 py-2 ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"} ${className}`}
    >
      <input
        id={uid}
        type="radio"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        readOnly={!onChange}
        className="peer sr-only"
        {...rest}
      />
      <span
        aria-hidden="true"
        className={`flex h-[18px] w-[18px] flex-none items-center justify-center rounded-pill border transition-colors duration-fast ease-standard peer-focus-visible:shadow-focus ${
          checked ? "border-gold-500" : "border-border shadow-inset"
        } bg-surface-card`}
      >
        {checked && <span className="h-[9px] w-[9px] rounded-pill bg-gold-400" />}
      </span>
      <span className={`${textStyle.small} text-ink-body`}>{label}</span>
    </label>
  );
}
