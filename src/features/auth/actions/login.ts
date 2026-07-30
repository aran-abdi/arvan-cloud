"use server";

import {
  DummyJsonApiError,
  findDummyJsonUsersByEmail,
  loginWithDummyJson,
} from "@/lib/api/dummyjson";
import { createSession } from "@/features/auth/session";
import { getLoginMessages } from "@/features/auth/login/i18n/getLoginMessages";
import { defaultLocale } from "@/i18n";
import type { LoginFormValues } from "@/features/auth/login/types";
import type { AuthActionResult } from "./types";

async function resolveUsername(identifier: string): Promise<string | null> {
  const trimmed = identifier.trim();

  if (!trimmed.includes("@")) {
    return trimmed;
  }

  const users = await findDummyJsonUsersByEmail(trimmed);
  return users[0]?.username ?? null;
}

export async function loginAction(
  values: LoginFormValues
): Promise<AuthActionResult> {
  const messages = await getLoginMessages(defaultLocale);
  const { errors } = messages.login;

  try {
    const username = await resolveUsername(values.email);

    if (!username) {
      return {
        ok: false,
        title: errors.signInFailedTitle,
        description: errors.invalidCredentials,
      };
    }

    const user = await loginWithDummyJson({
      username,
      password: values.password,
    });

    await createSession({
      accessToken: user.accessToken,
      refreshToken: user.refreshToken,
    });

    return { ok: true };
  } catch (error) {
    if (
      error instanceof DummyJsonApiError &&
      (error.status === 400 || error.status === 401)
    ) {
      return {
        ok: false,
        title: errors.signInFailedTitle,
        description: errors.invalidCredentials,
      };
    }

    return {
      ok: false,
      title: errors.signInFailedTitle,
      description: errors.genericDescription,
    };
  }
}
