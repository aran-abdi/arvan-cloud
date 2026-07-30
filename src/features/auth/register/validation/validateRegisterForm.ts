import type {
  RegisterFieldErrors,
  RegisterFormValues,
  RegisterMessages,
} from "../types";

export function validateRegisterForm(
  values: RegisterFormValues,
  messages: RegisterMessages["validation"]
): RegisterFieldErrors {
  const errors: RegisterFieldErrors = {};

  if (!values.username.trim()) {
    errors.username = messages.required;
  }

  if (!values.email.trim()) {
    errors.email = messages.required;
  }

  if (!values.password) {
    errors.password = messages.required;
  }

  return errors;
}
