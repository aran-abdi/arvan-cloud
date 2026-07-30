import type enLogin from "./i18n/en.json";
import type enValidation from "../shared/i18n/en.json";

export type LoginMessages = {
  login: typeof enLogin;
  validation: typeof enValidation;
};

export type LoginFormValues = {
  email: string;
  password: string;
};

export type LoginFieldErrors = Partial<Record<keyof LoginFormValues, string>>;
