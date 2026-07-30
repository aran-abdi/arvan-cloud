import type { Metadata } from "next";
import { getRegisterMessages, RegisterScreen } from "@/features/auth/register";
import { defaultLocale, getDictionary } from "@/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const [messages, dictionary] = await Promise.all([
    getRegisterMessages(defaultLocale),
    getDictionary(defaultLocale),
  ]);

  return {
    title: `${messages.register.title} · ${dictionary.common.appName}`,
  };
}

export default async function RegisterPage() {
  const messages = await getRegisterMessages(defaultLocale);

  return <RegisterScreen messages={messages} />;
}
