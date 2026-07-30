import type { Metadata } from "next";
import { CreateArticleView, getArticlesMessages } from "@/features/articles";
import { defaultLocale, getDictionary } from "@/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const [messages, dictionary] = await Promise.all([
    getArticlesMessages(defaultLocale),
    getDictionary(defaultLocale),
  ]);

  return {
    title: `${messages.create.title} · ${dictionary.common.appName}`,
  };
}

export default function CreateArticlePage() {
  return <CreateArticleView />;
}
