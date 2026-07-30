import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import styles from "./Table.module.css";

export type TableRowNumberProps = HTMLAttributes<HTMLSpanElement> & {
  children: number | string;
};

export function TableRowNumber({
  children,
  className,
  ...spanProps
}: TableRowNumberProps) {
  return (
    <span className={cn(styles.rowNumber, className)} {...spanProps}>
      {children}
    </span>
  );
}
