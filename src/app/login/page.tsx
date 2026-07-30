import type { Metadata } from "next";
import { Suspense } from "react";
import { getLoginMessages, LoginScreen } from "@/features/auth/login";
import { defaultLocale, getDictionary } from "@/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const [messages, dictionary] = await Promise.all([
    getLoginMessages(defaultLocale),
    getDictionary(defaultLocale),
  ]);

  return {
    title: `${messages.login.title} · ${dictionary.common.appName}`,
  };
}

export default async function LoginPage() {
  const messages = await getLoginMessages(defaultLocale);

  return (
    <Suspense fallback={null}>
      <LoginScreen messages={messages} />
    </Suspense>
  );
}
