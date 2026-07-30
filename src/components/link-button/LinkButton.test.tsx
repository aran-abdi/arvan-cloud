import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { LinkButton } from "./LinkButton";

describe("LinkButton", () => {
  it("renders as a button with the given label", () => {
    render(<LinkButton>Learn more</LinkButton>);

    expect(screen.getByRole("button", { name: "Learn more" })).toHaveAttribute(
      "type",
      "button"
    );
  });

  it("calls onClick when enabled", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<LinkButton onClick={onClick}>Learn more</LinkButton>);

    await user.click(screen.getByRole("button", { name: "Learn more" }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when disabled is set", () => {
    render(<LinkButton disabled>Learn more</LinkButton>);

    const button = screen.getByRole("button", { name: "Learn more" });
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-disabled", "true");
  });
});
