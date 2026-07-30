import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  it("renders text layout with the given label", () => {
    render(
      <Button variant="Primary" layout="Text">
        Save
      </Button>
    );

    const button = screen.getByRole("button", { name: "Save" });
    expect(button).toHaveAttribute("data-variant", "Primary");
    expect(button).toHaveAttribute("data-layout", "Text");
    expect(button).toHaveAttribute("data-loading", "false");
  });

  it("renders icon layout with accessible name from children", () => {
    render(
      <Button variant="Secondary" layout="Icon" aria-label="Close">
        Close
      </Button>
    );

    expect(screen.getByRole("button", { name: "Close" })).toHaveAttribute(
      "data-layout",
      "Icon"
    );
  });

  it("calls onClick when enabled", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <Button variant="Primary" layout="Text" onClick={onClick}>
        Save
      </Button>
    );

    await user.click(screen.getByRole("button", { name: "Save" }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", () => {
    const onClick = vi.fn();

    render(
      <Button variant="Primary" layout="Text" disabled onClick={onClick}>
        Save
      </Button>
    );

    const button = screen.getByRole("button", { name: "Save" });
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-disabled", "true");
  });

  it("disables interaction and sets busy state while loading", () => {
    const onClick = vi.fn();

    render(
      <Button
        variant="Primary"
        layout="Text"
        loading
        aria-label="Save"
        onClick={onClick}
      >
        Save
      </Button>
    );

    const button = screen.getByRole("button", { name: "Save" });
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-busy", "true");
    expect(button).toHaveAttribute("aria-disabled", "true");
    expect(button).toHaveAttribute("data-loading", "true");
  });
});
