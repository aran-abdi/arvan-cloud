import type { CSSProperties, ReactNode } from "react";
import { TYPE } from "@/constants";
import { cn } from "@/lib/cn";
import styles from "./Section.module.css";

export type HeaderContentProps = {
  title: ReactNode;
  description?: ReactNode;
  className?: string;
};

export function HeaderContent({
  title,
  description,
  className,
}: HeaderContentProps) {
  const titleStyle: CSSProperties = {
    fontSize: TYPE.sectionTitle.fontSize,
    fontWeight: TYPE.sectionTitle.fontWeight,
    lineHeight: `${TYPE.sectionTitle.lineHeight}px`,
    letterSpacing: TYPE.sectionTitle.letterSpacing,
  };

  const descriptionStyle: CSSProperties = {
    fontSize: TYPE.sectionDescription.fontSize,
    fontWeight: TYPE.sectionDescription.fontWeight,
    lineHeight: `${TYPE.sectionDescription.lineHeight}px`,
    letterSpacing: TYPE.sectionDescription.letterSpacing,
  };

  return (
    <div className={cn(styles.headerContent, className)}>
      <p className={styles.title} style={titleStyle}>
        {title}
      </p>
      {description !== undefined && description !== null && description !== "" ? (
        <p className={styles.description} style={descriptionStyle}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
