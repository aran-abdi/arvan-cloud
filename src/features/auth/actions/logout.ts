"use server";

import { destroySession } from "@/features/auth/session";
import { redirect } from "next/navigation";

export async function logoutAction(): Promise<void> {
  await destroySession();
  redirect("/login?notice=loggedOut");
}
