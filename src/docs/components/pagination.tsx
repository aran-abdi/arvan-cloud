"use client";

import { useState } from "react";
import { Pagination, Checkbox } from "@/components";
import { DocApiTable } from "@/docs/DocApiTable";
import { DocCodeSample } from "@/docs/DocCodeSample";
import styles from "@/docs/docs.module.css";

const USAGE = `import { useState } from "react";
import { Pagination } from "@/components";

export function Example() {
  const [page, setPage] = useState(1);

  return (
    <Pagination
      totalPages={10}
      currentPage={page}
      onPageChange={setPage}
    />
  );
}`;

export function PaginationDocs() {
  const [page, setPage] = useState(5);
  const [total, setTotal] = useState(10);
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <h2 className={styles.heading}>Playground</h2>
      <div className={styles.playground}>
        <div className={styles.playgroundPreview}>
          <Pagination
            totalPages={total}
            currentPage={page}
            onPageChange={setPage}
            disabled={disabled}
          />
        </div>
        <div className={styles.controls}>
          <div className={styles.control}>
            <span className={styles.controlLabel}>Total pages</span>
            <select
              className={styles.select}
              value={total}
              onChange={(e) => {
                const next = Number(e.target.value);
                setTotal(next);
                setPage((p) => Math.min(p, next));
              }}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
          </div>
          <Checkbox
            value={disabled ? "On" : "Off"}
            onValueChange={(v) => setDisabled(v === "On")}
            label="disabled"
          />
        </div>
      </div>

      <h2 className={styles.heading}>Examples</h2>
      <div className={styles.examples}>
        <Pagination totalPages={10} currentPage={1} onPageChange={() => undefined} />
        <Pagination totalPages={10} currentPage={5} onPageChange={() => undefined} />
        <Pagination totalPages={10} currentPage={5} onPageChange={() => undefined} disabled />
      </div>

      <h2 className={styles.heading}>Usage</h2>
      <DocCodeSample code={USAGE} />

      <h2 className={styles.heading}>API</h2>
      <DocApiTable
        rows={[
          { name: "totalPages", type: "number", description: "Total number of pages." },
          { name: "currentPage", type: "number", description: "Active page (1-indexed)." },
          { name: "onPageChange", type: "(page: number) => void", description: "Called when page changes." },
          { name: "disabled", type: "boolean", defaultValue: "false", description: "Disables all controls." },
        ]}
      />
    </>
  );
}
