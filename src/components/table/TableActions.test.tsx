import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { DropDownElement } from "@/components/menu";
import { TableActions } from "./TableActions";

describe("TableActions", () => {
  it("opens the menu and exposes trigger a11y attributes", async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();

    render(
      <TableActions label="Row actions" onOpenChange={onOpenChange}>
        <DropDownElement>Edit</DropDownElement>
        <DropDownElement>Delete</DropDownElement>
      </TableActions>
    );

    const trigger = screen.getByRole("button", { name: "Row actions" });
    expect(trigger).toHaveAttribute("aria-haspopup", "menu");
    expect(trigger).toHaveAttribute("aria-expanded", "false");

    await user.click(trigger);

    expect(onOpenChange).toHaveBeenCalledWith(true);
    expect(await screen.findByRole("menu")).toBeInTheDocument();
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("button", { name: "Edit" })).toBeInTheDocument();
  });

  it("closes when Escape is pressed", async () => {
    const user = userEvent.setup();

    render(
      <TableActions defaultOpen>
        <DropDownElement>Edit</DropDownElement>
      </TableActions>
    );

    expect(await screen.findByRole("menu")).toBeInTheDocument();

    await user.keyboard("{Escape}");

    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("closes when a menu item is clicked", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <TableActions defaultOpen>
        <DropDownElement onClick={onClick}>Delete</DropDownElement>
      </TableActions>
    );

    await user.click(await screen.findByRole("button", { name: "Delete" }));

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("respects controlled open state", async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();

    const { rerender } = render(
      <TableActions open={false} onOpenChange={onOpenChange}>
        <DropDownElement>Edit</DropDownElement>
      </TableActions>
    );

    await user.click(screen.getByRole("button", { name: "Row actions" }));
    expect(onOpenChange).toHaveBeenCalledWith(true);
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();

    rerender(
      <TableActions open onOpenChange={onOpenChange}>
        <DropDownElement>Edit</DropDownElement>
      </TableActions>
    );

    expect(await screen.findByRole("menu")).toBeInTheDocument();
  });

  it("does not portal a menu when the trigger is display:none", async () => {
    render(
      <div style={{ display: "none" }}>
        <TableActions defaultOpen>
          <DropDownElement>Edit</DropDownElement>
        </TableActions>
      </div>
    );

    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });
});
