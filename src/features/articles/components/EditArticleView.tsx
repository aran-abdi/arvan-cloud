import "server-only";

import { notFound } from "next/navigation";
import {
  DummyJsonApiError,
  fetchDummyJsonPost,
  fetchDummyJsonPostTagList,
} from "@/lib/api/dummyjson";
import { getArticlesMessages } from "../i18n/getArticlesMessages";
import type { CreateArticleFormValues } from "../types";
import { CreateArticleForm } from "./CreateArticleForm";
import { defaultLocale } from "@/i18n";

export type EditArticleViewProps = {
  articleId: number;
};

export async function EditArticleView({ articleId }: EditArticleViewProps) {
  const messages = await getArticlesMessages(defaultLocale);

  let initialTags: string[] = [];
  let initialValues: CreateArticleFormValues;

  try {
    const [post, tagList] = await Promise.all([
      fetchDummyJsonPost(articleId),
      fetchDummyJsonPostTagList(),
    ]);

    initialTags = tagList;
    initialValues = {
      title: post.title,
      description: "",
      body: post.body,
      tags: post.tags ?? [],
    };
  } catch (error) {
    if (error instanceof DummyJsonApiError && error.status === 404) {
      notFound();
    }

    if (error instanceof DummyJsonApiError) {
      return (
        <p role="alert">
          {messages.edit.errors.loadFailedTitle}{" "}
          {messages.edit.errors.loadFailedDescription}
        </p>
      );
    }

    throw error;
  }

  return (
    <CreateArticleForm
      messages={messages}
      initialTags={initialTags}
      initialValues={initialValues}
      mode="edit"
      articleId={articleId}
    />
  );
}
