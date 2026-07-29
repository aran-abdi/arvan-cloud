export const SIDEBAR = {
  width: 240,
  padding: 16,
  borderWidth: 1,
  itemWidth: 216,
  itemMinHeight: 40,
  itemPadding: 8,
} as const;

export const SIDEBAR_VAR = {
  width: "var(--sidebar-width)",
  padding: "var(--sidebar-padding)",
  borderWidth: "var(--sidebar-border-width)",
  itemWidth: "var(--sidebar-item-width)",
  itemMinHeight: "var(--sidebar-item-min-height)",
  itemPadding: "var(--sidebar-item-padding)",
} as const;
