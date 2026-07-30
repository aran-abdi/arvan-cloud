import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Input } from "./Input";

describe("Input", () => {
  it("associates the label with the input when id is provided", () => {
    render(<Input id="email" label="Email" />);

    expect(screen.getByLabelText("Email")).toHaveAttribute("id", "email");
  });

  it("hides the label when showLabel is false", () => {
    render(<Input id="email" label="Email" showLabel={false} />);

    expect(screen.queryByText("Email")).not.toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("shows a required indicator and sets required on the input", () => {
    render(<Input id="email" label="Email" required />);

    expect(screen.getByText("*")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeRequired();
  });

  it("calls onChange when typing", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(<Input id="email" label="Email" onChange={onChange} />);

    await user.type(screen.getByRole("textbox"), "a");
    expect(onChange).toHaveBeenCalled();
  });

  it("marks the field invalid and alerts when error with message", () => {
    render(
      <Input id="email" label="Email" error message="Required field" />
    );

    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByRole("textbox")).toHaveAttribute(
      "aria-describedby",
      "email-message"
    );
    expect(screen.getByRole("alert")).toHaveTextContent("Required field");
  });

  it("supports disabled state", () => {
    render(<Input id="email" label="Email" disabled />);

    expect(screen.getByRole("textbox")).toBeDisabled();
  });
});
