"use client";

import { useState } from "react";
import { Checkbox } from "@/components";
import type { CheckboxValue } from "@/constants";
import { DocApiTable } from "@/docs/DocApiTable";
import styles from "@/docs/docs.module.css";

export function CheckboxDocs() {
  const [value, setValue] = useState<CheckboxValue>("Off");
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <h2 className={styles.heading}>Playground</h2>
      <div className={styles.playground}>
        <div className={styles.playgroundPreview}>
          <Checkbox
            value={value}
            disabled={disabled}
            onValueChange={setValue}
            label="value: {value}"
          />
        </div>
        <div className={styles.controls}>
          <div className={styles.control}>
            <span className={styles.controlLabel}>Value</span>
            <select
              className={styles.select}
              value={value}
              onChange={(e) => setValue(e.target.value as CheckboxValue)}
            >
              <option value="Off">Off</option>
              <option value="On">On</option>
              <option value="Indeterminate">Indeterminate</option>
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
      <div className={styles.exampleRow}>
        <Checkbox value="Off" aria-label="Off" />
        <Checkbox value="On" aria-label="On" />
        <Checkbox value="Indeterminate" aria-label="Indeterminate" />
        <Checkbox value="On" disabled aria-label="On disabled" />
        <Checkbox value="Off" disabled aria-label="Off disabled" />
      </div>

      <h2 className={styles.heading}>API</h2>
      <DocApiTable
        rows={[
          { name: "value", type: '"On" | "Off" | "Indeterminate"', description: "Current checkbox value." },
          { name: "disabled", type: "boolean", defaultValue: "false", description: "Disables interaction." },
          { name: "onValueChange", type: "(next: CheckboxValue) => void", description: "Called when the value toggles." },
          { name: "label", type: "ReactNode", description: "Optional label, aligned with 4px gap." },
        ]}
      />
    </>
  );
}
