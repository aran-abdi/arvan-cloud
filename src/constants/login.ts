export const LOGIN = {
  pageBg: "#F0F0F0",
  pagePaddingTablet: 24,
  pagePaddingDesktop: 40,
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

export const LOGIN_VAR = {
  pageBg: "var(--login-page-bg)",
  pagePaddingTablet: "var(--login-page-padding-tablet)",
  pagePaddingDesktop: "var(--login-page-padding-desktop)",
  cardBg: "var(--login-card-bg)",
  cardWidth: "var(--login-card-width)",
  cardRadius: "var(--login-card-radius)",
  cardShadow: "var(--login-card-shadow)",
  headerPaddingX: "var(--login-header-padding-x)",
  headerPaddingY: "var(--login-header-padding-y)",
  bodyPadding: "var(--login-body-padding)",
  fieldsGap: "var(--login-fields-gap)",
  fieldsToSubmitGap: "var(--login-fields-to-submit-gap)",
  submitToFooterGap: "var(--login-submit-to-footer-gap)",
  footerGap: "var(--login-footer-gap)",
} as const;

export const BREAKPOINT = {
  tablet: 768,
  desktop: 1024,
} as const;
