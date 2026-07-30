"use client";

import { useState } from "react";
import { Sidebar, SidebarItem } from "@/components";
import { DocApiTable } from "@/docs/DocApiTable";
import styles from "@/docs/docs.module.css";

const ITEMS = ["Overview", "Projects", "Settings"] as const;

export function SidebarDocs() {
  const [selected, setSelected] = useState<(typeof ITEMS)[number]>("Overview");

  return (
    <>
      <h2 className={styles.heading}>Playground</h2>
      <div className={styles.playground}>
        <div className={styles.playgroundPreview} style={{ minHeight: 200 }}>
          <Sidebar fixed={false} style={{ height: 200 }}>
            {ITEMS.map((item) => (
              <SidebarItem
                key={item}
                selected={selected === item}
                onClick={() => setSelected(item)}
              >
                {item}
              </SidebarItem>
            ))}
          </Sidebar>
          <span>Selected: {selected}</span>
        </div>
      </div>

      <h2 className={styles.heading}>API</h2>
      <DocApiTable
        rows={[
          { name: "Sidebar.children", type: "ReactNode", description: "SidebarItem children." },
          { name: "Sidebar.fixed", type: "boolean", defaultValue: "true", description: "Pins the sidebar below the header." },
          { name: "SidebarItem.children", type: "ReactNode", description: "Item label." },
          { name: "SidebarItem.selected", type: "boolean", defaultValue: "false", description: "Selected styling." },
          { name: "SidebarItem.disabled", type: "boolean", description: "Disables the item." },
        ]}
      />
    </>
  );
}
