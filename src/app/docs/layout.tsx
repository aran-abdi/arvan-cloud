import { Header } from "@/components";
import { DocsSidebar } from "@/docs/DocsSidebar";
import styles from "@/docs/docs.module.css";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.shell}>
      <Header>
        <span>Welcome to Arvan UI</span>
        <span className={styles.centerLabel}>Arvan Docs</span>
        <span />
      </Header>
      <div className={styles.body}>
        <DocsSidebar />
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}
