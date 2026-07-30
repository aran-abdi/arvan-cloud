import { AUTH_TOKEN_EXPIRES_IN_MINS } from "./config";
import { dummyJsonFetch } from "./client";
import type { DummyJsonAuthUser } from "./types";

export type LoginCredentials = {
  username: string;
  password: string;
  expiresInMins?: number;
};

export async function loginWithDummyJson(
  credentials: LoginCredentials
): Promise<DummyJsonAuthUser> {
  return dummyJsonFetch<DummyJsonAuthUser>("/auth/login", {
    method: "POST",
    body: {
      username: credentials.username,
      password: credentials.password,
      expiresInMins: credentials.expiresInMins ?? AUTH_TOKEN_EXPIRES_IN_MINS,
    },
  });
}

export async function getCurrentDummyJsonUser(
  accessToken: string
): Promise<Omit<DummyJsonAuthUser, "accessToken" | "refreshToken">> {
  return dummyJsonFetch("/auth/me", {
    method: "GET",
    accessToken,
  });
}
