import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./Header.module.css";

export type HeaderProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export function Header({ children, className, ...headerProps }: HeaderProps) {
  return (
    <header className={cn(styles.root, className)} {...headerProps}>
      {children}
    </header>
  );
}
