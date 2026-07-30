import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import type { LoginMessages } from "../types";
import { LoginScreen } from "./LoginScreen";

const push = vi.fn();
const refresh = vi.fn();
const loginAction = vi.fn();
const showToast = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push,
    refresh,
  }),
  useSearchParams: () => new URLSearchParams(),
}));

vi.mock("@/features/auth/actions", () => ({
  loginAction: (...args: unknown[]) => loginAction(...args),
}));

vi.mock("@/components", async () => {
  const actual = await vi.importActual<typeof import("@/components")>(
    "@/components"
  );
  return {
    ...actual,
    useToast: () => ({
      showToast,
      dismissToast: vi.fn(),
    }),
  };
});

const messages: LoginMessages = {
  login: {
    title: "Sign in",
    emailLabel: "Email",
    emailPlaceholder: "you@example.com",
    passwordLabel: "Password",
    passwordPlaceholder: "Enter your password",
    submit: "Sign in",
    noAccount: "Don't have an account?",
    signUp: "Sign up now",
    errors: {
      signInFailedTitle: "Sign-in Failed!",
      invalidCredentials: "Username and/or Password is invalid",
      genericDescription: "Something went wrong. Please try again.",
    },
  },
  validation: {
    required: "Required field",
  },
};

describe("LoginScreen", () => {
  beforeEach(() => {
    push.mockReset();
    refresh.mockReset();
    loginAction.mockReset();
    showToast.mockReset();
  });

  it("shows an error toast when login fails", async () => {
    const user = userEvent.setup();
    loginAction.mockResolvedValue({
      ok: false,
      title: "Sign-in Failed!",
      description: "Username and/or Password is invalid",
    });

    render(<LoginScreen messages={messages} />);

    await user.type(screen.getByLabelText("Email"), "wrong@example.com");
    await user.type(screen.getByLabelText("Password"), "badpass");
    await user.click(screen.getByRole("button", { name: "Sign in" }));

    await waitFor(() => {
      expect(showToast).toHaveBeenCalledWith({
        type: "Error",
        title: "Sign-in Failed!",
        description: "Username and/or Password is invalid",
      });
    });
    expect(push).not.toHaveBeenCalled();
  });

  it("navigates to articles on successful login", async () => {
    const user = userEvent.setup();
    loginAction.mockResolvedValue({ ok: true });

    render(<LoginScreen messages={messages} />);

    await user.type(
      screen.getByLabelText("Email"),
      "emily.johnson@x.dummyjson.com"
    );
    await user.type(screen.getByLabelText("Password"), "emilyspass");
    await user.click(screen.getByRole("button", { name: "Sign in" }));

    await waitFor(() => {
      expect(push).toHaveBeenCalledWith("/dashboard/articles");
    });
    expect(refresh).toHaveBeenCalled();
    expect(showToast).not.toHaveBeenCalled();
  });
});
