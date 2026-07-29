import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./Section.module.css";

export type SectionBodyProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function SectionBody({
  children,
  className,
  ...divProps
}: SectionBodyProps) {
  return (
    <div className={cn(styles.sectionBody, className)} {...divProps}>
      {children}
    </div>
  );
}
