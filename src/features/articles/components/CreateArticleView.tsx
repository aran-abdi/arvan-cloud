import "server-only";

import {
  DummyJsonApiError,
  fetchDummyJsonPostTagList,
} from "@/lib/api/dummyjson";
import { getArticlesMessages } from "../i18n/getArticlesMessages";
import { CreateArticleForm } from "./CreateArticleForm";
import { defaultLocale } from "@/i18n";

export async function CreateArticleView() {
  const messages = await getArticlesMessages(defaultLocale);

  let initialTags: string[] = [];

  try {
    initialTags = await fetchDummyJsonPostTagList();
  } catch (error) {
    if (!(error instanceof DummyJsonApiError)) {
      throw error;
    }
    initialTags = [];
  }

  return <CreateArticleForm messages={messages} initialTags={initialTags} />;
}
