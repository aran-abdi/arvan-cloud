export type DocSlug =
  | "input"
  | "checkbox"
  | "toast"
  | "button"
  | "link-button"
  | "menu"
  | "pagination"
  | "modal"
  | "section"
  | "table"
  | "sidebar"
  | "header";

export type DocNavItem = {
  slug: DocSlug;
  title: string;
  description: string;
};

export const DOC_NAV: readonly DocNavItem[] = [
  {
    slug: "input",
    title: "Input",
    description: "Text field with label, helper message, sizes, and error state.",
  },
  {
    slug: "checkbox",
    title: "Checkbox",
    description: "On, Off, and Indeterminate values with default and disabled states.",
  },
  {
    slug: "toast",
    title: "Toast",
    description: "Success and error notifications with auto-dismiss or click-to-dismiss.",
  },
  {
    slug: "button",
    title: "Button",
    description: "Primary, Secondary, and Primary Danger variants with text or icon layouts.",
  },
  {
    slug: "link-button",
    title: "LinkButton",
    description: "Text-style action link with default, hover, press, and disabled colors.",
  },
  {
    slug: "menu",
    title: "Menu",
    description: "DropDownMenu panel with DropDownElement items and loading content.",
  },
  {
    slug: "pagination",
    title: "Pagination",
    description: "Controlled page navigator with chevrons, ellipsis, and disabled state.",
  },
  {
    slug: "modal",
    title: "Modal",
    description: "Overlay dialog with header, body, footer slots and status icons.",
  },
  {
    slug: "section",
    title: "Section",
    description: "Page section header and body with title and description typography.",
  },
  {
    slug: "table",
    title: "Table",
    description: "Data table with header, row number badge, cells, and row actions menu.",
  },
  {
    slug: "sidebar",
    title: "Sidebar",
    description: "Vertical navigation rail with selectable items and interaction states.",
  },
  {
    slug: "header",
    title: "Header",
    description: "Top panel shell with space-between layout for app chrome content.",
  },
] as const;

export function getDocBySlug(slug: string): DocNavItem | undefined {
  return DOC_NAV.find((item) => item.slug === slug);
}

export function isDocSlug(slug: string): slug is DocSlug {
  return DOC_NAV.some((item) => item.slug === slug);
}
