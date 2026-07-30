"use client";

import { useState, type ReactNode } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalStatusIcon,
  Button,
} from "@/components";
import type { ModalSize } from "@/constants/modal";
import { RADIUS, SPACE, TYPE } from "@/constants";
import type { ModalStatusVariant } from "@/components/modal";
import { DocApiTable } from "@/docs/DocApiTable";
import { DocCodeSample } from "@/docs/DocCodeSample";
import styles from "@/docs/docs.module.css";

const USAGE = `import { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalStatusIcon,
  Button,
} from "@/components";

export function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="Primary" layout="Text" onClick={() => setOpen(true)}>
        Open modal
      </Button>

      <Modal open={open} size={600} onClose={() => setOpen(false)}>
        <ModalHeader>
          <div>
            <div>title</div>
            <div>description</div>
          </div>
        </ModalHeader>
        <ModalBody>
          <ModalStatusIcon variant="success" />
          <p>dialogue message</p>
        </ModalBody>
        <ModalFooter>
          <Button variant="Secondary" layout="Text" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="Primary" layout="Text" onClick={() => setOpen(false)}>
            Confirm
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}`;

function TitleBlock() {
  return (
    <div>
      <div
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: TYPE.title.fontSize,
          fontWeight: TYPE.title.fontWeight,
          lineHeight: `${TYPE.title.lineHeight}px`,
          letterSpacing: TYPE.title.letterSpacing,
          color: "var(--neutral-fg1-default)",
        }}
      >
        title
      </div>
      <div
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: TYPE.sectionDescription.fontSize,
          fontWeight: TYPE.sectionDescription.fontWeight,
          lineHeight: `${TYPE.sectionDescription.lineHeight}px`,
          letterSpacing: TYPE.sectionDescription.letterSpacing,
          color: "var(--neutral-fg2-default)",
        }}
      >
        description
      </div>
    </div>
  );
}

function StatusMessage({ variant }: { variant: ModalStatusVariant }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: SPACE[16],
        textAlign: "center",
      }}
    >
      <ModalStatusIcon variant={variant} />
      <div
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: TYPE.input.fontSize,
          fontWeight: TYPE.input.fontWeight,
          lineHeight: `${TYPE.input.lineHeight}px`,
          letterSpacing: TYPE.input.letterSpacing,
          color: "var(--neutral-fg1-default)",
        }}
      >
        dialogue message
      </div>
    </div>
  );
}

function ReplaceMe() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 120,
        borderRadius: RADIUS[8],
        background: "var(--primary-bg1-default)",
        fontFamily: "var(--font-ui)",
        fontSize: TYPE.input.fontSize,
        fontWeight: TYPE.message.fontWeight,
        lineHeight: `${TYPE.input.lineHeight}px`,
        color: "var(--neutral-fg1-default)",
      }}
    >
      Replace me
    </div>
  );
}

function FooterConfirm({ onCancel }: { onCancel?: () => void }) {
  return (
    <ModalFooter>
      <Button variant="Secondary" layout="Text" onClick={onCancel}>
        Cancel
      </Button>
      <Button variant="Primary" layout="Text" onClick={onCancel}>
        Confirm
      </Button>
    </ModalFooter>
  );
}

function FooterDelete({ onCancel }: { onCancel?: () => void }) {
  return (
    <ModalFooter>
      <Button variant="PrimaryDanger" layout="Text" onClick={onCancel}>
        Delete
      </Button>
      <Button variant="Secondary" layout="Text" onClick={onCancel}>
        Cancel
      </Button>
    </ModalFooter>
  );
}

function ExampleStack({ children }: { children: ReactNode }) {
  return <div className={styles.examples}>{children}</div>;
}

export function ModalDocs() {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState<ModalSize>(600);
  const [variant, setVariant] = useState<ModalStatusVariant>("success");

  return (
    <>
      <h2 className={styles.heading}>Playground</h2>
      <div className={styles.playground}>
        <div className={styles.playgroundPreview}>
          <Button variant="Primary" layout="Text" onClick={() => setOpen(true)}>
            Open modal
          </Button>
        </div>
        <div className={styles.controls}>
          <div className={styles.control}>
            <span className={styles.controlLabel}>Size</span>
            <select
              className={styles.select}
              value={size}
              onChange={(e) => setSize(Number(e.target.value) as ModalSize)}
            >
              <option value={456}>456</option>
              <option value={600}>600</option>
              <option value={800}>800</option>
            </select>
          </div>
          <div className={styles.control}>
            <span className={styles.controlLabel}>Status icon</span>
            <select
              className={styles.select}
              value={variant}
              onChange={(e) => setVariant(e.target.value as ModalStatusVariant)}
            >
              <option value="success">success</option>
              <option value="failed">failed</option>
            </select>
          </div>
        </div>
      </div>

      <Modal open={open} size={size} onClose={() => setOpen(false)}>
        <ModalHeader>
          <TitleBlock />
        </ModalHeader>
        <ModalBody>
          <StatusMessage variant={variant} />
        </ModalBody>
        {variant === "failed" ? (
          <FooterDelete onCancel={() => setOpen(false)} />
        ) : (
          <FooterConfirm onCancel={() => setOpen(false)} />
        )}
      </Modal>

      <h2 className={styles.heading}>Examples</h2>
      <ExampleStack>
        {/* 1. Header + footer only */}
        <Modal inline size={600}>
          <ModalHeader>
            <TitleBlock />
          </ModalHeader>
          <FooterConfirm />
        </Modal>

        {/* 2. Status dialogue messages */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
          <StatusMessage variant="success" />
          <StatusMessage variant="failed" />
        </div>

        {/* 3. Content modals — sm → md → lg */}
        {([456, 600, 800] as const).map((s) => (
          <Modal key={s} inline size={s}>
            <ModalHeader>
              <TitleBlock />
            </ModalHeader>
            <ModalBody>
              <ReplaceMe />
            </ModalBody>
            <FooterConfirm />
          </Modal>
        ))}

        {/* 4. Status modals — success, then failed */}
        <Modal inline size={600}>
          <ModalHeader>
            <TitleBlock />
          </ModalHeader>
          <ModalBody>
            <StatusMessage variant="success" />
          </ModalBody>
          <FooterConfirm />
        </Modal>

        <Modal inline size={600}>
          <ModalHeader>
            <TitleBlock />
          </ModalHeader>
          <ModalBody>
            <StatusMessage variant="failed" />
          </ModalBody>
          <FooterDelete />
        </Modal>
      </ExampleStack>

      <h2 className={styles.heading}>Usage</h2>
      <DocCodeSample code={USAGE} />

      <h2 className={styles.heading}>API</h2>
      <DocApiTable
        rows={[
          { name: "open", type: "boolean", description: "Controls visibility (overlay mode)." },
          { name: "size", type: "456 | 600 | 800", description: "Panel width in px." },
          { name: "inline", type: "boolean", defaultValue: "false", description: "In-flow panel without overlay." },
          { name: "onClose", type: "() => void", description: "Called on backdrop click." },
          { name: "ModalStatusIcon.variant", type: '"success" | "failed"', description: "Status badge icon." },
        ]}
      />
    </>
  );
}
