import { describe, expect, it } from "vitest";
import {
  ARTICLES_BASE_PATH,
  ARTICLES_CREATE_PATH,
  getArticleEditPath,
  getArticlesNoticePath,
  getArticlesPath,
  parseArticleIdParam,
  parseArticlesNotice,
  parseArticlesPageParam,
} from "./paths";

describe("getArticlesPath", () => {
  it("returns the base path for page 1 and below", () => {
    expect(getArticlesPath(1)).toBe(ARTICLES_BASE_PATH);
    expect(getArticlesPath(0)).toBe(ARTICLES_BASE_PATH);
    expect(getArticlesPath(-2)).toBe(ARTICLES_BASE_PATH);
  });

  it("returns /articles/page/:page for pages above 1", () => {
    expect(getArticlesPath(2)).toBe(`${ARTICLES_BASE_PATH}/page/2`);
    expect(getArticlesPath(10)).toBe(`${ARTICLES_BASE_PATH}/page/10`);
  });
});

describe("getArticlesNoticePath", () => {
  it("appends notice query params for create and update", () => {
    expect(getArticlesNoticePath("created")).toBe(
      `${ARTICLES_BASE_PATH}?notice=created`
    );
    expect(getArticlesNoticePath("updated")).toBe(
      `${ARTICLES_BASE_PATH}?notice=updated`
    );
  });
});

describe("parseArticlesNotice", () => {
  it("accepts created and updated notices", () => {
    expect(parseArticlesNotice("created")).toBe("created");
    expect(parseArticlesNotice("updated")).toBe("updated");
    expect(parseArticlesNotice(["created"])).toBe("created");
  });

  it("rejects invalid values", () => {
    expect(parseArticlesNotice("deleted")).toBeNull();
    expect(parseArticlesNotice(undefined)).toBeNull();
    expect(parseArticlesNotice("")).toBeNull();
  });
});

describe("getArticleEditPath", () => {
  it("returns /articles/:id/edit", () => {
    expect(getArticleEditPath(4)).toBe(`${ARTICLES_BASE_PATH}/4/edit`);
  });
});

describe("ARTICLES_CREATE_PATH", () => {
  it("points at the create article route", () => {
    expect(ARTICLES_CREATE_PATH).toBe(`${ARTICLES_BASE_PATH}/create`);
  });
});

describe("parseArticlesPageParam", () => {
  it("parses positive integer page strings", () => {
    expect(parseArticlesPageParam("1")).toBe(1);
    expect(parseArticlesPageParam("12")).toBe(12);
  });

  it("rejects invalid values", () => {
    expect(parseArticlesPageParam("0")).toBeNull();
    expect(parseArticlesPageParam("-1")).toBeNull();
    expect(parseArticlesPageParam("1.5")).toBeNull();
    expect(parseArticlesPageParam("abc")).toBeNull();
    expect(parseArticlesPageParam("")).toBeNull();
  });
});

describe("parseArticleIdParam", () => {
  it("parses positive integer ids", () => {
    expect(parseArticleIdParam("1")).toBe(1);
    expect(parseArticleIdParam("42")).toBe(42);
  });

  it("rejects invalid values", () => {
    expect(parseArticleIdParam("0")).toBeNull();
    expect(parseArticleIdParam("-1")).toBeNull();
    expect(parseArticleIdParam("abc")).toBeNull();
  });
});
