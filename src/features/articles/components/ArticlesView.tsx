import { ARTICLES_PAGE_SIZE } from "@/constants";
import { redirect } from "next/navigation";
import { DummyJsonApiError } from "@/lib/api/dummyjson";
import { defaultLocale } from "@/i18n";
import { getArticlesMessages } from "../i18n/getArticlesMessages";
import { getArticlesPageData } from "../lib/getArticlesPageData";
import { getArticlesPath } from "../lib/paths";
import { ArticlesTable } from "./ArticlesTable";

export type ArticlesViewProps = {
  page: number;
};

export async function ArticlesView({ page }: ArticlesViewProps) {
  const messages = await getArticlesMessages(defaultLocale);

  try {
    const data = await getArticlesPageData(page);

    if (page !== data.page) {
      redirect(getArticlesPath(data.page));
    }

    return (
      <ArticlesTable
        messages={messages}
        rows={data.rows}
        page={data.page}
        pageSize={data.pageSize}
        totalPages={data.totalPages}
      />
    );
  } catch (error) {
    if (error instanceof DummyJsonApiError) {
      return (
        <ArticlesTable
          messages={messages}
          rows={[]}
          page={Math.max(1, page)}
          pageSize={ARTICLES_PAGE_SIZE}
          totalPages={1}
        />
      );
    }

    throw error;
  }
}
