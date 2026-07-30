import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./Sidebar.module.css";

export type SidebarProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  /** Pin below the header for the viewport height. @default true */
  fixed?: boolean;
};

export function Sidebar({
  children,
  className,
  fixed = true,
  ...asideProps
}: SidebarProps) {
  return (
    <aside
      data-fixed={fixed ? "true" : "false"}
      className={cn(styles.root, className)}
      {...asideProps}
    >
      {children}
    </aside>
  );
}
