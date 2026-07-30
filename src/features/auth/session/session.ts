import "server-only";

import { cookies } from "next/headers";
import { AUTH_TOKEN_EXPIRES_IN_MINS } from "@/lib/api/dummyjson/config";
import {
  ACCESS_TOKEN_COOKIE,
  REFRESH_TOKEN_COOKIE,
} from "./constants";

export { ACCESS_TOKEN_COOKIE, REFRESH_TOKEN_COOKIE };

const SESSION_MAX_AGE_SECONDS = AUTH_TOKEN_EXPIRES_IN_MINS * 60;

export type AuthSessionTokens = {
  accessToken: string;
  refreshToken: string;
};

function sessionCookieOptions(maxAge = SESSION_MAX_AGE_SECONDS) {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge,
  };
}

export async function createSession(tokens: AuthSessionTokens): Promise<void> {
  const cookieStore = await cookies();
  const options = sessionCookieOptions();

  cookieStore.set(ACCESS_TOKEN_COOKIE, tokens.accessToken, options);
  cookieStore.set(REFRESH_TOKEN_COOKIE, tokens.refreshToken, options);
}

export async function destroySession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(ACCESS_TOKEN_COOKIE);
  cookieStore.delete(REFRESH_TOKEN_COOKIE);
}

export async function getAccessToken(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get(ACCESS_TOKEN_COOKIE)?.value;
}

export async function getSessionTokens(): Promise<AuthSessionTokens | null> {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get(ACCESS_TOKEN_COOKIE)?.value;
  const refreshToken = cookieStore.get(REFRESH_TOKEN_COOKIE)?.value;

  if (!accessToken || !refreshToken) return null;

  return { accessToken, refreshToken };
}
