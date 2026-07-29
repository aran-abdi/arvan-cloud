import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import { FONT_SIZE, FONT_WEIGHT, LETTER_SPACING, LINE_HEIGHT } from "@/constants";
import { cn } from "@/lib/cn";
import styles from "./LinkButton.module.css";

export type LinkButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> & {
  children: ReactNode;
};

export function LinkButton({
  children,
  disabled,
  className,
  style,
  ...buttonProps
}: LinkButtonProps) {
  const textStyle: CSSProperties = {
    fontSize: FONT_SIZE[14],
    fontWeight: FONT_WEIGHT.semibold,
    lineHeight: `${LINE_HEIGHT[20]}px`,
    letterSpacing: LETTER_SPACING.tight2,
    textAlign: "center",
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
      {children}
    </button>
  );
}
