import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import { FONT_SIZE, FONT_WEIGHT, LETTER_SPACING, LINE_HEIGHT } from "@/constants";
import { cn } from "@/lib/cn";
import styles from "./DropDownElement.module.css";

export type DropDownElementProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> & {
  children: ReactNode;
  icon?: ReactNode;
};

export function DropDownElement({
  children,
  icon,
  disabled,
  className,
  style,
  ...buttonProps
}: DropDownElementProps) {
  const textStyle: CSSProperties = {
    fontSize: FONT_SIZE[14],
    fontWeight: FONT_WEIGHT.regular,
    lineHeight: `${LINE_HEIGHT[20]}px`,
    letterSpacing: LETTER_SPACING.tight2,
    ...style,
  };

  return (
    <button
      type="button"
      disabled={disabled}
      aria-disabled={disabled || undefined}
      className={cn(styles.root, className)}
      style={textStyle}
      {...buttonProps}
    >
      {icon ? <span className={styles.icon}>{icon}</span> : null}
      <span className={styles.label}>{children}</span>
    </button>
  );
}
