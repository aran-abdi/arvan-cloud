/** Semantic color tokens — values live in CSS; use these names in components. */
export const COLOR = {
  neutralFg1Default: "var(--neutral-fg1-default)",
  neutralFg1Hover: "var(--neutral-fg1-hover)",
  neutralFg1Disable: "var(--neutral-fg1-disable)",
  neutralFg2Default: "var(--neutral-fg2-default)",
  neutralBg1Default: "var(--neutral-bg1-default)",
  neutralBg1Hover: "var(--neutral-bg1-hover)",
  neutralBg1Press: "var(--neutral-bg1-press)",
  neutralSt1Default: "var(--neutral-st1-default)",
  neutralSt1Hover: "var(--neutral-st1-hover)",
  neutralSt1Press: "var(--neutral-st1-press)",
  neutralSt2Default: "var(--neutral-st2-default)",
  neutralSt2Hover: "var(--neutral-st2-hover)",
  neutralSt2Disable: "var(--neutral-st2-disable)",
  primaryFg1Default: "var(--primary-fg1-default)",
  primaryBg2Default: "var(--primary-bg2-default)",
  primaryBg2Hover: "var(--primary-bg2-hover)",
  primaryBg2Press: "var(--primary-bg2-press)",
  primaryBg2Disable: "var(--primary-bg2-disable)",
  errorFg1Default: "var(--error-fg1-default)",
  ptNeutralT1St2Disable: "var(--pt-neutral-t1-st2-disable)",
} as const;

export type ColorToken = (typeof COLOR)[keyof typeof COLOR];
