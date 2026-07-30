"use client";

import { useState } from "react";
import { Header, Button, Input } from "@/components";
import { DocApiTable } from "@/docs/DocApiTable";
import styles from "@/docs/docs.module.css";

export function HeaderDocs() {
  const [user, setUser] = useState("Aran");

  return (
    <>
      <h2 className={styles.heading}>Playground</h2>
      <div className={styles.playground}>
        <div className={styles.playgroundPreview} style={{ padding: 0, width: "100%" }}>
          <Header fixed={false} className={styles.fullWidth}>
            <span>
              Welcome <strong>{user}</strong>
            </span>
            <span className={styles.centerLabel}>Arvancloud Challenge</span>
            <Button variant="Secondary" layout="Text">
              Log out
            </Button>
          </Header>
        </div>
        <div className={styles.controls}>
          <div className={styles.control} style={{ minWidth: 220 }}>
            <Input
              id="header-user"
              label="User name"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
        </div>
      </div>

      <h2 className={styles.heading}>API</h2>
      <DocApiTable
        rows={[
          { name: "children", type: "ReactNode", description: "Header content laid out with space-between." },
          { name: "fixed", type: "boolean", defaultValue: "true", description: "Pins the header to the top of the viewport." },
          { name: "className", type: "string", description: "Optional class on the header element." },
        ]}
      />
    </>
  );
}
