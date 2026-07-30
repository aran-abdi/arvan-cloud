"use client";

import { useState } from "react";
import { Toast, Button, Checkbox } from "@/components";
import type { ToastType } from "@/constants";
import { DocApiTable } from "@/docs/DocApiTable";
import styles from "@/docs/docs.module.css";

export function ToastDocs() {
  const [type, setType] = useState<ToastType>("Success");
  const [action, setAction] = useState(true);
  const [key, setKey] = useState(0);

  return (
    <>
      <h2 className={styles.heading}>Playground</h2>
      <div className={styles.playground}>
        <div className={styles.playgroundPreview}>
          <Toast
            key={key}
            type={type}
            title="Title"
            description="Description"
            action={action}
            onDismiss={() => undefined}
          />
        </div>
        <div className={styles.controls}>
          <div className={styles.control}>
            <span className={styles.controlLabel}>Type</span>
            <select
              className={styles.select}
              value={type}
              onChange={(e) => setType(e.target.value as ToastType)}
            >
              <option value="Success">Success</option>
              <option value="Error">Error</option>
            </select>
          </div>
          <Checkbox
            value={action ? "On" : "Off"}
            onValueChange={(v) => setAction(v === "On")}
            label="action (click to dismiss)"
          />
          <Button
            variant="Secondary"
            layout="Text"
            onClick={() => setKey((k) => k + 1)}
          >
            Reset toast
          </Button>
        </div>
      </div>

      <h2 className={styles.heading}>Examples</h2>
      <div className={styles.exampleRow}>
        <Toast type="Success" title="Saved" description="Changes applied" action />
        <Toast type="Error" title="Failed" description="Try again" action />
      </div>

      <h2 className={styles.heading}>API</h2>
      <DocApiTable
        rows={[
          { name: "type", type: '"Success" | "Error"', description: "Visual variant." },
          { name: "title", type: "ReactNode", description: "Primary toast title." },
          { name: "description", type: "ReactNode", description: "Secondary description text." },
          { name: "action", type: "boolean", defaultValue: "false", description: "true = dismiss on click; false = auto-dismiss in 3s." },
          { name: "onDismiss", type: "() => void", description: "Called when the toast is dismissed." },
        ]}
      />
    </>
  );
}
