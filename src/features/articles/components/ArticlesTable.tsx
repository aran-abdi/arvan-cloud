"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition, type ReactNode } from "react";
import {
  DropDownElement,
  Pagination,
  Section,
  SectionBody,
  SectionHeader,
  Table,
  TableActions,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableRowNumber,
  useToast,
} from "@/components";
import { cn } from "@/lib/cn";
import { deleteArticleAction } from "../actions/deleteArticle";
import { getArticleEditPath, getArticlesPath } from "../lib/paths";
import type { ArticleRow, ArticlesMessages } from "../types";
import { DeleteArticleModal } from "./DeleteArticleModal";
import styles from "./ArticlesTable.module.css";

export type ArticlesTableProps = {
  messages: ArticlesMessages;
  rows: ArticleRow[];
  page: number;
  pageSize: number;
  totalPages: number;
};

function ArticleRowActions({
  rowId,
  messages,
  pending,
  open,
  onOpenChange,
  onEdit,
  onDelete,
}: {
  rowId: number;
  messages: ArticlesMessages;
  pending: boolean;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}) {
  return (
    <TableActions
      label={messages.actions.menuLabel}
      open={open}
      onOpenChange={onOpenChange}
    >
      <DropDownElement onClick={() => onEdit(rowId)} disabled={pending}>
        {messages.actions.edit}
      </DropDownElement>
      <DropDownElement onClick={() => onDelete(rowId)} disabled={pending}>
        {messages.actions.delete}
      </DropDownElement>
    </TableActions>
  );
}

function MetaRow({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className={styles.cardMetaRow}>
      <span className={styles.cardMetaLabel}>{label}</span>
      <span className={styles.cardMetaValue}>{value}</span>
    </div>
  );
}

