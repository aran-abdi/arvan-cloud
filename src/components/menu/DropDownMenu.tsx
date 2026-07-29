import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./DropDownMenu.module.css";

export type DropDownMenuProps = HTMLAttributes<HTMLDivElement> & {
  open?: boolean;
  children: ReactNode;
};

export function DropDownMenu({
  open = true,
  children,
  className,
  ...divProps
}: DropDownMenuProps) {
  if (!open) return null;

  return (
    <div
      role="menu"
      className={cn(styles.root, className)}
      {...divProps}
    >
      {children}
    </div>
  );
}
