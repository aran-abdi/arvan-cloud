"use client";

import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./Modal.module.css";

export type ModalBodyProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  style?: CSSProperties;
};

export function ModalBody({
  children,
  className,
  style,
  ...divProps
}: ModalBodyProps) {
  return (
    <div
      className={cn(styles.body, className)}
      style={style}
      {...divProps}
    >
      {children}
    </div>
  );
}

