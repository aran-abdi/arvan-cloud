import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import arvanMark from "@/assets/brand/arvan-mark.svg";
import { cn } from "@/lib/cn";
import styles from "./Home.module.css";

export const metadata: Metadata = {
  title: "Arvan — Dashboard & UI",
  description:
    "Welcome to Arvan — sign in to the dashboard or browse the component docs.",
};

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={cn(styles.glow, styles.glowPrimary)} aria-hidden />
      <div className={cn(styles.glow, styles.glowSecondary)} aria-hidden />

      <main className={styles.main}>
        <div className={styles.brand}>
          <div className={styles.mark}>
            <Image
              src={arvanMark}
              alt=""
              width={48}
              height={48}
              className={styles.logo}
              priority
            />
          </div>
          <h1 className={styles.title}>Arvancloud Challenge</h1>
        </div>

        <p className={styles.copy}>
          Manage articles in the dashboard, or open the docs for contributor
          guides and the component library.
        </p>

        <div className={styles.actions}>
          <Link href="/login" className={cn(styles.cta, styles.ctaPrimary)}>
            Log in
          </Link>
          <Link href="/docs" className={cn(styles.cta, styles.ctaSecondary)}>
            Open docs
          </Link>
        </div>
      </main>

      <p className={styles.credit}>
        Created with{" "}
        <span className={styles.heart} aria-label="love">
          ♥
        </span>{" "}
        by{" "}
        <a
          href="https://github.com/aran-abdi"
          className={styles.creditLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Aran Abdi
        </a>
      </p>
    </div>
  );
}
