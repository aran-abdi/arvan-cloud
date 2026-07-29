import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import { TYPE } from "@/constants";
import { cn } from "@/lib/cn";
import styles from "./Sidebar.module.css";

export type SidebarItemProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> & {
  children: ReactNode;
  selected?: boolean;
};

export function SidebarItem({
  children,
  selected = false,
  disabled,
  className,
  style,
  ...buttonProps
}: SidebarItemProps) {
  const textStyle: CSSProperties = {
    fontSize: TYPE.sidebarItem.fontSize,
    fontWeight: TYPE.sidebarItem.fontWeight,
    lineHeight: `${TYPE.sidebarItem.lineHeight}px`,
    letterSpacing: TYPE.sidebarItem.letterSpacing,
    verticalAlign: "middle",
    ...style,
  };

  return (
    <button
      type="button"
      disabled={disabled}
      aria-current={selected ? "page" : undefined}
      data-selected={selected ? "true" : "false"}
      className={cn(styles.item, className)}
      style={textStyle}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
