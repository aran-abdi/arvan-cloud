"use client";

import type { CSSProperties, KeyboardEvent, ReactNode } from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import { COLOR, LETTER_SPACING, LINE_HEIGHT, FONT_SIZE, FONT_WEIGHT, TOAST } from "@/constants";
import type { ToastType } from "@/constants";
import styles from "./Toast.module.css";

export type ToastProps = {
  type: ToastType;
  title: ReactNode;
  description?: ReactNode;
  /**
   * When true: dismiss on user click/touch.
   * When false: auto-dismiss after 3000ms.
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

  const titleStyle: CSSProperties = useMemo(
    () => ({
      fontWeight: FONT_WEIGHT.semibold,
      fontSize: FONT_SIZE[14],
      lineHeight: `${LINE_HEIGHT[20]}px`,
      letterSpacing: LETTER_SPACING.tight2,
      verticalAlign: "middle",
    }),
    []
  );

  const descriptionStyle: CSSProperties = useMemo(
    () => ({
      fontWeight: FONT_WEIGHT.regular,
      fontSize: FONT_SIZE[12],
      lineHeight: `${LINE_HEIGHT[16]}px`,
      letterSpacing: LETTER_SPACING.tight2,
      verticalAlign: "middle",
    }),
    []
  );

  const rootStyle: CSSProperties = useMemo(
    () => ({
      padding: `${TOAST.paddingY}px ${TOAST.paddingX}px`,
      minHeight: `${TOAST.minHeightPx}px`,
      borderRadius: TOAST.radiusLg,
      minWidth: `${type === "Success" ? TOAST.minWidthSuccessPx : TOAST.minWidthErrorPx}px`,
      background: type === "Success" ? COLOR.successBg1Default : COLOR.errorBg1Default,
    }),
    [type]
  );

  const textStyle: CSSProperties = useMemo(
    () => ({
      gap: TOAST.titleToDescriptionGap,
    }),
    []
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
      style={rootStyle}
      onPointerDown={action ? handlePointerDown : undefined}
      onKeyDown={action ? handleKeyDown : undefined}
    >
      <div className={styles.text} style={textStyle}>
        <div className={styles.title} style={titleStyle}>
          {title}
        </div>
        {description !== undefined && description !== null && description !== false ? (
          <div className={styles.description} style={descriptionStyle}>
            {description}
          </div>
        ) : null}
      </div>
    </div>
  );
}

