import "server-only";

import type { Locale } from "@/i18n";
import { defaultLocale } from "@/i18n";
import type enValidation from "./en.json";

export type AuthValidationMessages = typeof enValidation;

const validation = {
  en: () => import("./en.json").then((m) => m.default),
  fa: () => import("./fa.json").then((m) => m.default),
} as const satisfies Record<Locale, () => Promise<AuthValidationMessages>>;

export async function getAuthValidation(
  locale: Locale = defaultLocale
): Promise<AuthValidationMessages> {
  return validation[locale]();
}
