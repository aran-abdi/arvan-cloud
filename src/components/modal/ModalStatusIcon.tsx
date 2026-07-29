"use client";

import { Icon } from "@/components/icons";
import circleCheckIcon from "@/assets/icons/circle-check.svg";
import failedIcon from "@/assets/icons/failed.png";
import { MODAL } from "@/constants/modal";
import { cn } from "@/lib/cn";
import styles from "./Modal.module.css";

export type ModalStatusVariant = "success" | "failed";

export type ModalStatusIconProps = {
  variant: ModalStatusVariant;
  className?: string;
};

export function ModalStatusIcon({
  variant,
  className,
}: ModalStatusIconProps) {
  const src = variant === "success" ? circleCheckIcon : failedIcon;

  return (
    <div
      className={cn(styles.statusIconWrapper, className)}
      data-variant={variant}
    >
      <Icon src={src} width={MODAL.iconSize} height={MODAL.iconSize} className={styles.statusIcon} />
    </div>
  );
}

