import "server-only";

import { createMessagesLoader } from "@/i18n/createMessagesLoader";
import type enDashboard from "./en.json";

export type DashboardMessages = typeof enDashboard;

export const getDashboardMessages = createMessagesLoader<DashboardMessages>({
  en: async () => (await import("./en.json")).default,
  fa: async () => (await import("./fa.json")).default,
});
