"use client";

import { useState } from "react";
import { Input, Checkbox } from "@/components";
import type { InputSize } from "@/constants";
import { DocApiTable } from "@/docs/DocApiTable";
import styles from "@/docs/docs.module.css";

export function InputDocs() {
  const [size, setSize] = useState<InputSize>("md");
  const [required, setRequired] = useState(false);
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [readOnly, setReadOnly] = useState(false);
  const [message, setMessage] = useState(true);
  const [value, setValue] = useState("");

  return (
    <>
      <h2 className={styles.heading}>Playground</h2>
      <div className={styles.playground}>
        <div className={styles.playgroundPreview}>
          <div style={{ width: 320 }}>
            <Input
              id="docs-input"
              label="Label"
              required={required}
              error={error}
              disabled={disabled}
              readOnly={readOnly}
              size={size}
              message={message ? (error ? "Error message" : "Helper message") : undefined}
              placeholder="Placeholder"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.controls}>
          <div className={styles.control}>
            <span className={styles.controlLabel}>Size</span>
            <select
              className={styles.select}
              value={size}
              onChange={(e) => setSize(e.target.value as InputSize)}
            >
              <option value="sm">sm</option>
              <option value="md">md</option>
              <option value="lg">lg</option>
            </select>
          </div>
          <Checkbox
            value={required ? "On" : "Off"}
            onValueChange={(v) => setRequired(v === "On")}
            label="required"
          />
          <Checkbox
            value={error ? "On" : "Off"}
            onValueChange={(v) => setError(v === "On")}
            label="error"
          />
          <Checkbox
            value={disabled ? "On" : "Off"}
            onValueChange={(v) => setDisabled(v === "On")}
            label="disabled"
          />
          <Checkbox
            value={readOnly ? "On" : "Off"}
            onValueChange={(v) => setReadOnly(v === "On")}
            label="readOnly"
          />
          <Checkbox
            value={message ? "On" : "Off"}
            onValueChange={(v) => setMessage(v === "On")}
            label="message"
          />
        </div>
      </div>

      <h2 className={styles.heading}>Examples</h2>
      <div className={styles.examples}>
        <div className={styles.exampleRow}>
          <div style={{ width: 280 }}>
            <Input id="ex-default" label="Default" placeholder="Placeholder" />
          </div>
          <div style={{ width: 280 }}>
            <Input id="ex-error" label="Error" error message="Invalid value" defaultValue="bad" />
          </div>
          <div style={{ width: 280 }}>
            <Input id="ex-disabled" label="Disabled" disabled placeholder="Disabled" />
          </div>
        </div>
      </div>

      <h2 className={styles.heading}>API</h2>
      <DocApiTable
        rows={[
          { name: "label", type: "ReactNode", description: "Field label text." },
          { name: "required", type: "boolean", defaultValue: "false", description: "Shows * after the label." },
          { name: "message", type: "ReactNode", description: "Helper or error text below the field." },
          { name: "error", type: "boolean", defaultValue: "false", description: "Error border and message styling." },
          { name: "size", type: '"sm" | "md" | "lg"', defaultValue: '"md"', description: "Field height: 36 / 40 / 48." },
          { name: "disabled", type: "boolean", description: "Disables the input." },
          { name: "readOnly", type: "boolean", description: "Read-only styling and behavior." },
        ]}
      />
    </>
  );
}
