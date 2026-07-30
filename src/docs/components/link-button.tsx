"use client";

import { useState } from "react";
import { LinkButton, Checkbox } from "@/components";
import { DocApiTable } from "@/docs/DocApiTable";
import { DocCodeSample } from "@/docs/DocCodeSample";
import styles from "@/docs/docs.module.css";

const USAGE = `import { LinkButton } from "@/components";

export function Example() {
  return (
    <p>
      Already have an account?{" "}
      <LinkButton onClick={() => undefined}>Log in</LinkButton>
    </p>
  );
}`;

export function LinkButtonDocs() {
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <h2 className={styles.heading}>Playground</h2>
      <div className={styles.playground}>
        <div className={styles.playgroundPreview}>
          <LinkButton disabled={disabled}>button</LinkButton>
        </div>
        <div className={styles.controls}>
          <Checkbox
            value={disabled ? "On" : "Off"}
            onValueChange={(v) => setDisabled(v === "On")}
            label="disabled"
          />
        </div>
      </div>

      <h2 className={styles.heading}>Examples</h2>
      <div className={styles.exampleRow}>
        <LinkButton>Default</LinkButton>
        <LinkButton disabled>Disabled</LinkButton>
      </div>

      <h2 className={styles.heading}>Usage</h2>
      <DocCodeSample code={USAGE} />

      <h2 className={styles.heading}>API</h2>
      <DocApiTable
        rows={[
          { name: "children", type: "ReactNode", description: "Link label." },
          { name: "disabled", type: "boolean", description: "Disabled color and no interaction." },
        ]}
      />
    </>
  );
}
