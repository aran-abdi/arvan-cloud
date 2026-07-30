import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import { SpinnerIcon } from "@/components/icons";
import { FONT_SIZE, FONT_WEIGHT, LETTER_SPACING, LINE_HEIGHT } from "@/constants";
import type { ButtonLayout, ButtonVariant } from "@/constants";
import { cn } from "@/lib/cn";
import styles from "./Button.module.css";

export type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> & {
  variant: ButtonVariant;
  layout: ButtonLayout;
  /** Button label — used for `layout="Text"`. Also used for accessible aria-label when `layout="Icon"`. */
  children?: ReactNode;
  /** Icon to render inside `layout="Icon"`. Ignored when `loading=true` (spinner is shown instead). */
  icon?: ReactNode;
  loading?: boolean;
};

export function Button({
  variant,
  layout,
  children,
  icon,
  loading = false,
  disabled,
  className,
  style,
  ...buttonProps
}: ButtonProps) {
  const typographyStyle: CSSProperties = {
    fontSize: FONT_SIZE[14],
    fontWeight: FONT_WEIGHT.semibold,
    lineHeight: `${LINE_HEIGHT[20]}px`,
    letterSpacing: LETTER_SPACING.tight2,
    textAlign: "center",
  };

  const rootStyle: CSSProperties = {
    ...typographyStyle,
    ...style,
  };

  return (
    <button
      type="button"
      data-variant={variant}
      data-layout={layout}
      data-loading={loading ? "true" : "false"}
      disabled={disabled || loading}
      aria-disabled={disabled || loading || undefined}
      aria-busy={loading || undefined}
      className={cn(
        styles.root,
        layout === "Text" ? styles.text : styles.icon,
        className
      )}
      style={rootStyle}
      {...buttonProps}
    >
      {loading ? (
        <span className={styles.spinner}>
          <SpinnerIcon />
        </span>
      ) : layout === "Icon" ? (
        icon
      ) : (
        children
      )}
    </button>
  );
}
