import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import {
  ArticlesView,
  getArticlesMessages,
  getArticlesPath,
  parseArticlesPageParam,
} from "@/features/articles";
import { defaultLocale, getDictionary } from "@/i18n";

type ArticlesPagedPageProps = {
  params: Promise<{ page: string }>;
};

export async function generateMetadata({
  params,
}: ArticlesPagedPageProps): Promise<Metadata> {
  const { page: pageParam } = await params;
  const page = parseArticlesPageParam(pageParam);
  const [messages, dictionary] = await Promise.all([
    getArticlesMessages(defaultLocale),
    getDictionary(defaultLocale),
  ]);

  return {
    title: `${messages.title}${page && page > 1 ? ` · ${page}` : ""} · ${dictionary.common.appName}`,
  };
}

export default async function ArticlesPagedPage({
  params,
}: ArticlesPagedPageProps) {
  const { page: pageParam } = await params;
  const page = parseArticlesPageParam(pageParam);

  if (page === null) {
    notFound();
  }

  if (page === 1) {
    redirect(getArticlesPath(1));
  }

  return <ArticlesView page={page} />;
}
