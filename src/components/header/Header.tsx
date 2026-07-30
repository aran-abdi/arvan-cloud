import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./Header.module.css";

export type HeaderProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
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
