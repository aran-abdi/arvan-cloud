"use client";

import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./Modal.module.css";

export type ModalHeaderProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function ModalHeader({
  children,
  className,
  ...divProps
}: ModalHeaderProps) {
  return (
    <div className={cn(styles.header, className)} {...divProps}>
      {children}
    </div>
  );
}

