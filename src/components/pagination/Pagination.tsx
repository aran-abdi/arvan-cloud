import type { CSSProperties, HTMLAttributes } from "react";
import { useMemo } from "react";
import {
  ChevronLeftDefaultIcon,
  ChevronLeftDisabledIcon,
  ChevronRightDefaultIcon,
  ChevronRightDisabledIcon,
  DotsIcon,
} from "@/components/icons";
import {
  FONT_SIZE,
  FONT_WEIGHT,
  LETTER_SPACING,
  LINE_HEIGHT,
} from "@/constants";
import { cn } from "@/lib/cn";
import styles from "./Pagination.module.css";

export type PaginationProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  disabled?: boolean;
};

type PageToken = number | "ellipsis-start" | "ellipsis-end";

function buildPageTokens(current: number, total: number): PageToken[] {
  if (total <= 1) return [1];

  const pages: PageToken[] = [];

  const showPage = (p: number) => {
    if (!pages.includes(p)) pages.push(p);
  };

  showPage(1);
  if (current - 1 > 1) showPage(current - 1);
  showPage(current);
  if (current + 1 < total) showPage(current + 1);
  showPage(total);

  // Sort numeric pages in ascending order
  const sorted = (pages.filter((p) => typeof p === "number") as number[]).sort(
    (a, b) => a - b
  );

  // Insert ellipsis where gaps of ≥ 2 exist
  const tokens: PageToken[] = [];
  for (let i = 0; i < sorted.length; i++) {
    tokens.push(sorted[i]);
    if (i < sorted.length - 1 && sorted[i + 1] - sorted[i] >= 2) {
      tokens.push(sorted[i] === 1 ? "ellipsis-start" : "ellipsis-end");
    }
  }
  return tokens;
}

export function Pagination({
  totalPages,
  currentPage,
  onPageChange,
  disabled = false,
  className,
  style,
  ...divProps
}: PaginationProps) {
  const tokens = useMemo(
    () => buildPageTokens(currentPage, totalPages),
    [currentPage, totalPages]
  );

  const typographyStyle: CSSProperties = {
    fontSize: FONT_SIZE[14],
    fontWeight: FONT_WEIGHT.medium450,
    lineHeight: `${LINE_HEIGHT[20]}px`,
    letterSpacing: LETTER_SPACING.tight2,
    textAlign: "center",
  };

  const isPrevDisabled = disabled || currentPage <= 1;
  const isNextDisabled = disabled || currentPage >= totalPages;

  return (
    <div
      className={cn(styles.root, className)}
      style={style}
      {...divProps}
    >
      {/* Prev chevron */}
      <button
        type="button"
        className={styles.chevron}
        disabled={isPrevDisabled}
        aria-label="Previous page"
        onClick={() => !isPrevDisabled && onPageChange(currentPage - 1)}
      >
        {isPrevDisabled ? <ChevronLeftDisabledIcon /> : <ChevronLeftDefaultIcon />}
      </button>

      {/* Page tokens */}
      {tokens.map((token, idx) => {
        if (token === "ellipsis-start" || token === "ellipsis-end") {
          return (
            <span
              key={token}
              className={styles.ellipsis}
              data-disabled={disabled ? "true" : undefined}
              aria-hidden="true"
            >
              <DotsIcon />
            </span>
          );
        }

        const page = token as number;
        const isSelected = page === currentPage;

        return (
          <button
            key={`page-${page}-${idx}`}
            type="button"
            className={styles.item}
            disabled={disabled}
            data-selected={isSelected ? "true" : "false"}
            aria-label={`Page ${page}`}
            aria-current={isSelected ? "page" : undefined}
            style={typographyStyle}
            onClick={() => !disabled && onPageChange(page)}
          >
            {page}
          </button>
        );
      })}

      {/* Next chevron */}
      <button
        type="button"
        className={styles.chevron}
        disabled={isNextDisabled}
        aria-label="Next page"
        onClick={() => !isNextDisabled && onPageChange(currentPage + 1)}
      >
        {isNextDisabled ? <ChevronRightDisabledIcon /> : <ChevronRightDefaultIcon />}
      </button>
    </div>
  );
}
