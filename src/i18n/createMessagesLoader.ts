import "server-only";

import type { Locale } from "./config";
import { defaultLocale } from "./config";

export function createMessagesLoader<T>(
  loaders: Record<Locale, () => Promise<T>>
) {
  return async (locale: Locale = defaultLocale) => loaders[locale]();
}
