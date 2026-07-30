import type enRegister from "./i18n/en.json";
import type enValidation from "../shared/i18n/en.json";

export type RegisterMessages = {
  register: typeof enRegister;
  validation: typeof enValidation;
};

export type RegisterFormValues = {
  username: string;
  email: string;
  password: string;
};

export type RegisterFieldErrors = Partial<
  Record<keyof RegisterFormValues, string>
>;
