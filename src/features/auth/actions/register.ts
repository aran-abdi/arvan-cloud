"use server";

import { createDummyJsonUser, DummyJsonApiError } from "@/lib/api/dummyjson";
import { getRegisterMessages } from "@/features/auth/register/i18n/getRegisterMessages";
import { defaultLocale } from "@/i18n";
import type { RegisterFormValues } from "@/features/auth/register/types";
import type { AuthActionResult } from "./types";

export async function registerAction(
  values: RegisterFormValues
): Promise<AuthActionResult> {
  const messages = await getRegisterMessages(defaultLocale);
  const { errors } = messages.register;

  try {
    await createDummyJsonUser({
      username: values.username.trim(),
      email: values.email.trim(),
      password: values.password,
    });

    return { ok: true };
  } catch (error) {
    if (error instanceof DummyJsonApiError) {
      return {
        ok: false,
        title: errors.signUpFailedTitle,
        description: error.message || errors.genericDescription,
      };
    }

    return {
      ok: false,
      title: errors.signUpFailedTitle,
      description: errors.genericDescription,
    };
  }
}
