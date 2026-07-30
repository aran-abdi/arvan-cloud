"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Button, Input } from "@/components";
import authFormStyles from "@/features/auth/shared/AuthForm.module.css";
import type { LoginFormValues, LoginMessages } from "../types";
import { validateLoginForm } from "../validation/validateLoginForm";

export type LoginFormProps = {
  messages: LoginMessages;
  signUpHref?: string;
  onSubmit?: (values: LoginFormValues) => void | Promise<void>;
};

export function LoginForm({
  messages,
  signUpHref = "/register",
  onSubmit,
}: LoginFormProps) {
  const [values, setValues] = useState<LoginFormValues>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof LoginFormValues, string>>
  >({});
  const [submitting, setSubmitting] = useState(false);

  const { login, validation } = messages;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validateLoginForm(values, validation);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    try {
      await onSubmit?.(values);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={authFormStyles.page}>
      <div className={authFormStyles.card}>
        <header className={authFormStyles.header}>
          <h1 className={authFormStyles.title}>{login.title}</h1>
        </header>

        <form className={authFormStyles.body} onSubmit={handleSubmit} noValidate>
          <div className={authFormStyles.fields}>
            <Input
              id="login-email"
              name="email"
              type="email"
              autoComplete="email"
              label={login.emailLabel}
              placeholder={login.emailPlaceholder}
              value={values.email}
              error={Boolean(errors.email)}
              message={errors.email}
              onChange={(event) => {
                const email = event.target.value;
                setValues((current) => ({ ...current, email }));
                if (errors.email) {
                  setErrors((current) => ({ ...current, email: undefined }));
                }
              }}
            />

            <Input
              id="login-password"
              name="password"
              type="password"
              autoComplete="current-password"
              label={login.passwordLabel}
              placeholder={login.passwordPlaceholder}
              value={values.password}
              error={Boolean(errors.password)}
              message={errors.password}
              onChange={(event) => {
                const password = event.target.value;
                setValues((current) => ({ ...current, password }));
                if (errors.password) {
                  setErrors((current) => ({
                    ...current,
                    password: undefined,
                  }));
                }
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
            {login.submit}
          </Button>

          <p className={authFormStyles.footer}>
            <span>{login.noAccount}</span>
            <Link href={signUpHref} className={authFormStyles.footerLink}>
              {login.signUp}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
