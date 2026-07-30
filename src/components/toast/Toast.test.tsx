import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { TOAST } from "@/constants";
import { Toast } from "./Toast";

describe("Toast", () => {
  beforeEach(() => {
    vi.useFakeTimers({
      toFake: ["setTimeout", "clearTimeout"],
    });
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("exposes status live region attributes", () => {
    render(<Toast type="Success" title="Saved" description="All good" />);

    const toast = screen.getByRole("status");
    expect(toast).toHaveAttribute("aria-live", "polite");
    expect(toast).toHaveAttribute("aria-atomic", "true");
    expect(toast).toHaveAttribute("data-type", "Success");
    expect(toast).toHaveAttribute("data-action", "false");
    expect(screen.getByText("Saved")).toBeInTheDocument();
    expect(screen.getByText("All good")).toBeInTheDocument();
  });

  it("auto-dismisses after the configured delay when action is false", async () => {
    const onDismiss = vi.fn();

    render(<Toast type="Error" title="Failed" onDismiss={onDismiss} />);

    expect(screen.getByRole("status")).toBeInTheDocument();

    await act(async () => {
      vi.advanceTimersByTime(TOAST.autoDismissMs);
    });

    expect(screen.queryByRole("status")).not.toBeInTheDocument();
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it("dismisses on pointer down when action is true", async () => {
    vi.useRealTimers();
    const user = userEvent.setup();
    const onDismiss = vi.fn();

    render(
      <Toast
        type="Success"
        title="Undo available"
        action
        onDismiss={onDismiss}
      />
    );

    await user.click(screen.getByRole("status"));

    expect(screen.queryByRole("status")).not.toBeInTheDocument();
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it("dismisses with Enter when action is true", async () => {
    vi.useRealTimers();
    const user = userEvent.setup();
    const onDismiss = vi.fn();

    render(
      <Toast type="Error" title="Retry" action onDismiss={onDismiss} />
    );

    const toast = screen.getByRole("status");
    toast.focus();
    await user.keyboard("{Enter}");

    expect(screen.queryByRole("status")).not.toBeInTheDocument();
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });
});
