import { RADIUS } from "./radius";

export type ToastType = "Success" | "Error";

export const TOAST = {
  minHeightPx: 44,
  paddingY: 12,
  paddingX: 16,
  titleToDescriptionGap: 4,
  minWidthSuccessPx: 121,
  minWidthErrorPx: 129,
  autoDismissMs: 3000,
  radiusLg: RADIUS[8],
  /** Distance from viewport top. Keep in sync with ToastViewport CSS. */
  offsetTopMobilePx: 16,
  offsetTopTabletPx: 40,
  offsetTopDesktopPx: 56,
  offsetXMobilePx: 16,
  maxWidthPx: 560,
} as const;

export const TOAST_VAR = {
  minHeight: "var(--toast-min-height)",
  paddingY: "var(--toast-padding-y)",
  paddingX: "var(--toast-padding-x)",
  titleToDescriptionGap: "var(--toast-title-description-gap)",
  minWidthSuccess: "var(--toast-min-width-success)",
  minWidthError: "var(--toast-min-width-error)",
  radius: "var(--toast-radius)",
  shadow: "var(--toast-shadow)",
} as const;

