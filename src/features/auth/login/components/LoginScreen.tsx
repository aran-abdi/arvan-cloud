"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useToast } from "@/components";
import { loginAction } from "@/features/auth/actions";
import { LoginForm } from "./LoginForm";
import type { LoginFormValues, LoginMessages } from "../types";

export type LoginScreenProps = {
  messages: LoginMessages;
};

function resolveNextPath(next: string | null): string {
  if (!next || !next.startsWith("/") || next.startsWith("//")) {
    return "/dashboard/articles";
  }

  return next;
}

export function LoginScreen({ messages }: LoginScreenProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { showToast } = useToast();

  const handleSubmit = async (values: LoginFormValues) => {
    const result = await loginAction(values);

    if (!result.ok) {
      showToast({
        type: "Error",
        title: result.title,
        description: result.description,
      });
      return;
    }

    router.push(resolveNextPath(searchParams.get("next")));
    router.refresh();
  };

  return <LoginForm messages={messages} onSubmit={handleSubmit} />;
}
