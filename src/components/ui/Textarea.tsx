import { useId, type ReactNode, type TextareaHTMLAttributes } from "react";
import { textStyle } from "@/lib/typography";

export interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "id"> {
  label?: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  id?: string;
}

/** Multi-line text field, otherwise styled like `Input`. */
export function Textarea({ label, hint, error, rows = 4, id, className = "", ...rest }: TextareaProps) {
  const generatedId = useId();
  const uid = id ?? generatedId;
  const messageId = `${uid}-msg`;

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label htmlFor={uid} className={`${textStyle.overline} text-ink-muted`}>
          {label}
        </label>
      )}
      <textarea
        id={uid}
        rows={rows}
        aria-invalid={error ? true : undefined}
        aria-describedby={error || hint ? messageId : undefined}
        className={`resize-y rounded-control border bg-surface-card px-3 py-[11px] ${textStyle.body} text-ink-strong outline-none shadow-inset transition-[box-shadow,border-color] duration-fast ease-standard placeholder:text-ink-muted focus:shadow-gold-focus ${
          error ? "border-state-danger" : "border-border focus:border-gold-400"
        }`}
        {...rest}
      />
      {(error || hint) && (
        <span id={messageId} role={error ? "alert" : undefined} className={`text-xs ${error ? "text-state-danger" : "text-ink-muted"}`}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
