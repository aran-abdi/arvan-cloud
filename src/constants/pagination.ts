export const PAGINATION = {
  borderRadius: 8,
  borderWidth: 1,
  padding: 4,
  gap: 4,
  dotsWidth: 14,
  dotsHeight: 3.5,
} as const;

export const PAGINATION_VAR = {
  borderRadius: "var(--pagination-radius)",
  borderWidth: "var(--pagination-border-width)",
  padding: "var(--pagination-padding)",
  gap: "var(--pagination-gap)",
  dotsWidth: "var(--pagination-ellipsis-width)",
  dotsHeight: "var(--pagination-ellipsis-height)",
} as const;

export const PAGINATION_ITEM = {
  size: 32,
  borderRadius: 8,
  paddingX: 8,
} as const;

export const PAGINATION_ITEM_VAR = {
  size: "var(--pagination-item-size)",
  borderRadius: "var(--pagination-item-radius)",
  paddingX: "var(--pagination-item-padding-x)",
} as const;
