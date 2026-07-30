"use client";

import { useState, useTransition } from "react";
import { Button, Header } from "@/components";
import { MenuIcon } from "@/components/icons";
import { logoutAction } from "@/features/auth/actions";
import { DASHBOARD } from "@/constants";
import type enDashboard from "./i18n/en.json";
import { LogoutConfirmModal } from "./LogoutConfirmModal";
import styles from "./DashboardShell.module.css";

export type DashboardHeaderProps = {
  userName: string;
  welcomeLabel: string;
  logoutLabel: string;
  logoutConfirm: (typeof enDashboard)["logoutConfirm"];
  brandLabel?: string;
  navOpen: boolean;
  openNavLabel: string;
  closeNavLabel: string;
  onMenuClick: () => void;
};

export function DashboardHeader({
  userName,
  welcomeLabel,
  logoutLabel,
  logoutConfirm,
  brandLabel = DASHBOARD.brandLabel,
  navOpen,
  openNavLabel,
  closeNavLabel,
  onMenuClick,
}: DashboardHeaderProps) {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [pending, startTransition] = useTransition();

  const handleConfirmLogout = () => {
    startTransition(async () => {
      await logoutAction();
    });
  };

  return (
    <>
      <Header className={styles.header}>
        <div className={styles.headerStart}>
          <Button
            type="button"
            variant="Secondary"
            layout="Icon"
            className={styles.menuButton}
            icon={<MenuIcon />}
            aria-label={navOpen ? closeNavLabel : openNavLabel}
            aria-expanded={navOpen}
            aria-controls={DASHBOARD.navId}
            onClick={onMenuClick}
          />
          <span className={styles.welcome}>
            {welcomeLabel}{" "}
            <strong className={styles.welcomeName}>{userName}</strong>
          </span>
        </div>
        <span className={styles.centerLabel} title={brandLabel}>
          {brandLabel}
        </span>
        <div className={styles.logoutForm}>
          <Button
            type="button"
            variant="Secondary"
            layout="Text"
            disabled={pending}
            onClick={() => setConfirmOpen(true)}
          >
            {logoutLabel}
          </Button>
        </div>
      </Header>

      <LogoutConfirmModal
        open={confirmOpen}
        title={logoutConfirm.title}
        message={logoutConfirm.message}
        confirmLabel={logoutConfirm.confirm}
        cancelLabel={logoutConfirm.cancel}
        pending={pending}
        onConfirm={handleConfirmLogout}
        onCancel={() => {
          if (!pending) setConfirmOpen(false);
        }}
      />
    </>
  );
}
