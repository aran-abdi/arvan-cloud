import type { ComponentType } from "react";
import type { DocSlug } from "@/docs/registry";
import { InputDocs } from "./input";
import { CheckboxDocs } from "./checkbox";
import { ToastDocs } from "./toast";
import { ButtonDocs } from "./button";
import { LinkButtonDocs } from "./link-button";
import { MenuDocs } from "./menu";
import { PaginationDocs } from "./pagination";
import { ModalDocs } from "./modal";
import { SectionDocs } from "./section";
import { TableDocs } from "./table";
import { SidebarDocs } from "./sidebar";
import { HeaderDocs } from "./header";

export const DOC_PAGES: Record<DocSlug, ComponentType> = {
  input: InputDocs,
  checkbox: CheckboxDocs,
  toast: ToastDocs,
  button: ButtonDocs,
  "link-button": LinkButtonDocs,
  menu: MenuDocs,
  pagination: PaginationDocs,
  modal: ModalDocs,
  section: SectionDocs,
  table: TableDocs,
  sidebar: SidebarDocs,
  header: HeaderDocs,
};
