"use client";

import { useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableRowNumber,
  TableActions,
  DropDownElement,
  Pagination,
  Section,
  SectionHeader,
  SectionBody,
} from "@/components";
import { DocApiTable } from "@/docs/DocApiTable";
import styles from "@/docs/docs.module.css";

const ROWS = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  title: "Article title",
  author: "@author_username",
  tags: "list of tags",
  excerpt: "First 20 words of article body",
  created: "<date>",
}));

export function TableDocs() {
  const [page, setPage] = useState(5);
  const [openRow, setOpenRow] = useState<number | null>(4);

  return (
    <>
      <h2 className={styles.heading}>Playground</h2>
      <div className={styles.playground}>
        <div className={styles.playgroundPreview} style={{ width: "100%" }}>
          <Section style={{ width: "100%", maxWidth: 960 }}>
            <SectionHeader title="All Posts" />
            <SectionBody style={{ minHeight: 0 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead align="index">#</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead>Author</TableHead>
                      <TableHead>Tags</TableHead>
                      <TableHead>Excerpt</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead aria-label="Actions" />
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {ROWS.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell align="index">
                          <TableRowNumber>{row.id}</TableRowNumber>
                        </TableCell>
                        <TableCell strong>{row.title}</TableCell>
                        <TableCell>{row.author}</TableCell>
                        <TableCell>{row.tags}</TableCell>
                        <TableCell>{row.excerpt}</TableCell>
                        <TableCell>{row.created}</TableCell>
                        <TableCell>
                          <TableActions
                            open={openRow === row.id}
                            onOpenChange={(next) =>
                              setOpenRow(next ? row.id : null)
                            }
                          >
                            <DropDownElement onClick={() => setOpenRow(null)}>
                              Edit
                            </DropDownElement>
                            <DropDownElement onClick={() => setOpenRow(null)}>
                              Delete
                            </DropDownElement>
                          </TableActions>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Pagination
                    totalPages={10}
                    currentPage={page}
                    onPageChange={setPage}
                  />
                </div>
              </div>
            </SectionBody>
          </Section>
        </div>
      </div>

      <h2 className={styles.heading}>API</h2>
      <DocApiTable
        rows={[
          { name: "Table.children", type: "ReactNode", description: "TableHeader + TableBody." },
          { name: "TableHead.align", type: '"start" | "center" | "index"', defaultValue: '"start"', description: "Use index for the # column." },
          { name: "TableCell.strong", type: "boolean", defaultValue: "false", description: "Semibold body text." },
          { name: "TableCell.align", type: '"start" | "center" | "index"', defaultValue: '"start"', description: "Use index for the row-number column." },
          { name: "TableRowNumber.children", type: "number | string", description: "Row index badge." },
          { name: "TableActions.children", type: "ReactNode", description: "Menu items (e.g. DropDownElement)." },
          { name: "TableActions.label", type: "string", defaultValue: '"Row actions"', description: "Trigger aria-label." },
          { name: "TableActions.open", type: "boolean", description: "Controlled menu visibility." },
          { name: "TableActions.onOpenChange", type: "(open: boolean) => void", description: "Called when menu opens or closes." },
        ]}
      />
    </>
  );
}
