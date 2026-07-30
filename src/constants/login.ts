/** Layout tokens for the login auth card. */
export const LOGIN = {
  pageBg: "#F0F0F0",
  cardBg: "#FFFFFF",
  cardWidth: 480,
  cardRadius: 8,
  cardShadow: "none",
  headerPaddingX: 24,
  headerPaddingY: 38,
  bodyPadding: 24,
  fieldsGap: 12,
  fieldsToSubmitGap: 24,
  submitToFooterGap: 12,
  footerGap: 4,
} as const;

/** Shared layout breakpoints (px). Keep in sync with CSS media queries. */
export const BREAKPOINT = {
  tablet: 768,
  desktop: 1024,
} as const;
