import "server-only";

import { createMessagesLoader } from "@/i18n/createMessagesLoader";
import { getAuthValidation } from "../../shared/i18n/getAuthValidation";
import type { LoginMessages } from "../types";

export const getLoginMessages = createMessagesLoader<LoginMessages>({
  en: async () => ({
    login: (await import("./en.json")).default,
    validation: await getAuthValidation("en"),
  }),
  fa: async () => ({
    login: (await import("./fa.json")).default,
    validation: await getAuthValidation("fa"),
  }),
});
