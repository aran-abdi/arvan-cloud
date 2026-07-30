import { Button, Header } from "@/components";
import { MenuIcon } from "@/components/icons";
import { logoutAction } from "@/features/auth/actions";
import { DASHBOARD } from "@/constants";
import styles from "./DashboardShell.module.css";

export type DashboardHeaderProps = {
  userName: string;
  welcomeLabel: string;
  logoutLabel: string;
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
  brandLabel = DASHBOARD.brandLabel,
  navOpen,
  openNavLabel,
  closeNavLabel,
  onMenuClick,
}: DashboardHeaderProps) {
  return (
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
      <form action={logoutAction} className={styles.logoutForm}>
        <Button type="submit" variant="Secondary" layout="Text">
          {logoutLabel}
        </Button>
      </form>
    </Header>
  );
}
