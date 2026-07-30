export const ARTICLES_BASE_PATH = "/dashboard/articles";
export const ARTICLES_CREATE_PATH = `${ARTICLES_BASE_PATH}/create`;

export type ArticlesNotice = "created" | "updated";

export function getArticlesPath(page: number): string {
  if (!Number.isFinite(page) || page <= 1) {
    return ARTICLES_BASE_PATH;
  }

  return `${ARTICLES_BASE_PATH}/page/${Math.floor(page)}`;
}

export function getArticlesNoticePath(notice: ArticlesNotice): string {
  return `${ARTICLES_BASE_PATH}?notice=${notice}`;
}

export function parseArticlesNotice(
  value: string | string[] | undefined
): ArticlesNotice | null {
  const raw = Array.isArray(value) ? value[0] : value;
  if (raw === "created" || raw === "updated") return raw;
  return null;
}

export function getArticleEditPath(id: number): string {
  return `${ARTICLES_BASE_PATH}/${id}/edit`;
}

export function parseArticlesPageParam(value: string): number | null {
  if (!/^\d+$/.test(value)) return null;
  const page = Number(value);
  if (!Number.isInteger(page) || page < 1) return null;
  return page;
}

export function parseArticleIdParam(value: string): number | null {
  if (!/^\d+$/.test(value)) return null;
  const id = Number(value);
  if (!Number.isInteger(id) || id < 1) return null;
  return id;
}
