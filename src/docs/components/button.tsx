"use client";

import { useState } from "react";
import { Button, Checkbox } from "@/components";
import { CircleCheckIcon } from "@/components/icons";
import type { ButtonLayout, ButtonVariant } from "@/constants";
import { DocApiTable } from "@/docs/DocApiTable";
import styles from "@/docs/docs.module.css";

export function ButtonDocs() {
  const [variant, setVariant] = useState<ButtonVariant>("Primary");
  const [layout, setLayout] = useState<ButtonLayout>("Text");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <h2 className={styles.heading}>Playground</h2>
      <div className={styles.playground}>
        <div className={styles.playgroundPreview}>
          <Button
            variant={variant}
            layout={layout}
            loading={loading}
            disabled={disabled}
            icon={<CircleCheckIcon />}
          >
            button
          </Button>
        </div>
        <div className={styles.controls}>
          <div className={styles.control}>
            <span className={styles.controlLabel}>Variant</span>
            <select
              className={styles.select}
              value={variant}
              onChange={(e) => setVariant(e.target.value as ButtonVariant)}
            >
              <option value="Primary">Primary</option>
              <option value="Secondary">Secondary</option>
              <option value="PrimaryDanger">PrimaryDanger</option>
            </select>
          </div>
          <div className={styles.control}>
            <span className={styles.controlLabel}>Layout</span>
            <select
              className={styles.select}
              value={layout}
              onChange={(e) => setLayout(e.target.value as ButtonLayout)}
            >
              <option value="Text">Text</option>
              <option value="Icon">Icon</option>
            </select>
          </div>
          <Checkbox
            value={loading ? "On" : "Off"}
            onValueChange={(v) => setLoading(v === "On")}
            label="loading"
          />
          <Checkbox
            value={disabled ? "On" : "Off"}
            onValueChange={(v) => setDisabled(v === "On")}
            label="disabled"
          />
        </div>
      </div>

      <h2 className={styles.heading}>Examples</h2>
      <div className={styles.exampleRow}>
        <Button variant="Primary" layout="Text">Primary</Button>
        <Button variant="Secondary" layout="Text">Secondary</Button>
        <Button variant="PrimaryDanger" layout="Text">Danger</Button>
        <Button variant="Primary" layout="Icon" icon={<CircleCheckIcon />} />
        <Button variant="Primary" layout="Text" loading>Loading</Button>
      </div>

      <h2 className={styles.heading}>API</h2>
      <DocApiTable
        rows={[
          { name: "variant", type: '"Primary" | "Secondary" | "PrimaryDanger"', description: "Visual style." },
          { name: "layout", type: '"Text" | "Icon"', description: "Full-width text or square icon button." },
          { name: "children", type: "ReactNode", description: "Label for Text layout." },
          { name: "icon", type: "ReactNode", description: "Icon for Icon layout." },
          { name: "loading", type: "boolean", defaultValue: "false", description: "Shows spinner; keeps dimensions." },
          { name: "disabled", type: "boolean", description: "Disabled styling." },
        ]}
      />
    </>
  );
}
