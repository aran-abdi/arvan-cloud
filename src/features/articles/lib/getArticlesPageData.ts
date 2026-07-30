import "server-only";

import { ARTICLES_PAGE_SIZE } from "@/constants";
import {
  DummyJsonApiError,
  fetchDummyJsonPosts,
  getDummyJsonUserById,
} from "@/lib/api/dummyjson";
import {
  formatAuthor,
  formatTags,
  getExcerpt,
  getMockCreatedDate,
} from "./mapPost";
import type { ArticleRow, ArticlesPageData } from "../types";

export async function getArticlesPageData(
  page: number
): Promise<ArticlesPageData> {
  const requestedPage =
    Number.isFinite(page) && page > 0 ? Math.floor(page) : 1;

  const firstPage = await fetchDummyJsonPosts({
    limit: ARTICLES_PAGE_SIZE,
    skip: (requestedPage - 1) * ARTICLES_PAGE_SIZE,
  });

  const totalPages = Math.max(
    1,
    Math.ceil(firstPage.total / ARTICLES_PAGE_SIZE)
  );
  const currentPage = Math.min(requestedPage, totalPages);

  const response =
    currentPage === requestedPage
      ? firstPage
      : await fetchDummyJsonPosts({
          limit: ARTICLES_PAGE_SIZE,
          skip: (currentPage - 1) * ARTICLES_PAGE_SIZE,
        });

  const uniqueUserIds = [...new Set(response.posts.map((post) => post.userId))];
  const users = await Promise.all(
    uniqueUserIds.map(async (id) => {
      try {
        const user = await getDummyJsonUserById(id);
        return [id, user.username] as const;
      } catch (error) {
        if (error instanceof DummyJsonApiError) {
          return [id, undefined] as const;
        }
        throw error;
      }
    })
  );
  const usernameById = new Map(users);

  const rows: ArticleRow[] = response.posts.map((post) => ({
    id: post.id,
    title: post.title,
    author: formatAuthor(usernameById.get(post.userId), post.userId),
    tags: formatTags(post.tags),
    excerpt: getExcerpt(post.body),
    created: getMockCreatedDate(post.id),
  }));

  return {
    rows,
    total: response.total,
    page: currentPage,
    pageSize: ARTICLES_PAGE_SIZE,
    totalPages,
  };
}
