"use client";

import { useState } from "react";
import styles from "@/docs/docs.module.css";

type DocCodeSampleProps = {
  /** Optional label above the code block. */
  title?: string;
  code: string;
};

export function DocCodeSample({ title = "Sample", code }: DocCodeSampleProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className={styles.codeSample}>
      <div className={styles.codeSampleHeader}>
        <span className={styles.codeSampleTitle}>{title}</span>
        <button
          type="button"
          className={styles.codeSampleCopy}
          onClick={handleCopy}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className={styles.guideCode}>
        <code>{code}</code>
      </pre>
    </div>
  );
}
