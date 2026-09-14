import { useId, type InputHTMLAttributes, type ReactNode } from "react";
import { textStyle } from "@/lib/typography";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "type"> {
  label?: ReactNode;
  id?: string;
}

/** Multiple-choice control with a hand-drawn check mark. */
export function Checkbox({ label, checked = false, disabled = false, id, onChange, className = "", ...rest }: CheckboxProps) {
  const generatedId = useId();
  const uid = id ?? generatedId;

  return (
    <label
      htmlFor={uid}
      className={`inline-flex min-h-tap items-start gap-3 py-2 ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"} ${className}`}
    >
      <input
        id={uid}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        readOnly={!onChange}
        className="peer sr-only"
        {...rest}
      />
      <span
        aria-hidden="true"
        className={`mt-0.5 flex h-[18px] w-[18px] flex-none items-center justify-center rounded-xs border transition-colors duration-fast ease-standard peer-focus-visible:shadow-focus ${
          checked ? "border-gold-500 bg-gold-400" : "border-border bg-surface-card shadow-inset"
        }`}
      >
        {checked && <span className="h-[5px] w-[9px] -translate-y-px rotate-[-45deg] border-b-2 border-l-2 border-wood-700" />}
      </span>
      <span className={`${textStyle.small} text-ink-body`}>{label}</span>
    </label>
  );
}
