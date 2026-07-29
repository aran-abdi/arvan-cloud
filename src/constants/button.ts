import { RADIUS } from "./radius";
import { SPACE } from "./spacing";

export type ButtonVariant = "Primary" | "Secondary" | "PrimaryDanger";
export type ButtonLayout = "Text" | "Icon";

export const BUTTON = {
  height: 40,
  paddingY: SPACE[10],
  paddingX: SPACE[16],
  borderRadius: RADIUS[12],
  borderWidth: 1,
} as const;

export const BUTTON_VAR = {
  height: "var(--button-height)",
  paddingY: "var(--button-padding-y)",
  paddingX: "var(--button-padding-x)",
  borderRadius: "var(--radius-button)",
  borderWidth: "var(--button-border-width)",
} as const;