export function ArticlesTable({
  messages,
  rows,
  page,
  pageSize,
  totalPages,
}: ArticlesTableProps) {
  const router = useRouter();
  const { showToast } = useToast();
  // Table and card views both mount row actions; keep open keys distinct so a
  // display:none instance cannot portal a ghost menu or steal outside clicks.
  const [openMenuKey, setOpenMenuKey] = useState<string | null>(null);
  const [deleteTargetId, setDeleteTargetId] = useState<number | null>(null);
  const [pending, startTransition] = useTransition();

  const handlePageChange = (nextPage: number) => {
    router.push(getArticlesPath(nextPage));
  };

  const openDeleteModal = (id: number) => {
    setOpenMenuKey(null);
    setDeleteTargetId(id);
  };

  const closeDeleteModal = () => {
    if (pending) return;
    setDeleteTargetId(null);
  };

  const handleEdit = (id: number) => {
    setOpenMenuKey(null);
    router.push(getArticleEditPath(id));
  };

  const confirmDelete = () => {
    if (deleteTargetId === null) return;

    startTransition(async () => {
      const result = await deleteArticleAction(deleteTargetId);
      setDeleteTargetId(null);

      if (result.ok) {
        showToast({
          type: "Success",
          title: result.title,
        });
        router.refresh();
        return;
      }

      showToast({
        type: "Error",
        title: result.title,
        description: result.description,
      });
    });
  };

  return (
    <>
      <Section className={styles.section}>
        <SectionHeader className={styles.header} title={messages.title} />
        <SectionBody className={styles.body}>
          <div className={styles.content}>
            {rows.length === 0 ? (
              <p className={styles.empty}>{messages.empty}</p>
            ) : (
              <>
                <div className={styles.tableView}>
                  <Table className={styles.table}>
                    <TableHeader>
                      <TableRow>
                        <TableHead align="index" className={styles.colIndex}>
                          {messages.columns.index}
                        </TableHead>
                        <TableHead className={styles.colTitle}>
                          {messages.columns.title}
                        </TableHead>
                        <TableHead className={styles.colAuthor}>
                          {messages.columns.author}
                        </TableHead>
                        <TableHead className={styles.colTags}>
                          {messages.columns.tags}
                        </TableHead>
                        <TableHead className={styles.colExcerpt}>
                          {messages.columns.excerpt}
                        </TableHead>
                        <TableHead className={styles.colCreated}>
                          {messages.columns.created}
                        </TableHead>
                        <TableHead
                          className={styles.colActions}
                          aria-label={messages.columns.actions}
                        />
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {rows.map((row, index) => (
                        <TableRow key={row.id}>
                          <TableCell
                            align="index"
                            className={styles.colIndex}
                          >
                            <TableRowNumber>
                              {(page - 1) * pageSize + index + 1}
                            </TableRowNumber>
                          </TableCell>
                          <TableCell
                            strong
                            className={cn(styles.colTitle, styles.cellClamp)}
                          >
                            <span
                              className={styles.truncate}
                              title={row.title}
                            >
                              {row.title}
                            </span>
                          </TableCell>
                          <TableCell
                            className={cn(styles.colAuthor, styles.cellClamp)}
                          >
                            <span
                              className={styles.truncate}
                              title={row.author}
                            >
                              {row.author}
                            </span>
                          </TableCell>
                          <TableCell
                            className={cn(styles.colTags, styles.cellClamp)}
                          >
                            <span
                              className={styles.truncate}
                              title={row.tags}
                            >
                              {row.tags}
                            </span>
                          </TableCell>
                          <TableCell
                            className={cn(styles.colExcerpt, styles.cellClamp)}
                          >
                            <span
                              className={styles.truncate}
                              title={row.excerpt}
                            >
                              {row.excerpt}
                            </span>
                          </TableCell>
                          <TableCell
                            className={cn(styles.colCreated, styles.cellClamp)}
                          >
                            <span
                              className={styles.truncate}
                              title={row.created}
                            >
                              {row.created}
                            </span>
                          </TableCell>
                          <TableCell className={styles.colActions}>
                            <ArticleRowActions
                              rowId={row.id}
                              messages={messages}
                              pending={pending}
                              open={openMenuKey === `table-${row.id}`}
                              onOpenChange={(next) =>
                                setOpenMenuKey(next ? `table-${row.id}` : null)
                              }
                              onEdit={handleEdit}
                              onDelete={openDeleteModal}
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <ul className={styles.cardList}>
                  {rows.map((row, index) => (
                    <li key={row.id} className={styles.card}>
                      <div className={styles.cardTop}>
                        <span className={styles.cardIndex}>
                          {(page - 1) * pageSize + index + 1}
                        </span>
                        <h3 className={styles.cardTitle} title={row.title}>
                          {row.title}
                        </h3>
                        <div className={styles.cardActions}>
                          <ArticleRowActions
                            rowId={row.id}
                            messages={messages}
                            pending={pending}
                            open={openMenuKey === `card-${row.id}`}
                            onOpenChange={(next) =>
                              setOpenMenuKey(next ? `card-${row.id}` : null)
                            }
                            onEdit={handleEdit}
                            onDelete={openDeleteModal}
                          />
                        </div>
                      </div>
                      <div className={styles.cardMeta}>
                        <MetaRow
                          label={messages.columns.author}
                          value={row.author}
                        />
                        <MetaRow
                          label={messages.columns.tags}
                          value={row.tags}
                        />
                        <MetaRow
                          label={messages.columns.created}
                          value={row.created}
                        />
                      </div>
                      {row.excerpt ? (
                        <p className={styles.cardExcerpt} title={row.excerpt}>
                          {row.excerpt}
                        </p>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {totalPages > 1 ? (
              <div className={styles.pagination}>
                <Pagination
                  totalPages={totalPages}
                  currentPage={page}
                  onPageChange={handlePageChange}
                  disabled={pending}
                />
              </div>
            ) : null}
          </div>
        </SectionBody>
      </Section>

      <DeleteArticleModal
        open={deleteTargetId !== null}
        title={messages.delete.modalTitle}
        message={messages.delete.modalMessage}
        confirmLabel={messages.delete.confirm}
        cancelLabel={messages.delete.cancel}
        pending={pending}
        onConfirm={confirmDelete}
        onCancel={closeDeleteModal}
      />
    </>
  );
}
