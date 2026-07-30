import type { LoginFieldErrors, LoginFormValues, LoginMessages } from "../types";

export function validateLoginForm(
  values: LoginFormValues,
  messages: LoginMessages["validation"]
): LoginFieldErrors {
  const errors: LoginFieldErrors = {};

  if (!values.email.trim()) {
    errors.email = messages.required;
  }

  if (!values.password) {
    errors.password = messages.required;
  }

  return errors;
}
