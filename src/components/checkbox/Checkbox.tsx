"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useCallback, useId, useMemo, useState } from "react";
import { CheckIcon, IndeterminateIcon } from "@/components/icons";
import type { CheckboxValue } from "@/constants";
import { cn } from "@/lib/cn";
import styles from "./Checkbox.module.css";

export type CheckboxProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "value" | "disabled" | "onChange" | "children"
> & {
  value: CheckboxValue;
  disabled?: boolean;
  onValueChange?: (next: CheckboxValue) => void;
  label?: ReactNode;
};

export function Checkbox({
  value,
  disabled = false,
  onValueChange,
  label,
  id,
  className,
  onPointerDown,
  onPointerUp,
  onPointerLeave,
  onKeyDown,
  onKeyUp,
  onBlur,
  ...buttonProps
}: CheckboxProps) {
  const [pressed, setPressed] = useState(false);
  const generatedId = useId();
  const checkboxId = id ?? generatedId;

  const dataValue = useMemo(() => {
    switch (value) {
      case "On":
        return "on";
      case "Off":
        return "off";
      case "Indeterminate":
        return "indeterminate";
      default:
        return "off";
    }
  }, [value]);

  const toggle = useCallback(() => {
    if (!onValueChange || disabled) return;
    if (value === "Off") onValueChange("On");
    else if (value === "On") onValueChange("Off");
    else onValueChange("On"); // Indeterminate -> On
  }, [disabled, onValueChange, value]);

  const handleClick: NonNullable<ButtonHTMLAttributes<HTMLButtonElement>["onClick"]> =
    useCallback(
      (e) => {
        buttonProps.onClick?.(e);
        if (e.defaultPrevented) return;
        toggle();
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps -- only onClick from buttonProps
      [buttonProps.onClick, toggle]
    );

  const handlePointerDown: NonNullable<
    ButtonHTMLAttributes<HTMLButtonElement>["onPointerDown"]
  > = useCallback(
    (e) => {
      onPointerDown?.(e);
      if (!disabled) setPressed(true);
    },
    [disabled, onPointerDown]
  );

  const handlePointerUp: NonNullable<
    ButtonHTMLAttributes<HTMLButtonElement>["onPointerUp"]
  > = useCallback(
    (e) => {
      onPointerUp?.(e);
      setPressed(false);
    },
    [onPointerUp]
  );

  const handlePointerLeave: NonNullable<
    ButtonHTMLAttributes<HTMLButtonElement>["onPointerLeave"]
  > = useCallback(
    (e) => {
      onPointerLeave?.(e);
      setPressed(false);
    },
    [onPointerLeave]
  );

  const handleKeyDown: NonNullable<
    ButtonHTMLAttributes<HTMLButtonElement>["onKeyDown"]
  > = useCallback(
    (e) => {
      onKeyDown?.(e);
      if (disabled) return;
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        setPressed(true);
        toggle();
      }
    },
    [disabled, onKeyDown, toggle]
  );

  const handleKeyUp: NonNullable<
    ButtonHTMLAttributes<HTMLButtonElement>["onKeyUp"]
  > = useCallback(
    (e) => {
      onKeyUp?.(e);
      setPressed(false);
    },
    [onKeyUp]
  );

  const handleBlur: NonNullable<ButtonHTMLAttributes<HTMLButtonElement>["onBlur"]> =
    useCallback(
      (e) => {
        onBlur?.(e);
        setPressed(false);
      },
      [onBlur]
    );

  const control = (
    <button
      type="button"
      id={checkboxId}
      role="checkbox"
      aria-checked={
        value === "On" ? true : value === "Indeterminate" ? "mixed" : false
      }
      aria-disabled={disabled || undefined}
      disabled={disabled}
      data-value={dataValue}
      data-pressed={pressed || undefined}
      className={cn(styles.root, !label && className)}
      {...buttonProps}
      onClick={handleClick}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerLeave}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      onBlur={handleBlur}
    >
      {value === "On" ? <CheckIcon className={styles.icon} /> : null}
      {value === "Indeterminate" ? (
        <IndeterminateIcon className={styles.icon} />
      ) : null}
    </button>
  );

  if (label === undefined || label === null || label === false || label === "") {
    return control;
  }

  // Don't wrap the button in <label> — both would fire and toggle twice.
  return (
    <div
      className={cn(styles.field, className)}
      data-disabled={disabled ? "true" : undefined}
    >
      {control}
      <label htmlFor={checkboxId} className={styles.label}>
        {label}
      </label>
    </div>
  );
}
