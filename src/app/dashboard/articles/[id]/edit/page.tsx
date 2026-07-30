import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  EditArticleView,
  getArticlesMessages,
  parseArticleIdParam,
} from "@/features/articles";
import { defaultLocale, getDictionary } from "@/i18n";

type EditArticlePageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: EditArticlePageProps): Promise<Metadata> {
  const { id } = await params;
  const [messages, dictionary] = await Promise.all([
    getArticlesMessages(defaultLocale),
    getDictionary(defaultLocale),
  ]);

  return {
    title: `${messages.edit.title}${parseArticleIdParam(id) ? ` #${id}` : ""} · ${dictionary.common.appName}`,
  };
}

export default async function EditArticlePage({ params }: EditArticlePageProps) {
  const { id } = await params;
  const articleId = parseArticleIdParam(id);

  if (articleId === null) {
    notFound();
  }

  return <EditArticleView articleId={articleId} />;
}
