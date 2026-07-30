"use client";

import { Icon } from "@/components/icons";
import failedIcon from "@/assets/icons/failed.png";
import { MODAL } from "@/constants/modal";
import { cn } from "@/lib/cn";
import styles from "./Modal.module.css";

export type ModalStatusVariant = "success" | "failed";

export type ModalStatusIconProps = {
  variant: ModalStatusVariant;
  className?: string;
};

function SuccessGlyph() {
  return (
    <svg
      width={MODAL.iconSize}
      height={MODAL.iconSize}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={styles.statusIcon}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.25 1.5C4.52171 1.5 1.5 4.52171 1.5 8.25C1.5 11.9783 4.52171 15 8.25 15C11.9783 15 15 11.9783 15 8.25C15 4.52171 11.9783 1.5 8.25 1.5ZM8.25 0C3.69329 0 0 3.69329 0 8.25C0 12.8067 3.69329 16.5 8.25 16.5C12.8067 16.5 16.5 12.8067 16.5 8.25C16.5 3.69329 12.8067 0 8.25 0Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.1137 6.053C12.4066 6.3459 12.4066 6.82077 12.1137 7.11366L7.947 11.2803C7.6541 11.5732 7.17923 11.5732 6.88634 11.2803L4.38634 8.78033C4.09344 8.48744 4.09344 8.01256 4.38634 7.71967C4.67923 7.42678 5.1541 7.42678 5.447 7.71967L7.41667 9.68934L11.053 6.053C11.3459 5.76011 11.8208 5.76011 12.1137 6.053Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ModalStatusIcon({
  variant,
  className,
}: ModalStatusIconProps) {
  return (
    <div
      className={cn(styles.statusIconWrapper, className)}
      data-variant={variant}
    >
      {variant === "success" ? (
        <SuccessGlyph />
      ) : (
        <Icon
          src={failedIcon}
          width={MODAL.iconSize}
          height={MODAL.iconSize}
          className={styles.statusIcon}
        />
      )}
    </div>
  );
}
