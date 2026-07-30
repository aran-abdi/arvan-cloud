import { dummyJsonFetch } from "./client";
import type { DummyJsonUser, DummyJsonUsersResponse } from "./types";

export async function findDummyJsonUsersByEmail(
  email: string
): Promise<DummyJsonUser[]> {
  const response = await dummyJsonFetch<DummyJsonUsersResponse>(
    `/users/filter?key=email&value=${encodeURIComponent(email)}`
  );

  return response.users;
}

export async function getDummyJsonUserById(id: number): Promise<DummyJsonUser> {
  return dummyJsonFetch<DummyJsonUser>(`/users/${id}`);
}

export type CreateDummyJsonUserInput = {
  username: string;
  email: string;
  password: string;
};

export async function createDummyJsonUser(
  input: CreateDummyJsonUserInput
): Promise<DummyJsonUser> {
  return dummyJsonFetch<DummyJsonUser>("/users/add", {
    method: "POST",
    body: input,
  });
}
