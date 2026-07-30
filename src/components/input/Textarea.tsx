import type {
  CSSProperties,
  ReactNode,
  TextareaHTMLAttributes,
} from "react";
import {
  FIELD_RADIUS,
  FIELD_SPACE_PX,
  INPUT_BORDER_WIDTH,
  TYPE,
} from "@/constants";
import { cn } from "@/lib/cn";
import styles from "./Input.module.css";

export type TextareaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "className"
> & {
  label?: ReactNode;
  showLabel?: boolean;
  required?: boolean;
  message?: ReactNode;
  error?: boolean;
  className?: string;
  textareaClassName?: string;
  minHeight?: number;
};

export function Textarea({
  id,
  label,
  showLabel,
  required = false,
  message,
  error = false,
  disabled,
  readOnly,
  className,
  textareaClassName,
  style,
  minHeight = 120,
  rows = 5,
  ...textareaProps
}: TextareaProps) {
  const textareaId = id;
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

  const textareaStyle: CSSProperties = {
    minHeight,
    paddingBlock: FIELD_SPACE_PX.inputPaddingX,
    paddingInline: FIELD_SPACE_PX.inputPaddingX,
    borderRadius: FIELD_RADIUS.input,
    borderWidth: INPUT_BORDER_WIDTH,
    fontSize: TYPE.input.fontSize,
    fontWeight: TYPE.input.fontWeight,
    lineHeight: `${TYPE.input.lineHeight}px`,
    letterSpacing: TYPE.input.letterSpacing,
    resize: "vertical",
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
        <label className={styles.label} htmlFor={textareaId} style={labelStyle}>
          {label}
          {required ? (
            <span className={styles.required} aria-hidden="true">
              *
            </span>
          ) : null}
        </label>
      ) : null}

      <div className={styles.control} style={controlStyle}>
        <textarea
          {...textareaProps}
          id={textareaId}
          rows={rows}
          className={cn(
            styles.input,
            styles.textarea,
            error && styles.error,
            textareaClassName
          )}
          style={textareaStyle}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          aria-invalid={error || undefined}
          aria-describedby={
            hasMessage && textareaId ? `${textareaId}-message` : undefined
          }
        />

        {hasMessage ? (
          <p
            id={textareaId ? `${textareaId}-message` : undefined}
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
