import {
  DashboardShell,
  getDashboardMessages,
} from "@/features/dashboard/shared";
import { ARTICLES_BASE_PATH, ARTICLES_CREATE_PATH } from "@/features/articles/lib/paths";
import { getAccessToken } from "@/features/auth/session";
import {
  DummyJsonApiError,
  getCurrentDummyJsonUser,
} from "@/lib/api/dummyjson";
import { defaultLocale } from "@/i18n";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [token, messages] = await Promise.all([
    getAccessToken(),
    getDashboardMessages(defaultLocale),
  ]);

  if (!token) {
    redirect("/login");
  }

  let userName = "User";

  try {
    const user = await getCurrentDummyJsonUser(token);
    userName = user.firstName || user.username;
  } catch (error) {
    if (error instanceof DummyJsonApiError) {
      redirect("/login");
    }
    throw error;
  }

  const navItems = [
    { href: ARTICLES_BASE_PATH, label: messages.nav.allArticles },
    {
      href: ARTICLES_CREATE_PATH,
      label: messages.nav.newArticle,
    },
  ];

  return (
    <DashboardShell
      userName={userName}
      welcomeLabel={messages.welcome}
      logoutLabel={messages.logout}
      brandLabel={messages.brand}
      navItems={navItems}
      navAriaLabel={messages.navAriaLabel}
      openNavLabel={messages.openNav}
      closeNavLabel={messages.closeNav}
    >
      {children}
    </DashboardShell>
  );
}
