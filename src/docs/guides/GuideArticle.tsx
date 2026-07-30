import type { ReactNode } from "react";
import styles from "@/docs/docs.module.css";

export function GuideArticle({ children }: { children: ReactNode }) {
  return <article className={styles.guide}>{children}</article>;
}

export function GuideSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className={styles.guideSection}>
      <h2 className={styles.guideHeading}>{title}</h2>
      {children}
    </section>
  );
}

export function GuideCode({ children }: { children: string }) {
  return (
    <pre className={styles.guideCode}>
      <code>{children}</code>
    </pre>
  );
}

export function GuideInlineCode({ children }: { children: ReactNode }) {
  return <code className={styles.guideInlineCode}>{children}</code>;
}

export function GuideList({ children }: { children: ReactNode }) {
  return <ul className={styles.guideList}>{children}</ul>;
}
