export const RADIUS = {
  8: 8,
  12: 12,
} as const;

export const RADIUS_PX = {
  8: `${RADIUS[8]}px`,
  12: `${RADIUS[12]}px`,
} as const;

export const FIELD_RADIUS = {
  input: RADIUS[8],
  button: RADIUS[12],
} as const;

export const FIELD_RADIUS_VAR = {
  input: "var(--radius-input)",
  button: "var(--radius-button)",
} as const;
