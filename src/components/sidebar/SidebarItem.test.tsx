import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { SidebarItem } from "./SidebarItem";

describe("SidebarItem", () => {
  it("calls onClick when enabled", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<SidebarItem onClick={onClick}>Users</SidebarItem>);

    await user.click(screen.getByRole("button", { name: "Users" }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("marks the selected item as the current page", () => {
    render(<SidebarItem selected>Users</SidebarItem>);

    const item = screen.getByRole("button", { name: "Users" });
    expect(item).toHaveAttribute("aria-current", "page");
    expect(item).toHaveAttribute("data-selected", "true");
  });

  it("is disabled when disabled is set", () => {
    render(<SidebarItem disabled>Admin</SidebarItem>);

    expect(screen.getByRole("button", { name: "Admin" })).toBeDisabled();
  });
});
