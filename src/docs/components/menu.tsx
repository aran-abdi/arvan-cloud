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
import styles from "@/docs/docs.module.css";

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
