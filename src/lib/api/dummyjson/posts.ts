import { dummyJsonFetch } from "./client";
import type { DummyJsonPost, DummyJsonPostsResponse } from "./types";

export type FetchPostsParams = {
  limit: number;
  skip: number;
};

export async function fetchDummyJsonPosts(
  params: FetchPostsParams
): Promise<DummyJsonPostsResponse> {
  const search = new URLSearchParams({
    limit: String(params.limit),
    skip: String(params.skip),
  });

  return dummyJsonFetch<DummyJsonPostsResponse>(`/posts?${search.toString()}`);
}

export async function fetchDummyJsonPost(id: number): Promise<DummyJsonPost> {
  return dummyJsonFetch<DummyJsonPost>(`/posts/${id}`);
}

export async function deleteDummyJsonPost(id: number): Promise<DummyJsonPost> {
  return dummyJsonFetch<DummyJsonPost>(`/posts/${id}`, {
    method: "DELETE",
  });
}

export type CreateDummyJsonPostInput = {
  title: string;
  body: string;
  userId: number;
  tags?: string[];
};

export async function createDummyJsonPost(
  input: CreateDummyJsonPostInput
): Promise<DummyJsonPost> {
  return dummyJsonFetch<DummyJsonPost>("/posts/add", {
    method: "POST",
    body: input,
  });
}

export type UpdateDummyJsonPostInput = {
  title?: string;
  body?: string;
  tags?: string[];
};

export async function updateDummyJsonPost(
  id: number,
  input: UpdateDummyJsonPostInput
): Promise<DummyJsonPost> {
  return dummyJsonFetch<DummyJsonPost>(`/posts/${id}`, {
    method: "PUT",
    body: input,
  });
}

export async function fetchDummyJsonPostTagList(): Promise<string[]> {
  const tags = await dummyJsonFetch<string[]>("/posts/tag-list");
  return [...tags].sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: "base" })
  );
}
