"use client";

import { usePathname, useRouter } from "next/navigation";
import { Sidebar, SidebarItem } from "@/components";
import { GUIDE_NAV } from "@/docs/guides/registry";
import { DOC_NAV } from "@/docs/registry";
import { TOKEN_COMPONENTS, TOKEN_FOUNDATIONS } from "@/docs/tokens/registry";
import styles from "./docs.module.css";

export function DocsSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Sidebar className={styles.sidebar} aria-label="Documentation">
      <p className={styles.navGroup}>Guides</p>
      {GUIDE_NAV.map((item) => {
        const href = `/docs/guides/${item.slug}`;
        const selected = pathname === href;

        return (
          <SidebarItem
            key={item.slug}
            selected={selected}
            onClick={() => router.push(href)}
          >
            {item.title}
          </SidebarItem>
        );
      })}

      <p className={styles.navGroup}>Components</p>
      {DOC_NAV.map((item) => {
        const href = `/docs/components/${item.slug}`;
        const selected = pathname === href;

        return (
          <SidebarItem
            key={item.slug}
            selected={selected}
            onClick={() => router.push(href)}
          >
            {item.title}
          </SidebarItem>
        );
      })}

      <p className={styles.navGroup}>Tokens · Foundations</p>
      {TOKEN_FOUNDATIONS.map((item) => {
        const href = `/docs/tokens/${item.slug}`;
        const selected = pathname === href;

        return (
          <SidebarItem
            key={item.slug}
            selected={selected}
            onClick={() => router.push(href)}
          >
            {item.title}
          </SidebarItem>
        );
      })}

      <p className={styles.navGroup}>Tokens · Components</p>
      {TOKEN_COMPONENTS.map((item) => {
        const href = `/docs/tokens/${item.slug}`;
        const selected = pathname === href;

        return (
          <SidebarItem
            key={item.slug}
            selected={selected}
            onClick={() => router.push(href)}
          >
            {item.title}
          </SidebarItem>
        );
      })}
    </Sidebar>
  );
}
