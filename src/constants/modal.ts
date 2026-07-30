export type ModalSize = 456 | 600 | 800;

export const MODAL = {
  overlayBg: "#00000052",
  borderRadius: 8,
  borderWidth: 1,

  headerHeight: 72,
  headerPaddingY: 16,
  headerPaddingX: 24,

  bodyMaxHeight: 456,
  bodyPadding: 24,

  footerHeight: 72,
  footerPaddingY: 16,
  footerPaddingX: 24,
  footerGap: 12,

  iconWrapperSize: 56,
  iconWrapperPadding: 16,
  iconWrapperRadius: 96,
  iconSize: 24,

  sizes: {
    sm: 456,
    md: 600,
    lg: 800,
  } as const,
} as const;

export const MODAL_VAR = {
  overlayBg: "var(--modal-overlay-bg)",
  borderRadius: "var(--modal-radius)",
  borderWidth: "var(--modal-border-width)",
  headerHeight: "var(--modal-header-height)",
  headerPaddingY: "var(--modal-header-padding-y)",
  headerPaddingX: "var(--modal-header-padding-x)",
  bodyMaxHeight: "var(--modal-body-max-height)",
  bodyPadding: "var(--modal-body-padding)",
  footerHeight: "var(--modal-footer-height)",
  footerPaddingY: "var(--modal-footer-padding-y)",
  footerPaddingX: "var(--modal-footer-padding-x)",
  footerGap: "var(--modal-footer-gap)",
  iconWrapperSize: "var(--modal-icon-wrapper-size)",
  iconWrapperPadding: "var(--modal-icon-wrapper-padding)",
  iconWrapperRadius: "var(--modal-icon-wrapper-radius)",
  iconSize: "var(--modal-icon-size)",
  viewportGutter: "var(--modal-viewport-gutter)",
  viewportGutterCompact: "var(--modal-viewport-gutter-compact)",
} as const;
