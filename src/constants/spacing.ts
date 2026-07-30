export const SPACE = {
  4: 4,
  6: 6,
  8: 8,
  10: 10,
  12: 12,
  16: 16,
  18: 18,
  20: 20,
  24: 24,
  28: 28,
  32: 32,
  38: 38,
  40: 40,
} as const;

export const SPACE_PX = {
  4: `${SPACE[4]}px`,
  6: `${SPACE[6]}px`,
  8: `${SPACE[8]}px`,
  10: `${SPACE[10]}px`,
  12: `${SPACE[12]}px`,
  16: `${SPACE[16]}px`,
  18: `${SPACE[18]}px`,
  20: `${SPACE[20]}px`,
  24: `${SPACE[24]}px`,
  28: `${SPACE[28]}px`,
  32: `${SPACE[32]}px`,
  38: `${SPACE[38]}px`,
  40: `${SPACE[40]}px`,
} as const;

export const SPACE_VAR = {
  4: "var(--space-4)",
  6: "var(--space-6)",
  8: "var(--space-8)",
  10: "var(--space-10)",
  12: "var(--space-12)",
  16: "var(--space-16)",
  18: "var(--space-18)",
  20: "var(--space-20)",
  24: "var(--space-24)",
  28: "var(--space-28)",
  32: "var(--space-32)",
  38: "var(--space-38)",
  40: "var(--space-40)",
} as const;

export const FIELD_SPACE = {
  labelGap: SPACE[8],
  messageGap: SPACE[8],
  inputPaddingX: SPACE[12],
} as const;

export const FIELD_SPACE_PX = {
  labelGap: SPACE_PX[8],
  messageGap: SPACE_PX[8],
  inputPaddingX: SPACE_PX[12],
} as const;

export const FIELD_SPACE_VAR = {
  labelGap: "var(--space-field-label-gap)",
  messageGap: "var(--space-field-message-gap)",
  inputPaddingX: "var(--space-input-padding-x)",
} as const;
