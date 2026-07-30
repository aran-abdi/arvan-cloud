import type { CSSProperties, HTMLAttributes } from "react";
import { SpinnerIcon } from "@/components/icons";
import { FONT_SIZE, FONT_WEIGHT, LETTER_SPACING, LINE_HEIGHT } from "@/constants";
import { cn } from "@/lib/cn";
import styles from "./DropDownContent.module.css";

export type DropDownContentProps = HTMLAttributes<HTMLDivElement> & {
  label?: string;
};

export function DropDownContent({
  label = "loading...",
  className,
  style,
  ...divProps
}: DropDownContentProps) {
  const textStyle: CSSProperties = {
    fontSize: FONT_SIZE[14],
    fontWeight: FONT_WEIGHT.regular,
    lineHeight: `${LINE_HEIGHT[20]}px`,
    letterSpacing: LETTER_SPACING.tight2,
    ...style,
  };

  return (
    <div
      className={cn(styles.root, className)}
      style={textStyle}
      {...divProps}
    >
      <span className={styles.icon}>
        <SpinnerIcon />
      </span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
