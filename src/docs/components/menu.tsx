"use client";

import { useState } from "react";
import {
  DropDownMenu,
  DropDownElement,
  DropDownContent,
  Button,
  Checkbox,
} from "@/components";
import { DocApiTable } from "@/docs/DocApiTable";
import { DocCodeSample } from "@/docs/DocCodeSample";
import styles from "@/docs/docs.module.css";

const USAGE = `import { useState } from "react";
import {
  Button,
  DropDownMenu,
  DropDownElement,
  DropDownContent,
} from "@/components";

export function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="Secondary"
        layout="Text"
        onClick={() => setOpen((value) => !value)}
      >
        Options
      </Button>
      <DropDownMenu open={open}>
        <DropDownElement onClick={() => setOpen(false)}>Edit</DropDownElement>
        <DropDownElement onClick={() => setOpen(false)}>Delete</DropDownElement>
        <DropDownContent label="loading..." />
      </DropDownMenu>
    </>
  );
}`;

export function MenuDocs() {
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(true);

  return (
    <>
      <h2 className={styles.heading}>Playground</h2>
      <div className={styles.playground}>
        <div className={styles.playgroundPreview} style={{ alignItems: "flex-start" }}>
          <DropDownMenu open={open}>
            <DropDownElement onClick={() => undefined}>Menu Item</DropDownElement>
            <DropDownElement onClick={() => undefined}>Menu Item</DropDownElement>
            <DropDownElement disabled>Menu Item</DropDownElement>
            {loading ? <DropDownContent /> : null}
          </DropDownMenu>
        </div>
        <div className={styles.controls}>
          <Checkbox
            value={open ? "On" : "Off"}
            onValueChange={(v) => setOpen(v === "On")}
            label="open"
          />
          <Checkbox
            value={loading ? "On" : "Off"}
            onValueChange={(v) => setLoading(v === "On")}
            label="loading content"
          />
          <Button variant="Secondary" layout="Text" onClick={() => setOpen((o) => !o)}>
            Toggle menu
          </Button>
        </div>
      </div>

      <h2 className={styles.heading}>Examples</h2>
      <div className={styles.exampleRow}>
        <DropDownElement>Default</DropDownElement>
        <DropDownElement disabled>Disabled</DropDownElement>
        <DropDownContent label="loading..." />
      </div>

      <h2 className={styles.heading}>Usage</h2>
      <DocCodeSample code={USAGE} />

      <h2 className={styles.heading}>API</h2>
      <DocApiTable
        rows={[
          { name: "DropDownMenu.open", type: "boolean", defaultValue: "true", description: "Shows or hides the panel." },
          { name: "DropDownMenu.children", type: "ReactNode", description: "Menu items and optional loading row." },
          { name: "DropDownElement.children", type: "ReactNode", description: "Item label." },
          { name: "DropDownElement.icon", type: "ReactNode", description: "Optional leading icon." },
          { name: "DropDownElement.disabled", type: "boolean", description: "Disabled item styling." },
          { name: "DropDownContent.label", type: "string", defaultValue: '"loading..."', description: "Loading row text." },
        ]}
      />
    </>
  );
}
