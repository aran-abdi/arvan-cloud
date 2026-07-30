import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import type { LoginMessages } from "../types";
import { LoginForm } from "./LoginForm";

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

describe("LoginForm", () => {
  it("renders localized labels and actions", () => {
    render(<LoginForm messages={messages} />);

    expect(
      screen.getByRole("heading", { name: "Sign in" })
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Sign in" })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Sign up now" })
    ).toHaveAttribute("href", "/register");
  });

  it("shows required field errors when submitted empty", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();

    render(<LoginForm messages={messages} onSubmit={onSubmit} />);

    await user.click(screen.getByRole("button", { name: "Sign in" }));

    const alerts = screen.getAllByRole("alert");
    expect(alerts).toHaveLength(2);
    expect(alerts[0]).toHaveTextContent("Required field");
    expect(alerts[1]).toHaveTextContent("Required field");
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("submits valid values", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();

    render(<LoginForm messages={messages} onSubmit={onSubmit} />);

    await user.type(screen.getByLabelText("Email"), "user@example.com");
    await user.type(screen.getByLabelText("Password"), "secret");
    await user.click(screen.getByRole("button", { name: "Sign in" }));

    expect(onSubmit).toHaveBeenCalledWith({
      email: "user@example.com",
      password: "secret",
    });
  });
});
