import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Pagination } from "./Pagination";

describe("Pagination", () => {
  it("marks the current page and exposes navigation labels", () => {
    render(
      <Pagination totalPages={5} currentPage={3} onPageChange={vi.fn()} />
    );

    expect(screen.getByRole("button", { name: "Page 3" })).toHaveAttribute(
      "aria-current",
      "page"
    );
    expect(
      screen.getByRole("button", { name: "Previous page" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Next page" })
    ).toBeInTheDocument();
  });

  it("calls onPageChange when a page is selected", async () => {
    const user = userEvent.setup();
    const onPageChange = vi.fn();

    render(
      <Pagination totalPages={5} currentPage={2} onPageChange={onPageChange} />
    );

    await user.click(screen.getByRole("button", { name: "Page 3" }));
    expect(onPageChange).toHaveBeenCalledWith(3);
  });

  it("navigates with previous and next controls", async () => {
    const user = userEvent.setup();
    const onPageChange = vi.fn();

    render(
      <Pagination totalPages={5} currentPage={3} onPageChange={onPageChange} />
    );

    await user.click(screen.getByRole("button", { name: "Previous page" }));
    expect(onPageChange).toHaveBeenCalledWith(2);

    onPageChange.mockClear();
    await user.click(screen.getByRole("button", { name: "Next page" }));
    expect(onPageChange).toHaveBeenCalledWith(4);
  });

  it("disables previous on the first page and next on the last page", () => {
    const { rerender } = render(
      <Pagination totalPages={5} currentPage={1} onPageChange={vi.fn()} />
    );

    expect(screen.getByRole("button", { name: "Previous page" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "Next page" })).toBeEnabled();

    rerender(
      <Pagination totalPages={5} currentPage={5} onPageChange={vi.fn()} />
    );

    expect(screen.getByRole("button", { name: "Previous page" })).toBeEnabled();
    expect(screen.getByRole("button", { name: "Next page" })).toBeDisabled();
  });

  it("disables all controls when disabled", () => {
    render(
      <Pagination
        totalPages={5}
        currentPage={3}
        disabled
        onPageChange={vi.fn()}
      />
    );

    expect(screen.getByRole("button", { name: "Previous page" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "Next page" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "Page 3" })).toBeDisabled();
  });

  it("renders ellipsis for large page ranges", () => {
    const { container } = render(
      <Pagination totalPages={10} currentPage={5} onPageChange={vi.fn()} />
    );

    expect(
      container.querySelectorAll('[aria-hidden="true"]').length
    ).toBeGreaterThan(0);
  });
});
