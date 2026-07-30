export const RADIUS = {
  2: 2,
  4: 4,
  6: 6,
  8: 8,
  12: 12,
} as const;

export const RADIUS_PX = {
  2: `${RADIUS[2]}px`,
  4: `${RADIUS[4]}px`,
  6: `${RADIUS[6]}px`,
  8: `${RADIUS[8]}px`,
  12: `${RADIUS[12]}px`,
} as const;

export const RADIUS_VAR = {
  2: "var(--radius-2)",
  4: "var(--radius-4)",
  6: "var(--radius-6)",
  8: "var(--radius-input)",
  12: "var(--radius-button)",
} as const;

export const FIELD_RADIUS = {
  input: RADIUS[8],
  button: RADIUS[12],
} as const;

export const FIELD_RADIUS_VAR = {
  input: "var(--radius-input)",
  button: "var(--radius-button)",
} as const;
