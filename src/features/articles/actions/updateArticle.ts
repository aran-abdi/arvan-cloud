"use server";

import { redirect } from "next/navigation";
import { DummyJsonApiError, updateDummyJsonPost } from "@/lib/api/dummyjson";
import { getArticlesMessages } from "../i18n/getArticlesMessages";
import { defaultLocale } from "@/i18n";
import { getArticlesNoticePath } from "../lib/paths";
import type { CreateArticleFormValues } from "../types";

export type UpdateArticleResult =
  | { ok: false; title: string; description: string };

function buildPostBody(values: CreateArticleFormValues): string {
  const description = values.description.trim();
  const body = values.body.trim();

  if (description && body) {
    return `${description}\n\n${body}`;
  }

  return description || body;
}

export async function updateArticleAction(
  id: number,
  values: CreateArticleFormValues
): Promise<UpdateArticleResult> {
  const messages = await getArticlesMessages(defaultLocale);
  const { edit } = messages;

  try {
    await updateDummyJsonPost(id, {
      title: values.title.trim(),
      body: buildPostBody(values),
      tags: values.tags,
    });
  } catch (error) {
    if (error instanceof DummyJsonApiError) {
      return {
        ok: false,
        title: edit.errors.updateFailedTitle,
        description: error.message || edit.errors.updateFailedDescription,
      };
    }

    return {
      ok: false,
      title: edit.errors.updateFailedTitle,
      description: edit.errors.updateFailedDescription,
    };
  }

  redirect(getArticlesNoticePath("updated"));
}
