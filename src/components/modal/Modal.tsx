"use client";

import type { CSSProperties, MouseEvent, ReactNode } from "react";
import { useCallback } from "react";
import { cn } from "@/lib/cn";
import type { ModalSize } from "@/constants/modal";
import { MODAL } from "@/constants/modal";
import styles from "./Modal.module.css";

export type ModalProps = {
  open: boolean;
  size: ModalSize;
  onClose?: () => void;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function Modal({
  open,
  size,
  onClose,
  children,
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

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className={cn(styles.backdrop, className)}
      onMouseDown={handleBackdropMouseDown}
      style={{ background: MODAL.overlayBg }}
    >
      <div
        className={styles.panel}
        style={{ width: size, ...style }}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

