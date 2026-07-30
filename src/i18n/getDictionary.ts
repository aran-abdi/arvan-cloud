import "server-only";

import type { Locale } from "./config";
import { defaultLocale, isLocale } from "./config";
import type enCommon from "./dictionaries/en/common.json";

export type Dictionary = {
  common: typeof enCommon;
};

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: async () => ({
    common: (await import("./dictionaries/en/common.json")).default,
  }),
  fa: async () => ({
    common: (await import("./dictionaries/fa/common.json")).default,
  }),
};

export async function getDictionary(locale: Locale = defaultLocale) {
  return dictionaries[locale]();
}

export function resolveLocale(value?: string | null): Locale {
  if (value && isLocale(value)) return value;
  return defaultLocale;
}
