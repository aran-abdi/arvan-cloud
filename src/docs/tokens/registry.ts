export type TokenKind = "color" | "size" | "type" | "shadow" | "motion" | "z" | "other";

export type TokenEntry = {
  name: string;
  value: string;
  description: string;
  kind: TokenKind;
};

export type TokenCategorySlug =
  | "colors"
  | "typography"
  | "spacing"
  | "radius"
  | "motion"
  | "elevation"
  | "input"
  | "checkbox"
  | "button"
  | "toast"
  | "pagination"
  | "menu"
  | "modal"
  | "section"
  | "sidebar"
  | "header"
  | "table";

export type TokenCategory = {
  slug: TokenCategorySlug;
  title: string;
  description: string;
  group: "Foundations" | "Components";
  tokens: readonly TokenEntry[];
};

export const TOKEN_NAV: readonly TokenCategory[] = [
  {
    slug: "colors",
    title: "Colors",
    description: "Neutral, primary, success, error, and product color roles.",
    group: "Foundations",
    tokens: [
      { name: "--neutral-fg1-default", value: "#333333", description: "Primary text / icons.", kind: "color" },
      { name: "--neutral-fg1-hover", value: "#191919", description: "Primary text on hover.", kind: "color" },
      { name: "--neutral-fg1-press", value: "#000000", description: "Primary text on press.", kind: "color" },
      { name: "--neutral-fg1-disable", value: "#cccccc", description: "Disabled text / icons.", kind: "color" },
      { name: "--neutral-fg2-default", value: "#7f7f7f", description: "Secondary / muted text.", kind: "color" },
      { name: "--neutral-fg3-default", value: "#ffffff", description: "Text on filled primary surfaces.", kind: "color" },
      { name: "--neutral-bg1-default", value: "#ffffff", description: "Default surface background.", kind: "color" },
      { name: "--neutral-bg1-hover", value: "#f0f0f0", description: "Surface hover background.", kind: "color" },
      { name: "--neutral-bg1-press", value: "#ebebeb", description: "Surface press background.", kind: "color" },
      { name: "--neutral-st1-default", value: "#7f7f7f", description: "Strong stroke.", kind: "color" },
      { name: "--neutral-st1-hover", value: "#666666", description: "Strong stroke hover.", kind: "color" },
      { name: "--neutral-st1-press", value: "#4c4c4c", description: "Strong stroke press.", kind: "color" },
      { name: "--neutral-st2-default", value: "#cccccc", description: "Default field / control stroke.", kind: "color" },
      { name: "--neutral-st2-hover", value: "#b3b3b3", description: "Default stroke hover.", kind: "color" },
      { name: "--neutral-st2-press", value: "#999999", description: "Default stroke press.", kind: "color" },
      { name: "--neutral-st2-disable", value: "#cccccc", description: "Disabled stroke.", kind: "color" },
      { name: "--neutral-st3-default", value: "#E6E6E6", description: "Subtle divider stroke.", kind: "color" },
      { name: "--primary-fg1-default", value: "#009595", description: "Primary brand text / links.", kind: "color" },
      { name: "--primary-fg1-hover", value: "#007070", description: "Primary text hover.", kind: "color" },
      { name: "--primary-bg1-default", value: "#E0F7F7", description: "Soft primary fill.", kind: "color" },
      { name: "--primary-bg1-hover", value: "#D6F4F4", description: "Soft primary hover.", kind: "color" },
      { name: "--primary-bg2-default", value: "#009595", description: "Solid primary fill.", kind: "color" },
      { name: "--primary-bg2-hover", value: "#007070", description: "Solid primary hover.", kind: "color" },
      { name: "--primary-bg2-press", value: "#004a4a", description: "Solid primary press.", kind: "color" },
      { name: "--primary-bg2-disable", value: "#99e3e3", description: "Solid primary disabled.", kind: "color" },
      { name: "--success-fg1-default", value: "#17B24A", description: "Success text / icons.", kind: "color" },
      { name: "--success-bg1-default", value: "#E3F6E9", description: "Success soft fill.", kind: "color" },
      { name: "--error-fg1-default", value: "#d61e20", description: "Error text / icons.", kind: "color" },
      { name: "--error-bg1-default", value: "#FAE4E4", description: "Error soft fill.", kind: "color" },
      { name: "--error-bg2-default", value: "#d61e20", description: "Solid error / danger fill.", kind: "color" },
      { name: "--error-bg2-hover", value: "#ab181a", description: "Solid error hover.", kind: "color" },
      { name: "--error-bg2-press", value: "#801213", description: "Solid error press.", kind: "color" },
      { name: "--error-bg2-disable", value: "#efa5a6", description: "Solid error disabled.", kind: "color" },
      { name: "--pt-info-t2-fg1-default", value: "#0172B4", description: "Info / link button default.", kind: "color" },
      { name: "--pt-info-t2-fg1-hover", value: "#015687", description: "Info / link button hover.", kind: "color" },
      { name: "--pt-info-t2-fg1-press", value: "#00395A", description: "Info / link button press.", kind: "color" },
      { name: "--pt-info-t2-fg1-disable", value: "#99D2F3", description: "Info / link button disabled.", kind: "color" },
      { name: "--pt-neutral-t1-bg1-default", value: "#FFFFFF", description: "Product neutral surface.", kind: "color" },
      { name: "--pt-neutral-t1-st5-default", value: "#E6E6E6", description: "Product subtle stroke.", kind: "color" },
      { name: "--pt-neutral-t1-fg2-default", value: "#4C4C4C", description: "Product secondary foreground.", kind: "color" },
      { name: "--pt-neutral-t1-st2-disable", value: "#cccccc", description: "Product disabled stroke.", kind: "color" },
    ],
  },
  {
    slug: "typography",
    title: "Typography",
    description: "Font sizes, weights, line heights, and letter spacing.",
    group: "Foundations",
    tokens: [
      { name: "--font-weight-regular", value: "400", description: "Regular body weight.", kind: "type" },
      { name: "--font-weight-medium", value: "450", description: "Medium weight (e.g. pagination).", kind: "type" },
      { name: "--font-weight-semibold", value: "600", description: "Semibold labels and titles.", kind: "type" },
      { name: "--type-letter-spacing-tight", value: "-0.02em", description: "Default tight tracking (-2%).", kind: "type" },
      { name: "--type-label-font-size", value: "14px", description: "Field label size.", kind: "type" },
      { name: "--type-label-line-height", value: "20px", description: "Field label line height.", kind: "type" },
      { name: "--type-label-font-weight", value: "var(--font-weight-regular)", description: "Field label weight.", kind: "type" },
      { name: "--type-label-letter-spacing", value: "var(--type-letter-spacing-tight)", description: "Field label tracking.", kind: "type" },
      { name: "--type-input-font-size", value: "14px", description: "Input value size.", kind: "type" },
      { name: "--type-input-line-height", value: "20px", description: "Input value line height.", kind: "type" },
      { name: "--type-input-font-weight", value: "var(--font-weight-regular)", description: "Input value weight.", kind: "type" },
      { name: "--type-input-letter-spacing", value: "var(--type-letter-spacing-tight)", description: "Input value tracking.", kind: "type" },
      { name: "--type-message-font-size", value: "12px", description: "Helper / error message size.", kind: "type" },
      { name: "--type-message-line-height", value: "16px", description: "Helper / error message line height.", kind: "type" },
      { name: "--type-message-font-weight", value: "var(--font-weight-semibold)", description: "Helper / error message weight.", kind: "type" },
      { name: "--type-message-letter-spacing", value: "var(--type-letter-spacing-tight)", description: "Helper / error message tracking.", kind: "type" },
    ],
  },
  {
    slug: "spacing",
    title: "Spacing",
    description: "Shared gaps and paddings used across fields.",
    group: "Foundations",
    tokens: [
      { name: "--space-field-label-gap", value: "8px", description: "Gap between label and control.", kind: "size" },
      { name: "--space-field-message-gap", value: "8px", description: "Gap between control and message.", kind: "size" },
      { name: "--space-input-padding-x", value: "12px", description: "Horizontal input padding.", kind: "size" },
    ],
  },
  {
    slug: "radius",
    title: "Radius",
    description: "Corner radii for fields and controls.",
    group: "Foundations",
    tokens: [
      { name: "--radius-input", value: "8px", description: "Input / field radius (md).", kind: "size" },
      { name: "--radius-button", value: "12px", description: "Button radius.", kind: "size" },
    ],
  },
  {
    slug: "motion",
    title: "Motion",
    description: "Durations and easing for transitions and spinners.",
    group: "Foundations",
    tokens: [
      { name: "--motion-duration-fast", value: "120ms", description: "Hover / press transitions.", kind: "motion" },
      { name: "--motion-easing-standard", value: "ease", description: "Default easing curve.", kind: "motion" },
      { name: "--motion-duration-spin", value: "0.8s", description: "Loading spinner rotation.", kind: "motion" },
    ],
  },
  {
    slug: "elevation",
    title: "Elevation",
    description: "Stacking order and shadows for overlays and panels.",
    group: "Foundations",
    tokens: [
      { name: "--z-sidebar", value: "30", description: "Fixed sidebar layer.", kind: "z" },
      { name: "--z-header", value: "40", description: "Fixed header layer.", kind: "z" },
      { name: "--z-modal", value: "50", description: "Modal overlay layer.", kind: "z" },
      { name: "--z-popover", value: "60", description: "Menus / popovers above modals.", kind: "z" },
      { name: "--toast-shadow", value: "0px 8px 40px 0px #2533433D", description: "Toast elevation shadow.", kind: "shadow" },
      { name: "--menu-panel-shadow", value: "0px 4px 16px 0px #00000029", description: "Dropdown panel shadow.", kind: "shadow" },
      { name: "--table-actions-menu-shadow", value: "0px 4px 16px rgba(0, 0, 0, 0.16)", description: "Table row actions menu shadow.", kind: "shadow" },
    ],
  },
  {
    slug: "input",
    title: "Input",
    description: "Heights and border for text fields.",
    group: "Components",
    tokens: [
      { name: "--input-height-sm", value: "36px", description: "Small field height.", kind: "size" },
      { name: "--input-height-md", value: "40px", description: "Medium field height.", kind: "size" },
      { name: "--input-height-lg", value: "48px", description: "Large field height.", kind: "size" },
      { name: "--input-border-width", value: "1px", description: "Field border width.", kind: "size" },
    ],
  },
  {
    slug: "checkbox",
    title: "Checkbox",
    description: "Control size, radius, padding, and label gap.",
    group: "Components",
    tokens: [
      { name: "--checkbox-size", value: "16px", description: "Control box size.", kind: "size" },
      { name: "--checkbox-radius", value: "4px", description: "Control corner radius.", kind: "size" },
      { name: "--checkbox-padding-on", value: "2px", description: "Inner padding when on / indeterminate.", kind: "size" },
      { name: "--checkbox-padding-off", value: "0px", description: "Inner padding when off.", kind: "size" },
      { name: "--checkbox-border-width", value: "2px", description: "Off-state outline width.", kind: "size" },
      { name: "--checkbox-label-gap", value: "4px", description: "Gap between control and label.", kind: "size" },
    ],
  },
  {
    slug: "button",
    title: "Button",
    description: "Height, padding, radius, and border for buttons.",
    group: "Components",
    tokens: [
      { name: "--button-height", value: "40px", description: "Button height.", kind: "size" },
      { name: "--button-padding-y", value: "10px", description: "Vertical padding (text layout).", kind: "size" },
      { name: "--button-padding-x", value: "16px", description: "Horizontal padding (text layout).", kind: "size" },
      { name: "--button-border-width", value: "1px", description: "Secondary border width.", kind: "size" },
      { name: "--radius-button", value: "12px", description: "Button corner radius.", kind: "size" },
    ],
  },
  {
    slug: "toast",
    title: "Toast",
    description: "Toast dimensions, typography, and type-specific min widths.",
    group: "Components",
    tokens: [
      { name: "--toast-min-height", value: "44px", description: "Minimum toast height.", kind: "size" },
      { name: "--toast-padding-y", value: "12px", description: "Vertical padding.", kind: "size" },
      { name: "--toast-padding-x", value: "16px", description: "Horizontal padding.", kind: "size" },
      { name: "--toast-radius", value: "8px", description: "Toast corner radius.", kind: "size" },
      { name: "--toast-title-description-gap", value: "4px", description: "Gap between title and description.", kind: "size" },
      { name: "--toast-min-width-success", value: "121px", description: "Success toast min width.", kind: "size" },
      { name: "--toast-min-width-error", value: "129px", description: "Error toast min width.", kind: "size" },
      { name: "--toast-title-font-size", value: "14px", description: "Title size.", kind: "type" },
      { name: "--toast-title-line-height", value: "20px", description: "Title line height.", kind: "type" },
      { name: "--toast-title-font-weight", value: "var(--font-weight-semibold)", description: "Title weight.", kind: "type" },
      { name: "--toast-title-letter-spacing", value: "var(--type-letter-spacing-tight)", description: "Title tracking.", kind: "type" },
      { name: "--toast-description-font-size", value: "12px", description: "Description size.", kind: "type" },
      { name: "--toast-description-line-height", value: "16px", description: "Description line height.", kind: "type" },
      { name: "--toast-description-font-weight", value: "var(--font-weight-regular)", description: "Description weight.", kind: "type" },
      { name: "--toast-description-letter-spacing", value: "var(--type-letter-spacing-tight)", description: "Description tracking.", kind: "type" },
    ],
  },
  {
    slug: "pagination",
    title: "Pagination",
    description: "Panel metrics, item size, and ellipsis icon metrics. Width is content-driven.",
    group: "Components",
    tokens: [
      { name: "--pagination-radius", value: "8px", description: "Panel radius.", kind: "size" },
      { name: "--pagination-border-width", value: "1px", description: "Panel border width.", kind: "size" },
      { name: "--pagination-padding", value: "4px", description: "Panel padding.", kind: "size" },
      { name: "--pagination-gap", value: "4px", description: "Gap between items.", kind: "size" },
      { name: "--pagination-item-size", value: "32px", description: "Page / chevron item size.", kind: "size" },
      { name: "--pagination-item-radius", value: "8px", description: "Item radius.", kind: "size" },
      { name: "--pagination-item-padding-x", value: "8px", description: "Item horizontal padding.", kind: "size" },
      { name: "--pagination-ellipsis-width", value: "14px", description: "Dots icon width.", kind: "size" },
      { name: "--pagination-ellipsis-height", value: "3.5px", description: "Dots icon height.", kind: "size" },
    ],
  },
  {
    slug: "menu",
    title: "Menu",
    description: "Dropdown item and panel dimensions.",
    group: "Components",
    tokens: [
      { name: "--menu-element-width", value: "243px", description: "Menu item width.", kind: "size" },
      { name: "--menu-item-height", value: "36px", description: "Menu item min height.", kind: "size" },
      { name: "--menu-item-border-radius", value: "8px", description: "Menu item radius.", kind: "size" },
      { name: "--menu-item-padding", value: "8px", description: "Menu item padding.", kind: "size" },
      { name: "--menu-item-gap", value: "8px", description: "Icon / label gap.", kind: "size" },
      { name: "--menu-panel-width", value: "287px", description: "Dropdown panel width.", kind: "size" },
      { name: "--menu-panel-radius", value: "12px", description: "Panel radius.", kind: "size" },
      { name: "--menu-panel-padding", value: "8px", description: "Panel padding.", kind: "size" },
      { name: "--menu-panel-gap", value: "4px", description: "Gap between panel children.", kind: "size" },
    ],
  },
  {
    slug: "modal",
    title: "Modal",
    description: "Overlay, panel, header, body, footer, and status icon tokens.",
    group: "Components",
    tokens: [
      { name: "--modal-overlay-bg", value: "#00000052", description: "Scrim behind the panel.", kind: "color" },
      { name: "--modal-radius", value: "8px", description: "Panel radius.", kind: "size" },
      { name: "--modal-border-width", value: "1px", description: "Header / footer divider width.", kind: "size" },
      { name: "--modal-header-height", value: "72px", description: "Header height.", kind: "size" },
      { name: "--modal-header-padding-y", value: "16px", description: "Header vertical padding.", kind: "size" },
      { name: "--modal-header-padding-x", value: "24px", description: "Header horizontal padding.", kind: "size" },
      { name: "--modal-body-max-height", value: "456px", description: "Body max height before scroll.", kind: "size" },
      { name: "--modal-body-padding", value: "24px", description: "Body padding.", kind: "size" },
      { name: "--modal-footer-height", value: "72px", description: "Footer height.", kind: "size" },
      { name: "--modal-footer-padding-y", value: "16px", description: "Footer vertical padding.", kind: "size" },
      { name: "--modal-footer-padding-x", value: "24px", description: "Footer horizontal padding.", kind: "size" },
      { name: "--modal-footer-gap", value: "12px", description: "Gap between footer actions.", kind: "size" },
      { name: "--modal-icon-wrapper-size", value: "56px", description: "Status icon circle size.", kind: "size" },
      { name: "--modal-icon-wrapper-padding", value: "16px", description: "Status icon circle padding.", kind: "size" },
      { name: "--modal-icon-wrapper-radius", value: "96px", description: "Status icon circle radius.", kind: "size" },
      { name: "--modal-icon-size", value: "24px", description: "Glyph size inside the circle.", kind: "size" },
    ],
  },
  {
    slug: "section",
    title: "Section",
    description: "Section card width, padding, and divider.",
    group: "Components",
    tokens: [
      { name: "--section-width", value: "810px", description: "Default section width.", kind: "size" },
      { name: "--section-header-min-height", value: "92px", description: "Header min height.", kind: "size" },
      { name: "--section-body-height", value: "256px", description: "Body min height.", kind: "size" },
      { name: "--section-padding", value: "24px", description: "Header / body padding.", kind: "size" },
      { name: "--section-title-description-gap", value: "8px", description: "Title to description gap.", kind: "size" },
      { name: "--section-radius", value: "8px", description: "Card radius.", kind: "size" },
      { name: "--section-border-width", value: "1px", description: "Header divider width.", kind: "size" },
    ],
  },
  {
    slug: "sidebar",
    title: "Sidebar",
    description: "Sidebar rail and item sizing.",
    group: "Components",
    tokens: [
      { name: "--sidebar-width", value: "240px", description: "Sidebar width.", kind: "size" },
      { name: "--sidebar-padding", value: "16px", description: "Sidebar padding.", kind: "size" },
      { name: "--sidebar-item-width", value: "216px", description: "Item width.", kind: "size" },
      { name: "--sidebar-item-min-height", value: "40px", description: "Item min height.", kind: "size" },
      { name: "--sidebar-item-padding", value: "8px", description: "Item padding.", kind: "size" },
      { name: "--sidebar-border-width", value: "1px", description: "Sidebar edge border.", kind: "size" },
    ],
  },
  {
    slug: "header",
    title: "Header",
    description: "App header height, padding, and gap.",
    group: "Components",
    tokens: [
      { name: "--header-height", value: "64px", description: "Header height.", kind: "size" },
      { name: "--header-padding-y", value: "12px", description: "Vertical padding.", kind: "size" },
      { name: "--header-padding-x", value: "24px", description: "Horizontal padding.", kind: "size" },
      { name: "--header-border-width", value: "1px", description: "Bottom border width.", kind: "size" },
      { name: "--header-gap", value: "16px", description: "Gap between header slots.", kind: "size" },
    ],
  },
  {
    slug: "table",
    title: "Table",
    description: "Row height, typography, row number badge, and actions menu.",
    group: "Components",
    tokens: [
      { name: "--table-row-height", value: "48px", description: "Header and body row height.", kind: "size" },
      { name: "--table-header-bg", value: "var(--neutral-bg1-hover)", description: "Header background.", kind: "color" },
      { name: "--table-stroke", value: "var(--neutral-st3-default)", description: "Row / header divider color.", kind: "color" },
      { name: "--table-stroke-width", value: "1px", description: "Divider width.", kind: "size" },
      { name: "--table-row-bg", value: "var(--neutral-bg1-default)", description: "Body row background.", kind: "color" },
      { name: "--table-row-number-bg", value: "var(--neutral-bg1-hover)", description: "Row number badge fill.", kind: "color" },
      { name: "--table-row-number-radius", value: "4px", description: "Row number badge radius.", kind: "size" },
      { name: "--table-row-number-size", value: "28px", description: "Row number badge size.", kind: "size" },
      { name: "--table-row-number-padding-x", value: "8px", description: "Row number horizontal padding.", kind: "size" },
      { name: "--table-header-font-size", value: "18px", description: "Header text size.", kind: "type" },
      { name: "--table-header-line-height", value: "24px", description: "Header line height.", kind: "type" },
      { name: "--table-header-font-weight", value: "var(--font-weight-semibold)", description: "Header text weight.", kind: "type" },
      { name: "--table-header-letter-spacing", value: "var(--type-letter-spacing-tight)", description: "Header tracking.", kind: "type" },
      { name: "--table-cell-font-size", value: "14px", description: "Body cell text size.", kind: "type" },
      { name: "--table-cell-line-height", value: "20px", description: "Body cell line height.", kind: "type" },
      { name: "--table-cell-font-weight", value: "var(--font-weight-regular)", description: "Body cell weight.", kind: "type" },
      { name: "--table-cell-strong-font-weight", value: "var(--font-weight-semibold)", description: "Emphasized cell weight.", kind: "type" },
      { name: "--table-cell-letter-spacing", value: "var(--type-letter-spacing-tight)", description: "Body cell tracking.", kind: "type" },
      { name: "--table-cell-padding-x", value: "16px", description: "Cell horizontal padding.", kind: "size" },
      { name: "--table-actions-trigger-size", value: "32px", description: "Options button size.", kind: "size" },
      { name: "--table-actions-trigger-border-width", value: "1px", description: "Options button border width.", kind: "size" },
      { name: "--table-actions-trigger-radius", value: "12px", description: "Options button radius.", kind: "size" },
      { name: "--table-actions-menu-width", value: "144px", description: "Actions menu width.", kind: "size" },
      { name: "--table-actions-menu-height", value: "90px", description: "Actions menu height.", kind: "size" },
      { name: "--table-actions-menu-padding", value: "8px", description: "Actions menu padding.", kind: "size" },
      { name: "--table-actions-menu-gap", value: "4px", description: "Actions menu item gap.", kind: "size" },
      { name: "--table-actions-menu-radius", value: "12px", description: "Actions menu radius.", kind: "size" },
      { name: "--table-actions-menu-edge", value: "8px", description: "Menu offset from viewport edge.", kind: "size" },
    ],
  },
] as const;

export function getTokenCategory(slug: string): TokenCategory | undefined {
  return TOKEN_NAV.find((item) => item.slug === slug);
}

export function isTokenSlug(slug: string): slug is TokenCategorySlug {
  return TOKEN_NAV.some((item) => item.slug === slug);
}

export const TOKEN_FOUNDATIONS = TOKEN_NAV.filter((t) => t.group === "Foundations");
export const TOKEN_COMPONENTS = TOKEN_NAV.filter((t) => t.group === "Components");
