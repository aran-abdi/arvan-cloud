"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState, type FormEvent, type KeyboardEvent } from "react";
import {
  Button,
  Checkbox,
  Input,
  Section,
  SectionBody,
  SectionHeader,
  Textarea,
  useToast,
} from "@/components";
import { cn } from "@/lib/cn";
import { createArticleAction } from "../actions/createArticle";
import { updateArticleAction } from "../actions/updateArticle";
import { getArticlesPath } from "../lib/paths";
import type {
  ArticleTagOption,
  ArticlesMessages,
  CreateArticleFieldErrors,
  CreateArticleFormValues,
} from "../types";
import { validateCreateArticleForm } from "../validation/validateCreateArticleForm";
import styles from "./CreateArticleForm.module.css";

export type ArticleFormMode = "create" | "edit";

export type CreateArticleFormProps = {
  messages: ArticlesMessages;
  initialTags: string[];
  mode?: ArticleFormMode;
  articleId?: number;
  initialValues?: CreateArticleFormValues;
};

function sortTags(tags: ArticleTagOption[]): ArticleTagOption[] {
  return [...tags].sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
  );
}

function buildInitialTags(
  allTags: string[],
  selectedTags: string[] = []
): ArticleTagOption[] {
  const selected = new Set(selectedTags.map((tag) => tag.toLowerCase()));
  const merged = new Set([...allTags, ...selectedTags]);

  return sortTags(
    [...merged].map((name) => ({
      name,
      checked: selected.has(name.toLowerCase()),
    }))
  );
}

export function CreateArticleForm({
  messages,
  initialTags,
  mode = "create",
  articleId,
  initialValues,
}: CreateArticleFormProps) {
  const router = useRouter();
  const { showToast } = useToast();
  const create = messages.create;
  const isEdit = mode === "edit";

  const [values, setValues] = useState<Omit<CreateArticleFormValues, "tags">>({
    title: initialValues?.title ?? "",
    description: initialValues?.description ?? "",
    body: initialValues?.body ?? "",
  });
  const [tags, setTags] = useState<ArticleTagOption[]>(() =>
    buildInitialTags(initialTags, initialValues?.tags ?? [])
  );
  const [newTag, setNewTag] = useState("");
  const [errors, setErrors] = useState<CreateArticleFieldErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const selectedTags = useMemo(
    () => tags.filter((tag) => tag.checked).map((tag) => tag.name),
    [tags]
  );

  const pageTitle = isEdit ? messages.edit.title : create.title;
  const submitLabel = isEdit ? messages.edit.submit : create.submit;

  const clearTitleError = () => {
    if (errors.title) {
      setErrors((current) => ({ ...current, title: undefined }));
    }
  };

  const addNewTag = () => {
    const name = newTag.trim();
    if (!name) return;

    setTags((current) => {
      const exists = current.some(
        (tag) => tag.name.toLowerCase() === name.toLowerCase()
      );

      if (exists) {
        return sortTags(
          current.map((tag) =>
            tag.name.toLowerCase() === name.toLowerCase()
              ? { ...tag, checked: true }
              : tag
          )
        );
      }

      return sortTags([...current, { name, checked: true }]);
    });
    setNewTag("");
  };

  const handleNewTagKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    addNewTag();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextValues: CreateArticleFormValues = {
      ...values,
      tags: selectedTags,
    };
    const nextErrors = validateCreateArticleForm(nextValues, create);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    try {
      const result =
        isEdit && articleId !== undefined
          ? await updateArticleAction(articleId, nextValues)
          : await createArticleAction(nextValues);

      if (result.ok) {
        showToast({
          type: "Success",
          title: result.title,
          description: result.description,
        });
        router.replace(getArticlesPath(1));
        router.refresh();
        return;
      }

      showToast({
        type: "Error",
        title: result.title,
        description: result.description,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.layout}>
      <Section className={styles.formSection}>
        <SectionHeader className={styles.header} title={pageTitle} />
        <SectionBody className={styles.body}>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <Input
              id="article-title"
              name="title"
              label={create.titleLabel}
              placeholder={create.titlePlaceholder}
              value={values.title}
              error={Boolean(errors.title)}
              message={errors.title}
              disabled={submitting}
              onChange={(event) => {
                setValues((current) => ({
                  ...current,
                  title: event.target.value,
                }));
                clearTitleError();
              }}
            />

            <Input
              id="article-description"
              name="description"
              label={create.descriptionLabel}
              placeholder={create.descriptionPlaceholder}
              value={values.description}
              disabled={submitting}
              onChange={(event) => {
                setValues((current) => ({
                  ...current,
                  description: event.target.value,
                }));
              }}
            />

            <Textarea
              id="article-body"
              name="body"
              label={create.bodyLabel}
              value={values.body}
              disabled={submitting}
              minHeight={160}
              onChange={(event) => {
                setValues((current) => ({
                  ...current,
                  body: event.target.value,
                }));
              }}
            />

            <Button
              type="submit"
              variant="Primary"
              layout="Text"
              className={styles.submit}
              loading={submitting}
              disabled={submitting}
            >
              {submitLabel}
            </Button>
          </form>
        </SectionBody>
      </Section>

      <Section className={styles.tagsSection}>
        <SectionHeader className={styles.header} title={create.tagsTitle} />
        <SectionBody className={cn(styles.body, styles.tagsBody)}>
          <Input
            id="article-new-tag"
            name="newTag"
            showLabel={false}
            placeholder={create.newTagPlaceholder}
            value={newTag}
            disabled={submitting}
            onChange={(event) => setNewTag(event.target.value)}
            onKeyDown={handleNewTagKeyDown}
          />

          <div
            className={styles.tagList}
            role="group"
            aria-label={create.tagsTitle}
          >
            {tags.length === 0 ? (
              <p className={styles.tagEmpty}>—</p>
            ) : (
              tags.map((tag) => (
                <Checkbox
                  key={tag.name}
                  value={tag.checked ? "On" : "Off"}
                  label={tag.name}
                  disabled={submitting}
                  onValueChange={(next) => {
                    setTags((current) =>
                      current.map((item) =>
                        item.name === tag.name
                          ? { ...item, checked: next === "On" }
                          : item
                      )
                    );
                  }}
                />
              ))
            )}
          </div>
        </SectionBody>
      </Section>
    </div>
  );
}
