export const ARTICLES_BASE_PATH = "/dashboard/articles";
export const ARTICLES_CREATE_PATH = `${ARTICLES_BASE_PATH}/create`;

export function getArticlesPath(page: number): string {
  if (!Number.isFinite(page) || page <= 1) {
    return ARTICLES_BASE_PATH;
  }

  return `${ARTICLES_BASE_PATH}/page/${Math.floor(page)}`;
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
