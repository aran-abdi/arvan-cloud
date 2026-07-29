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
} as const;

