"use client";

import { usePathname, useRouter } from "next/navigation";
import { Sidebar, SidebarItem } from "@/components";
import { DOC_NAV } from "@/docs/registry";
import styles from "./docs.module.css";

export function DocsSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Sidebar className={styles.sidebar} aria-label="Component documentation">
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
    </Sidebar>
  );
}
