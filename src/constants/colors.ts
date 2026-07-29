/** Semantic color tokens — values live in CSS; use these names in components. */
export const COLOR = {
  neutralFg1Default: "var(--neutral-fg1-default)",
  neutralFg1Hover: "var(--neutral-fg1-hover)",
  neutralFg1Disable: "var(--neutral-fg1-disable)",
  neutralFg2Default: "var(--neutral-fg2-default)",
  neutralBg1Default: "var(--neutral-bg1-default)",
  neutralSt1Default: "var(--neutral-st1-default)",
  neutralSt2Default: "var(--neutral-st2-default)",
  neutralSt2Hover: "var(--neutral-st2-hover)",
  neutralSt2Disable: "var(--neutral-st2-disable)",
  primaryFg1Default: "var(--primary-fg1-default)",
  errorFg1Default: "var(--error-fg1-default)",
} as const;

export type ColorToken = (typeof COLOR)[keyof typeof COLOR];
