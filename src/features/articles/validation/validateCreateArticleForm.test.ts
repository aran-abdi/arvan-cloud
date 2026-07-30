import { describe, expect, it } from "vitest";
import type { ArticlesMessages } from "../types";
import { validateCreateArticleForm } from "./validateCreateArticleForm";

const createMessages = {
  title: "New article",
  titleLabel: "Title",
  titlePlaceholder: "Title",
  descriptionLabel: "Description",
  descriptionPlaceholder: "Description",
  bodyLabel: "Body",
  tagsTitle: "Tags",
  newTagPlaceholder: "New tag",
  submit: "Submit",
  required: "Required field",
  errors: {
    createFailedTitle: "Create Failed!",
    createFailedDescription: "Could not create this article.",
    tagsLoadFailedTitle: "Failed to load tags",
    tagsLoadFailedDescription: "Try again.",
  },
  success: {
    title: "Article created!",
    description: "Submitted.",
  },
} satisfies ArticlesMessages["create"];

describe("validateCreateArticleForm", () => {
  it("requires a title", () => {
    expect(
      validateCreateArticleForm(
        { title: "  ", description: "d", body: "b", tags: [] },
        createMessages
      )
    ).toEqual({ title: "Required field" });
  });

  it("accepts a non-empty title", () => {
    expect(
      validateCreateArticleForm(
        { title: "Hello", description: "", body: "", tags: ["life"] },
        createMessages
      )
    ).toEqual({});
  });
});
