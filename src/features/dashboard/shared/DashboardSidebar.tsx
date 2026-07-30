"use client";

import { usePathname, useRouter } from "next/navigation";
import { Sidebar, SidebarItem } from "@/components";
import {
  ARTICLES_BASE_PATH,
  ARTICLES_CREATE_PATH,
} from "@/features/articles/lib/paths";
import styles from "./DashboardShell.module.css";

export type DashboardNavItem = {
  href: string;
  label: string;
};

export type DashboardSidebarProps = {
  id?: string;
  items: DashboardNavItem[];
  ariaLabel: string;
  onNavigate?: () => void;
};

function isAllArticlesPath(pathname: string): boolean {
  return (
    pathname === ARTICLES_BASE_PATH ||
    pathname.startsWith(`${ARTICLES_BASE_PATH}/page/`)
  );
}

function isCreateArticlePath(pathname: string): boolean {
  return (
    pathname === ARTICLES_CREATE_PATH ||
    pathname === `${ARTICLES_BASE_PATH}/new`
  );
}

function isItemSelected(href: string, pathname: string): boolean {
  if (href === ARTICLES_BASE_PATH) {
    return isAllArticlesPath(pathname);
  }

  if (href === ARTICLES_CREATE_PATH || href.endsWith("/create")) {
    return isCreateArticlePath(pathname);
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function DashboardSidebar({
  id,
  items,
  ariaLabel,
  onNavigate,
}: DashboardSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Sidebar id={id} className={styles.sidebar} aria-label={ariaLabel}>
      {items.map((item) => {
        const selected = isItemSelected(item.href, pathname);

        return (
          <SidebarItem
            key={item.href}
            selected={selected}
            onClick={() => {
              onNavigate?.();
              if (pathname !== item.href) {
                router.push(item.href);
              }
            }}
          >
            {item.label}
          </SidebarItem>
        );
      })}
    </Sidebar>
  );
}
