export const INPUT_BORDER_WIDTH = 1;

export const INPUT_HEIGHT = {
  sm: 36,
  md: 40,
  lg: 48,
} as const;

export type InputSize = keyof typeof INPUT_HEIGHT;

export const INPUT_HEIGHT_PX = {
  sm: `${INPUT_HEIGHT.sm}px`,
  md: `${INPUT_HEIGHT.md}px`,
  lg: `${INPUT_HEIGHT.lg}px`,
} as const;

export const INPUT_HEIGHT_VAR = {
  sm: "var(--input-height-sm)",
  md: "var(--input-height-md)",
  lg: "var(--input-height-lg)",
} as const;

export const INPUT_BORDER_WIDTH_VAR = "var(--input-border-width)";

export const TEXTAREA = {
  minHeight: 120,
} as const;

export const TEXTAREA_VAR = {
  minHeight: "var(--textarea-min-height)",
} as const;
