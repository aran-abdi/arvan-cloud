import type { Metadata } from "next";
import {
  ArticlesView,
  getArticlesMessages,
  parseArticlesNotice,
} from "@/features/articles";
import { defaultLocale, getDictionary } from "@/i18n";

type ArticlesPageProps = {
  searchParams: Promise<{ notice?: string | string[] }>;
};

export async function generateMetadata(): Promise<Metadata> {
  const [messages, dictionary] = await Promise.all([
    getArticlesMessages(defaultLocale),
    getDictionary(defaultLocale),
  ]);

  return {
    title: `${messages.title} · ${dictionary.common.appName}`,
  };
}

export default async function ArticlesPage({ searchParams }: ArticlesPageProps) {
  const params = await searchParams;

  return (
    <ArticlesView page={1} notice={parseArticlesNotice(params.notice)} />
  );
}
