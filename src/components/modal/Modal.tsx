"use client";

import type { CSSProperties, MouseEvent, ReactNode } from "react";
import { useCallback } from "react";
import { cn } from "@/lib/cn";
import type { ModalSize } from "@/constants/modal";
import styles from "./Modal.module.css";

export type ModalProps = {
  open?: boolean;
  size: ModalSize;
  onClose?: () => void;
  children: ReactNode;
  inline?: boolean;
  className?: string;
  style?: CSSProperties;
};

export function Modal({
  open = true,
  size,
  onClose,
  children,
  inline = false,
  className,
  style,
}: ModalProps) {
  const handleBackdropMouseDown = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (!onClose) return;
      if (e.target !== e.currentTarget) return;
      onClose();
    },
    [onClose]
  );

  const panel = (
    <div
      className={cn(styles.panel, inline && className)}
      style={
        {
          "--modal-panel-width": `${size}px`,
          ...style,
        } as CSSProperties
      }
      onMouseDown={inline ? undefined : (e) => e.stopPropagation()}
    >
      {children}
    </div>
  );

  if (inline) {
    return (
      <div role="dialog" aria-modal="false">
        {panel}
      </div>
    );
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className={cn(styles.backdrop, className)}
      onMouseDown={handleBackdropMouseDown}
    >
      {panel}
    </div>
  );
}
