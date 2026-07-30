"use client";

import { useRouter } from "next/navigation";
import { useToast } from "@/components";
import { registerAction } from "@/features/auth/actions";
import { RegisterForm } from "./RegisterForm";
import type { RegisterFormValues, RegisterMessages } from "../types";

export type RegisterScreenProps = {
  messages: RegisterMessages;
};

export function RegisterScreen({ messages }: RegisterScreenProps) {
  const router = useRouter();
  const { showToast } = useToast();

  const handleSubmit = async (values: RegisterFormValues) => {
    const result = await registerAction(values);

    if (!result.ok) {
      showToast({
        type: "Error",
        title: result.title,
        description: result.description,
      });
      return;
    }

    showToast({
      type: "Success",
      title: messages.register.success.title,
      description: messages.register.success.description,
    });

    router.push("/login");
    router.refresh();
  };

  return <RegisterForm messages={messages} onSubmit={handleSubmit} />;
}
