import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./Sidebar.module.css";

export type SidebarProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export function Sidebar({ children, className, ...asideProps }: SidebarProps) {
  return (
    <aside className={cn(styles.root, className)} {...asideProps}>
      {children}
    </aside>
  );
}
