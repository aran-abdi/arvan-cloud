export const CHECKBOX = {
  size: 16,
  radius: 4,
  paddingOn: 2,
  /** Off has no inner content; padding must stay 0 so the 16×16 box + 2px border fit. */
  paddingOff: 0,
  borderWidth: 2,
  labelGap: 4,
} as const;

export const CHECKBOX_ICON = {
  check: {
    width: 10,
    height: 8,
  },
  indeterminate: {
    width: 8,
    height: 1,
  },
} as const;

export type CheckboxValue = "On" | "Off" | "Indeterminate";

export const CHECKBOX_VAR = {
  size: "var(--checkbox-size)",
  radius: "var(--checkbox-radius)",
  paddingOn: "var(--checkbox-padding-on)",
  paddingOff: "var(--checkbox-padding-off)",
  borderWidth: "var(--checkbox-border-width)",
  labelGap: "var(--checkbox-label-gap)",
} as const;

