"use server";

import {
  createDummyJsonPost,
  DummyJsonApiError,
  getCurrentDummyJsonUser,
} from "@/lib/api/dummyjson";
import { getAccessToken } from "@/features/auth/session";
import { getArticlesMessages } from "../i18n/getArticlesMessages";
import { defaultLocale } from "@/i18n";
import type { CreateArticleFormValues } from "../types";

export type CreateArticleResult =
  | { ok: true; title: string; description: string }
  | { ok: false; title: string; description: string };

function buildPostBody(values: CreateArticleFormValues): string {
  const description = values.description.trim();
  const body = values.body.trim();

  if (description && body) {
    return `${description}\n\n${body}`;
  }

  return description || body;
}

export async function createArticleAction(
  values: CreateArticleFormValues
): Promise<CreateArticleResult> {
  const messages = await getArticlesMessages(defaultLocale);
  const { create } = messages;

  try {
    const token = await getAccessToken();
    if (!token) {
      return {
        ok: false,
        title: create.errors.createFailedTitle,
        description: create.errors.createFailedDescription,
      };
    }

    const user = await getCurrentDummyJsonUser(token);

    await createDummyJsonPost({
      title: values.title.trim(),
      body: buildPostBody(values),
      userId: user.id,
      tags: values.tags,
    });

    return {
      ok: true,
      title: create.success.title,
      description: create.success.description,
    };
  } catch (error) {
    if (error instanceof DummyJsonApiError) {
      return {
        ok: false,
        title: create.errors.createFailedTitle,
        description: error.message || create.errors.createFailedDescription,
      };
    }

    return {
      ok: false,
      title: create.errors.createFailedTitle,
      description: create.errors.createFailedDescription,
    };
  }
}
