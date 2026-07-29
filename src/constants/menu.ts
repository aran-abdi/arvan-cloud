export const MENU_ELEMENT = {
  width: 243,
  height: 36,
  borderRadius: 8,
  padding: 8,
  gap: 8,
} as const;

export const MENU_PANEL = {
  width: 287,
  borderRadius: 12,
  padding: 8,
  gap: 4,
} as const;

export const MENU_ELEMENT_VAR = {
  width: "var(--menu-element-width)",
  height: "var(--menu-item-height)",
  borderRadius: "var(--menu-item-border-radius)",
  padding: "var(--menu-item-padding)",
  gap: "var(--menu-item-gap)",
} as const;

export const MENU_PANEL_VAR = {
  width: "var(--menu-panel-width)",
  borderRadius: "var(--menu-panel-radius)",
  padding: "var(--menu-panel-padding)",
  gap: "var(--menu-panel-gap)",
  shadow: "var(--menu-panel-shadow)",
} as const;
