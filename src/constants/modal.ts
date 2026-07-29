export type ModalSize = 456 | 600 | 800;

export const MODAL = {
  overlayBg: "#00000052",
  borderRadius: 8,

  headerHeight: 72,
  headerPaddingY: 16,
  headerPaddingX: 24,

  bodyMaxHeight: 456,
  bodyPadding: 24,

  footerHeight: 72,
  footerPaddingY: 16,
  footerPaddingX: 24,

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

