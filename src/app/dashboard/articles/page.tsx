import type { Metadata } from "next";
import { ArticlesView, getArticlesMessages } from "@/features/articles";
import { defaultLocale, getDictionary } from "@/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const [messages, dictionary] = await Promise.all([
    getArticlesMessages(defaultLocale),
    getDictionary(defaultLocale),
  ]);

  return {
    title: `${messages.title} · ${dictionary.common.appName}`,
  };
}

export default function ArticlesPage() {
  return <ArticlesView page={1} />;
}
