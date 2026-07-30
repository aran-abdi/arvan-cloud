import { ARTICLES_PAGE_SIZE } from "@/constants";
import { redirect } from "next/navigation";
import { DummyJsonApiError } from "@/lib/api/dummyjson";
import { defaultLocale } from "@/i18n";
import { getArticlesMessages } from "../i18n/getArticlesMessages";
import { getArticlesPageData } from "../lib/getArticlesPageData";
import {
  getArticlesPath,
  type ArticlesNotice,
} from "../lib/paths";
import { ArticlesNoticeToast } from "./ArticlesNoticeToast";
import { ArticlesTable } from "./ArticlesTable";

export type ArticlesViewProps = {
  page: number;
  notice?: ArticlesNotice | null;
};

export async function ArticlesView({
  page,
  notice = null,
}: ArticlesViewProps) {
  const messages = await getArticlesMessages(defaultLocale);

  try {
    const data = await getArticlesPageData(page);

    if (page !== data.page) {
      redirect(getArticlesPath(data.page));
    }

    return (
      <>
        {notice ? (
          <ArticlesNoticeToast notice={notice} messages={messages} />
        ) : null}
        <ArticlesTable
          messages={messages}
          rows={data.rows}
          page={data.page}
          pageSize={data.pageSize}
          totalPages={data.totalPages}
        />
      </>
    );
  } catch (error) {
    if (error instanceof DummyJsonApiError) {
      return (
        <>
          {notice ? (
            <ArticlesNoticeToast notice={notice} messages={messages} />
          ) : null}
          <ArticlesTable
            messages={messages}
            rows={[]}
            page={Math.max(1, page)}
            pageSize={ARTICLES_PAGE_SIZE}
            totalPages={1}
          />
        </>
      );
    }

    throw error;
  }
}
