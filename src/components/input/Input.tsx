import type { CSSProperties, InputHTMLAttributes, ReactNode } from "react";
import {
  FIELD_RADIUS,
  FIELD_SPACE_PX,
  INPUT_BORDER_WIDTH,
  INPUT_HEIGHT_PX,
  TYPE,
  type InputSize,
} from "@/constants";
import { cn } from "@/lib/cn";
import styles from "./Input.module.css";

export type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size" | "className"
> & {
  label?: ReactNode;
  showLabel?: boolean;
  required?: boolean;
  message?: ReactNode;
  error?: boolean;
  size?: InputSize;
  className?: string;
  inputClassName?: string;
};

export function Input({
  id,
  label,
  showLabel,
  required = false,
  message,
  error = false,
  size = "md",
  disabled,
  readOnly,
  className,
  inputClassName,
  style,
  ...inputProps
}: InputProps) {
  const inputId = id;
  const shouldShowLabel =
    showLabel ?? (label !== undefined && label !== null && label !== "");
  const hasMessage =
    message !== undefined &&
    message !== null &&
    message !== false &&
    message !== "";

  const rootStyle: CSSProperties = {
    gap: FIELD_SPACE_PX.labelGap,
  };

  const controlStyle: CSSProperties = {
    gap: FIELD_SPACE_PX.messageGap,
  };

  const labelStyle: CSSProperties = {
    fontSize: TYPE.label.fontSize,
    fontWeight: TYPE.label.fontWeight,
    lineHeight: `${TYPE.label.lineHeight}px`,
    letterSpacing: TYPE.label.letterSpacing,
  };

  const inputStyle: CSSProperties = {
    height: INPUT_HEIGHT_PX[size],
    paddingInline: FIELD_SPACE_PX.inputPaddingX,
    borderRadius: FIELD_RADIUS.input,
    borderWidth: INPUT_BORDER_WIDTH,
    fontSize: TYPE.input.fontSize,
    fontWeight: TYPE.input.fontWeight,
    lineHeight: `${TYPE.input.lineHeight}px`,
    letterSpacing: TYPE.input.letterSpacing,
    ...style,
  };

  const messageStyle: CSSProperties = {
    fontSize: TYPE.message.fontSize,
    fontWeight: TYPE.message.fontWeight,
    lineHeight: `${TYPE.message.lineHeight}px`,
    letterSpacing: TYPE.message.letterSpacing,
  };

  return (
    <div className={cn(styles.root, className)} style={rootStyle}>
      {shouldShowLabel ? (
        <label className={styles.label} htmlFor={inputId} style={labelStyle}>
          {label}
          {required ? (
            <span className={styles.required} aria-hidden="true">
              *
            </span>
          ) : null}
        </label>
      ) : null}

      <div className={styles.control} style={controlStyle}>
        <input
          {...inputProps}
          id={inputId}
          className={cn(styles.input, error && styles.error, inputClassName)}
          style={inputStyle}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          aria-invalid={error || undefined}
          aria-describedby={
            hasMessage && inputId ? `${inputId}-message` : undefined
          }
        />

        {hasMessage ? (
          <p
            id={inputId ? `${inputId}-message` : undefined}
            className={cn(styles.message, error && styles.messageError)}
            style={messageStyle}
            role={error ? "alert" : undefined}
          >
            {message}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export type { InputSize };
