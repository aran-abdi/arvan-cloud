"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalStatusIcon,
} from "@/components";
import styles from "./DeleteArticleModal.module.css";

export type DeleteArticleModalProps = {
  open: boolean;
  title: string;
  message: string;
  confirmLabel: string;
  cancelLabel: string;
  pending?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

export function DeleteArticleModal({
  open,
  title,
  message,
  confirmLabel,
  cancelLabel,
  pending = false,
  onConfirm,
  onCancel,
}: DeleteArticleModalProps) {
  return (
    <Modal open={open} size={600} onClose={pending ? undefined : onCancel}>
      <ModalHeader>
        <h2 className={styles.title}>{title}</h2>
      </ModalHeader>
      <ModalBody>
        <div className={styles.status}>
          <ModalStatusIcon variant="failed" />
          <p className={styles.message}>{message}</p>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button
          type="button"
          variant="PrimaryDanger"
          layout="Text"
          loading={pending}
          disabled={pending}
          onClick={onConfirm}
        >
          {confirmLabel}
        </Button>
        <Button
          type="button"
          variant="Secondary"
          layout="Text"
          disabled={pending}
          onClick={onCancel}
        >
          {cancelLabel}
        </Button>
      </ModalFooter>
    </Modal>
  );
}
