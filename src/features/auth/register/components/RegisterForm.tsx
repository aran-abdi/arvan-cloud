"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Button, Input } from "@/components";
import authFormStyles from "@/features/auth/shared/AuthForm.module.css";
import type { RegisterFormValues, RegisterMessages } from "../types";
import { validateRegisterForm } from "../validation/validateRegisterForm";

export type RegisterFormProps = {
  messages: RegisterMessages;
  signInHref?: string;
  onSubmit?: (values: RegisterFormValues) => void | Promise<void>;
};

export function RegisterForm({
  messages,
  signInHref = "/login",
  onSubmit,
}: RegisterFormProps) {
  const [values, setValues] = useState<RegisterFormValues>({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof RegisterFormValues, string>>
  >({});
  const [submitting, setSubmitting] = useState(false);

  const { register, validation } = messages;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validateRegisterForm(values, validation);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    try {
      await onSubmit?.(values);
    } finally {
      setSubmitting(false);
    }
  };

  const clearError = (field: keyof RegisterFormValues) => {
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  return (
    <div className={authFormStyles.page}>
      <div className={authFormStyles.card}>
        <header className={authFormStyles.header}>
          <h1 className={authFormStyles.title}>{register.title}</h1>
        </header>

        <form className={authFormStyles.body} onSubmit={handleSubmit} noValidate>
          <div className={authFormStyles.fields}>
            <Input
              id="register-username"
              name="username"
              type="text"
              autoComplete="username"
              label={register.usernameLabel}
              placeholder={register.usernamePlaceholder}
              value={values.username}
              error={Boolean(errors.username)}
              message={errors.username}
              onChange={(event) => {
                setValues((current) => ({
                  ...current,
                  username: event.target.value,
                }));
                clearError("username");
              }}
            />

            <Input
              id="register-email"
              name="email"
              type="email"
              autoComplete="email"
              label={register.emailLabel}
              placeholder={register.emailPlaceholder}
              value={values.email}
              error={Boolean(errors.email)}
              message={errors.email}
              onChange={(event) => {
                setValues((current) => ({
                  ...current,
                  email: event.target.value,
                }));
                clearError("email");
              }}
            />

            <Input
              id="register-password"
              name="password"
              type="password"
              autoComplete="new-password"
              label={register.passwordLabel}
              placeholder={register.passwordPlaceholder}
              value={values.password}
              error={Boolean(errors.password)}
              message={errors.password}
              onChange={(event) => {
                setValues((current) => ({
                  ...current,
                  password: event.target.value,
                }));
                clearError("password");
              }}
            />
          </div>

          <Button
            type="submit"
            variant="Primary"
            layout="Text"
            className={authFormStyles.submit}
            loading={submitting}
          >
            {register.submit}
          </Button>

          <p className={authFormStyles.footer}>
            <span>{register.hasAccount}</span>
            <Link href={signInHref} className={authFormStyles.footerLink}>
              {register.signIn}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
