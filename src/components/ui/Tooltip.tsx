"use client";

import { useState, type ReactElement, type ReactNode } from "react";

export interface TooltipProps {
  content: ReactNode;
  placement?: "top" | "bottom";
  children: ReactElement;
}

/** Short hint shown on hover or focus of the wrapped element. */
export function Tooltip({ content, placement = "top", children }: TooltipProps) {
  const [show, setShow] = useState(false);

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
    >
      {children}
      {show && (
        <span
          role="tooltip"
          className={`pointer-events-none absolute left-1/2 z-40 -translate-x-1/2 whitespace-nowrap rounded-xs bg-wood-700 px-[10px] py-[6px] text-xs text-ivory-100 shadow-md ${
            placement === "bottom" ? "top-[calc(100%+8px)]" : "bottom-[calc(100%+8px)]"
          }`}
        >
          {content}
        </span>
      )}
    </span>
  );
}
