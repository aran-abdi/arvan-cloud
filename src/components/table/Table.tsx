import type { HTMLAttributes, ReactNode, TableHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import styles from "./Table.module.css";

export type TableProps = TableHTMLAttributes<HTMLTableElement> & {
  children: ReactNode;
};

export function Table({ children, className, ...tableProps }: TableProps) {
  return (
    <div className={styles.scroll}>
      <table className={cn(styles.table, className)} {...tableProps}>
        {children}
      </table>
    </div>
  );
}

export type TableHeaderProps = HTMLAttributes<HTMLTableSectionElement> & {
  children: ReactNode;
};

export function TableHeader({
  children,
  className,
  ...sectionProps
}: TableHeaderProps) {
  return (
    <thead className={className} {...sectionProps}>
      {children}
    </thead>
  );
}

export type TableBodyProps = HTMLAttributes<HTMLTableSectionElement> & {
  children: ReactNode;
};

export function TableBody({
  children,
  className,
  ...sectionProps
}: TableBodyProps) {
  return (
    <tbody className={cn(styles.body, className)} {...sectionProps}>
      {children}
    </tbody>
  );
}

export type TableRowProps = HTMLAttributes<HTMLTableRowElement> & {
  children: ReactNode;
};

export function TableRow({ children, className, ...rowProps }: TableRowProps) {
  return (
    <tr className={cn(styles.row, className)} {...rowProps}>
      {children}
    </tr>
  );
}

export type TableHeadProps = HTMLAttributes<HTMLTableCellElement> & {
  children?: ReactNode;
  align?: "start" | "center" | "index";
};

export function TableHead({
  children,
  className,
  align = "start",
  ...cellProps
}: TableHeadProps) {
  return (
    <th
      scope="col"
      className={cn(
        styles.head,
        align === "center" && styles.headCenter,
        align === "index" && styles.headIndex,
        className
      )}
      {...cellProps}
    >
      {align === "index" ? (
        <span className={styles.headIndexLabel}>{children}</span>
      ) : (
        children
      )}
    </th>
  );
}

export type TableCellProps = HTMLAttributes<HTMLTableCellElement> & {
  children?: ReactNode;
  strong?: boolean;
  align?: "start" | "center" | "index";
};

export function TableCell({
  children,
  className,
  strong = false,
  align = "start",
  ...cellProps
}: TableCellProps) {
  return (
    <td
      className={cn(
        styles.cell,
        strong && styles.cellStrong,
        align === "center" && styles.cellCenter,
        align === "index" && styles.cellIndex,
        className
      )}
      {...cellProps}
    >
      {children}
    </td>
  );
}
