export const RADIUS = {
  8: 8,
} as const;

export const RADIUS_PX = {
  8: `${RADIUS[8]}px`,
} as const;

export const FIELD_RADIUS = {
  input: RADIUS[8],
} as const;

export const FIELD_RADIUS_VAR = {
  input: "var(--radius-input)",
} as const;
