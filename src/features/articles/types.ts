import type enArticles from "./i18n/en.json";

export type ArticlesMessages = typeof enArticles;

export type ArticleRow = {
  id: number;
  title: string;
  author: string;
  tags: string;
  excerpt: string;
  created: string;
};

export type ArticlesPageData = {
  rows: ArticleRow[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
};

export type CreateArticleFormValues = {
  title: string;
  description: string;
  body: string;
  tags: string[];
};

export type CreateArticleFieldErrors = Partial<
  Record<"title" | "description" | "body", string>
>;

export type ArticleTagOption = {
  name: string;
  checked: boolean;
};
