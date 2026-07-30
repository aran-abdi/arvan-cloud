import "server-only";

import { createMessagesLoader } from "@/i18n/createMessagesLoader";
import { getAuthValidation } from "../../shared/i18n/getAuthValidation";
import type { RegisterMessages } from "../types";

export const getRegisterMessages = createMessagesLoader<RegisterMessages>({
  en: async () => ({
    register: (await import("./en.json")).default,
    validation: await getAuthValidation("en"),
  }),
  fa: async () => ({
    register: (await import("./fa.json")).default,
    validation: await getAuthValidation("fa"),
  }),
});
