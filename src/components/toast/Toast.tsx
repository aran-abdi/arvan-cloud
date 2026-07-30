"use client";

import type { KeyboardEvent, ReactNode } from "react";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { TOAST } from "@/constants";
import type { ToastType } from "@/constants";
import styles from "./Toast.module.css";

export type ToastProps = {
  type: ToastType;
  title: ReactNode;
  description?: ReactNode;
  /**
   * When true: dismiss on user click/touch.
   * When false: auto-dismiss after TOAST.autoDismissMs.
   */
  action?: boolean;
  className?: string;
  onDismiss?: () => void;
};

export function Toast({
  type,
  title,
  description,
  action = false,
  className,
  onDismiss,
}: ToastProps) {
  const [open, setOpen] = useState(true);

  const dismiss = useCallback(() => {
    setOpen(false);
    onDismiss?.();
  }, [onDismiss]);

  useEffect(() => {
    if (action) return;
    const t = window.setTimeout(() => dismiss(), TOAST.autoDismissMs);
    return () => window.clearTimeout(t);
  }, [action, dismiss]);

  const handlePointerDown = useCallback(() => {
    if (!action) return;
    dismiss();
  }, [action, dismiss]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (!action) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        dismiss();
      }
    },
    [action, dismiss]
  );

  if (!open) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      data-type={type}
      data-action={action ? "true" : "false"}
      tabIndex={action ? 0 : undefined}
      className={cn(styles.root, className)}
      onPointerDown={action ? handlePointerDown : undefined}
      onKeyDown={action ? handleKeyDown : undefined}
    >
      <div className={styles.text}>
        <div className={styles.title}>{title}</div>
        {description !== undefined && description !== null && description !== false ? (
          <div className={styles.description}>{description}</div>
        ) : null}
      </div>
    </div>
  );
}
