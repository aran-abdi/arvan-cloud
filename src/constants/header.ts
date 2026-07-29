export const HEADER = {
  height: 64,
  paddingY: 12,
  paddingX: 24,
  borderWidth: 1,
} as const;

export const HEADER_VAR = {
  height: "var(--header-height)",
  paddingY: "var(--header-padding-y)",
  paddingX: "var(--header-padding-x)",
  borderWidth: "var(--header-border-width)",
} as const;
