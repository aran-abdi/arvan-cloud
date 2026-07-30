import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./Header.module.css";

export type HeaderProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  /** Pin to the top of the viewport. @default true */
  fixed?: boolean;
};

export function Header({
  children,
  className,
  fixed = true,
  ...headerProps
}: HeaderProps) {
  return (
    <header
      data-fixed={fixed ? "true" : "false"}
      className={cn(styles.root, className)}
      {...headerProps}
    >
      {children}
    </header>
  );
}
