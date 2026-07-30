import { describe, expect, it } from "vitest";
import {
  formatAuthor,
  formatTags,
  getExcerpt,
  getMockCreatedDate,
} from "./mapPost";

describe("getExcerpt", () => {
  it("returns the first 12 words with an ellipsis when longer", () => {
    const body = Array.from({ length: 20 }, (_, i) => `w${i + 1}`).join(" ");
    expect(getExcerpt(body)).toBe(
      "w1 w2 w3 w4 w5 w6 w7 w8 w9 w10 w11 w12…"
    );
  });

  it("returns the full body when it is short", () => {
    expect(getExcerpt("one two three")).toBe("one two three");
  });
});

describe("formatAuthor", () => {
  it("prefixes username with @", () => {
    expect(formatAuthor("emilys", 1)).toBe("@emilys");
  });

  it("falls back to user id when username is missing", () => {
    expect(formatAuthor(undefined, 42)).toBe("@user_42");
  });
});

describe("formatTags", () => {
  it("joins tags with commas", () => {
    expect(formatTags(["history", "crime"])).toBe("history, crime");
  });
});

describe("getMockCreatedDate", () => {
  it("returns a stable ISO date for a post id", () => {
    expect(getMockCreatedDate(1)).toBe("2024-01-01");
    expect(getMockCreatedDate(1)).toBe(getMockCreatedDate(1));
  });
});
