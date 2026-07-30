import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./Section.module.css";

export type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export function Section({ children, className, ...sectionProps }: SectionProps) {
  return (
    <section className={cn(styles.root, className)} {...sectionProps}>
      {children}
    </section>
  );
}
