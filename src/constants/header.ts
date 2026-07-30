export const HEADER = {
  height: 64,
  paddingY: 12,
  paddingX: 24,
  borderWidth: 1,
  gap: 16,
} as const;

export const HEADER_VAR = {
  height: "var(--header-height)",
  paddingY: "var(--header-padding-y)",
  paddingX: "var(--header-padding-x)",
  borderWidth: "var(--header-border-width)",
  gap: "var(--header-gap)",
} as const;
