import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { HeaderContent } from "./HeaderContent";
import styles from "./Section.module.css";

export type SectionHeaderProps = Omit<
  HTMLAttributes<HTMLElement>,
  "title" | "children"
> & {
  title: ReactNode;
  description?: ReactNode;
};

export function SectionHeader({
  title,
  description,
  className,
  ...headerProps
}: SectionHeaderProps) {
  return (
    <header className={cn(styles.sectionHeader, className)} {...headerProps}>
      <HeaderContent title={title} description={description} />
    </header>
  );
}
