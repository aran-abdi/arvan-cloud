"use server";

import { deleteDummyJsonPost, DummyJsonApiError } from "@/lib/api/dummyjson";
import { getArticlesMessages } from "../i18n/getArticlesMessages";
import { defaultLocale } from "@/i18n";

export type DeleteArticleResult =
  | { ok: true; title: string; description?: string }
  | { ok: false; title: string; description: string };

export async function deleteArticleAction(
  id: number
): Promise<DeleteArticleResult> {
  const messages = await getArticlesMessages(defaultLocale);

  try {
    await deleteDummyJsonPost(id);

    return {
      ok: true,
      title: messages.success.deleteTitle,
    };
  } catch (error) {
    if (error instanceof DummyJsonApiError) {
      return {
        ok: false,
        title: messages.errors.deleteFailedTitle,
        description: error.message || messages.errors.deleteFailedDescription,
      };
    }

    return {
      ok: false,
      title: messages.errors.deleteFailedTitle,
      description: messages.errors.deleteFailedDescription,
    };
  }
}
