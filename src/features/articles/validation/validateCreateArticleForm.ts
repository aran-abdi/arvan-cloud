import type {
  CreateArticleFieldErrors,
  CreateArticleFormValues,
  ArticlesMessages,
} from "../types";

export function validateCreateArticleForm(
  values: CreateArticleFormValues,
  messages: ArticlesMessages["create"]
): CreateArticleFieldErrors {
  const errors: CreateArticleFieldErrors = {};

  if (!values.title.trim()) {
    errors.title = messages.required;
  }

  return errors;
}
