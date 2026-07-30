import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { ToastProvider, useToast } from "./ToastProvider";

function Trigger() {
  const { showToast } = useToast();

  return (
    <button
      type="button"
      onClick={() =>
        showToast({
          type: "Error",
          title: "Sign-in Failed!",
          description: "Username and/or Password is invalid",
        })
      }
    >
      Show
    </button>
  );
}

describe("ToastProvider", () => {
  it("renders a toast from showToast in the viewport", async () => {
    const user = userEvent.setup();

    render(
      <ToastProvider>
        <Trigger />
      </ToastProvider>
    );

    await user.click(screen.getByRole("button", { name: "Show" }));

    expect(screen.getByRole("status")).toBeInTheDocument();
    expect(screen.getByText("Sign-in Failed!")).toBeInTheDocument();
    expect(
      screen.getByText("Username and/or Password is invalid")
    ).toBeInTheDocument();
  });

  it("throws when useToast is used outside ToastProvider", () => {
    expect(() => render(<Trigger />)).toThrow(
      "useToast must be used within a ToastProvider"
    );
  });
});
