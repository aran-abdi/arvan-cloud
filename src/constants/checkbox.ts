export const CHECKBOX = {
  size: 16,
  radius: 4,
  paddingOn: 2,
  paddingOff: 10,
  borderWidth: 2,
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
} as const;

