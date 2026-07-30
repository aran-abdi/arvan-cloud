import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  it("exposes the correct checked state for each value", () => {
    const { rerender } = render(<Checkbox value="Off" aria-label="Accept" />);
    expect(screen.getByRole("checkbox", { name: "Accept" })).toHaveAttribute(
      "aria-checked",
      "false"
    );

    rerender(<Checkbox value="On" aria-label="Accept" />);
    expect(screen.getByRole("checkbox", { name: "Accept" })).toHaveAttribute(
      "aria-checked",
      "true"
    );

    rerender(<Checkbox value="Indeterminate" aria-label="Accept" />);
    expect(screen.getByRole("checkbox", { name: "Accept" })).toHaveAttribute(
      "aria-checked",
      "mixed"
    );
  });

  it("toggles Off to On on click", async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();

    render(
      <Checkbox value="Off" onValueChange={onValueChange} aria-label="Accept" />
    );

    await user.click(screen.getByRole("checkbox", { name: "Accept" }));
    expect(onValueChange).toHaveBeenCalledWith("On");
  });

  it("toggles On to Off on click", async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();

    render(
      <Checkbox value="On" onValueChange={onValueChange} aria-label="Accept" />
    );

    await user.click(screen.getByRole("checkbox", { name: "Accept" }));
    expect(onValueChange).toHaveBeenCalledWith("Off");
  });

  it("moves Indeterminate to On on click", async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();

    render(
      <Checkbox
        value="Indeterminate"
        onValueChange={onValueChange}
        aria-label="Accept"
      />
    );

    await user.click(screen.getByRole("checkbox", { name: "Accept" }));
    expect(onValueChange).toHaveBeenCalledWith("On");
  });

  it("does not call onValueChange when disabled", async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();

    render(
      <Checkbox
        value="Off"
        disabled
        onValueChange={onValueChange}
        aria-label="Accept"
      />
    );

    await user.click(screen.getByRole("checkbox", { name: "Accept" }));
    expect(onValueChange).not.toHaveBeenCalled();
  });

  it("toggles with Space and Enter", async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();

    render(
      <Checkbox value="Off" onValueChange={onValueChange} aria-label="Accept" />
    );

    const checkbox = screen.getByRole("checkbox", { name: "Accept" });
    checkbox.focus();

    await user.keyboard(" ");
    expect(onValueChange).toHaveBeenCalledWith("On");

    onValueChange.mockClear();
    await user.keyboard("{Enter}");
    expect(onValueChange).toHaveBeenCalledWith("On");
  });

  it("renders an associated label when provided", () => {
    render(<Checkbox value="Off" label="Accept terms" />);

    expect(screen.getByText("Accept terms")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });
});
