/** Spacing scale in px — single source for gaps and padding. */
export const SPACE = {
  8: 8,
  10: 10,
  12: 12,
  16: 16,
} as const;

export const SPACE_PX = {
  8: `${SPACE[8]}px`,
  10: `${SPACE[10]}px`,
  12: `${SPACE[12]}px`,
  16: `${SPACE[16]}px`,
} as const;

/** Semantic spacing for form fields. */
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

/** CSS custom-property references (defined in tokens.css). */
export const FIELD_SPACE_VAR = {
  labelGap: "var(--space-field-label-gap)",
  messageGap: "var(--space-field-message-gap)",
  inputPaddingX: "var(--space-input-padding-x)",
} as const;
