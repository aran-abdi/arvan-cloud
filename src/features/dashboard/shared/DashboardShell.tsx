"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { DASHBOARD } from "@/constants";
import { DashboardHeader } from "./DashboardHeader";
import {
  DashboardSidebar,
  type DashboardNavItem,
} from "./DashboardSidebar";
import styles from "./DashboardShell.module.css";

export type DashboardShellProps = {
  userName: string;
  welcomeLabel: string;
  logoutLabel: string;
  brandLabel: string;
  navItems: DashboardNavItem[];
  navAriaLabel: string;
  openNavLabel: string;
  closeNavLabel: string;
  children: ReactNode;
};

export function DashboardShell({
  userName,
  welcomeLabel,
  logoutLabel,
  brandLabel,
  navItems,
  navAriaLabel,
  openNavLabel,
  closeNavLabel,
  children,
}: DashboardShellProps) {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const handleChange = () => {
      if (media.matches) {
        setNavOpen(false);
      }
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!navOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setNavOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [navOpen]);

  return (
    <div
      className={styles.shell}
      data-nav-open={navOpen ? "true" : "false"}
    >
      <DashboardHeader
        userName={userName}
        welcomeLabel={welcomeLabel}
        logoutLabel={logoutLabel}
        brandLabel={brandLabel}
        navOpen={navOpen}
        openNavLabel={openNavLabel}
        closeNavLabel={closeNavLabel}
        onMenuClick={() => setNavOpen((open) => !open)}
      />
      <div className={styles.body}>
        <button
          type="button"
          className={styles.backdrop}
          aria-label={closeNavLabel}
          tabIndex={navOpen ? 0 : -1}
          onClick={() => setNavOpen(false)}
        />
        <DashboardSidebar
          id={DASHBOARD.navId}
          items={navItems}
          ariaLabel={navAriaLabel}
          onNavigate={() => setNavOpen(false)}
        />
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}
