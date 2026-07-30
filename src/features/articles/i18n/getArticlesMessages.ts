import "server-only";

import { createMessagesLoader } from "@/i18n/createMessagesLoader";
import type { ArticlesMessages } from "../types";

export const getArticlesMessages = createMessagesLoader<ArticlesMessages>({
  en: async () => (await import("./en.json")).default,
  fa: async () => (await import("./fa.json")).default,
});
