import { useId, type InputHTMLAttributes, type ReactNode } from "react";
import { textStyle } from "@/lib/typography";

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "type"> {
  label?: ReactNode;
  id?: string;
}

/** Immediate-effect preference toggle. */
export function Switch({ label, checked = false, disabled = false, id, onChange, className = "", ...rest }: SwitchProps) {
  const generatedId = useId();
  const uid = id ?? generatedId;

  return (
    <label
      htmlFor={uid}
      className={`inline-flex min-h-tap items-center gap-3 py-2 ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"} ${className}`}
    >
      <input
        id={uid}
        type="checkbox"
        role="switch"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        readOnly={!onChange}
        className="peer sr-only"
        {...rest}
      />
      <span
        aria-hidden="true"
        className={`flex h-[22px] w-10 items-center rounded-pill border p-0.5 transition-colors duration-fast ease-standard peer-focus-visible:shadow-focus ${
          checked ? "justify-end border-gold-500 bg-gold-400" : "justify-start border-border bg-ivory-200"
        }`}
      >
        <span className={`h-4 w-4 rounded-pill shadow-xs ${checked ? "bg-wood-700" : "bg-surface-card"}`} />
      </span>
      <span className={`${textStyle.small} text-ink-body`}>{label}</span>
    </label>
  );
}
