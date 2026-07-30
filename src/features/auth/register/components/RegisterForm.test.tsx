import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import type { RegisterMessages } from "../types";
import { RegisterForm } from "./RegisterForm";

const messages: RegisterMessages = {
  register: {
    title: "Sign up",
    usernameLabel: "Username",
    usernamePlaceholder: "johndoe",
    emailLabel: "Email",
    emailPlaceholder: "you@example.com",
    passwordLabel: "Password",
    passwordPlaceholder: "Create a password",
    submit: "Sign up",
    hasAccount: "Have an account?",
    signIn: "Sign in",
    errors: {
      signUpFailedTitle: "Sign-up Failed!",
      genericDescription: "Something went wrong. Please try again.",
    },
    success: {
      title: "Account created!",
      description: "Please sign in to continue.",
    },
  },
  validation: {
    required: "Required field",
  },
};

describe("RegisterForm", () => {
  it("renders localized labels and actions", () => {
    render(<RegisterForm messages={messages} />);

    expect(
      screen.getByRole("heading", { name: "Sign up" })
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Username")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Sign up" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Sign in" })).toHaveAttribute(
      "href",
      "/login"
    );
  });

  it("shows required field errors when submitted empty", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();

    render(<RegisterForm messages={messages} onSubmit={onSubmit} />);

    await user.click(screen.getByRole("button", { name: "Sign up" }));

    const alerts = screen.getAllByRole("alert");
    expect(alerts).toHaveLength(3);
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("submits valid values", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();

    render(<RegisterForm messages={messages} onSubmit={onSubmit} />);

    await user.type(screen.getByLabelText("Username"), "jane");
    await user.type(screen.getByLabelText("Email"), "jane@example.com");
    await user.type(screen.getByLabelText("Password"), "secret");
    await user.click(screen.getByRole("button", { name: "Sign up" }));

    expect(onSubmit).toHaveBeenCalledWith({
      username: "jane",
      email: "jane@example.com",
      password: "secret",
    });
  });
});
