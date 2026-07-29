"use client";

import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./Modal.module.css";

export type ModalFooterProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  style?: CSSProperties;
};

export function ModalFooter({
  children,
  className,
  style,
  ...divProps
}: ModalFooterProps) {
  return (
    <div
      className={cn(styles.footer, className)}
      style={style}
      {...divProps}
    >
      {children}
    </div>
  );
}

