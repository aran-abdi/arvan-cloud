"use client";

import { useState } from "react";
import { Section, SectionHeader, SectionBody, Input } from "@/components";
import { DocApiTable } from "@/docs/DocApiTable";
import styles from "@/docs/docs.module.css";

function ReplaceMe() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        width: "100%",
        minHeight: 208,
        borderRadius: 8,
        background: "var(--primary-bg1-default)",
        fontFamily: "var(--font-ui)",
        fontSize: 14,
        fontWeight: 600,
        lineHeight: "20px",
        color: "var(--primary-fg1-default)",
      }}
    >
      Replace me
    </div>
  );
}

export function SectionDocs() {
  const [title, setTitle] = useState("Title");
  const [description, setDescription] = useState("Description");

  return (
    <>
      <h2 className={styles.heading}>Playground</h2>
      <div className={styles.playground}>
        <div className={styles.playgroundPreview}>
          <Section>
            <SectionHeader title={title} description={description} />
            <SectionBody>
              <ReplaceMe />
            </SectionBody>
          </Section>
        </div>
        <div className={styles.controls}>
          <div className={styles.control} style={{ minWidth: 220 }}>
            <Input
              id="section-title"
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={styles.control} style={{ minWidth: 220 }}>
            <Input
              id="section-desc"
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
      </div>

      <h2 className={styles.heading}>Examples</h2>
      <div className={styles.examples}>
        <Section>
          <SectionHeader title="Title" description="Description" />
          <SectionBody>
            <ReplaceMe />
          </SectionBody>
        </Section>
      </div>

      <h2 className={styles.heading}>API</h2>
      <DocApiTable
        rows={[
          { name: "Section.children", type: "ReactNode", description: "SectionHeader + SectionBody." },
          { name: "SectionHeader.title", type: "ReactNode", description: "Section title." },
          { name: "SectionHeader.description", type: "ReactNode", description: "Optional caption under the title." },
          { name: "SectionBody.children", type: "ReactNode", description: "Section body content." },
          { name: "HeaderContent.title", type: "ReactNode", description: "Standalone title + description block." },
        ]}
      />
    </>
  );
}
