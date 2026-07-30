import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Sidebar } from "./Sidebar";
import { SidebarItem } from "./SidebarItem";

describe("Sidebar", () => {
  it("renders a complementary landmark with children", () => {
    render(
      <Sidebar>
        <SidebarItem>Users</SidebarItem>
      </Sidebar>
    );

    expect(screen.getByRole("complementary")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Users" })).toBeInTheDocument();
  });

  it("defaults to fixed and can be unfixed", () => {
    const { rerender } = render(<Sidebar>Nav</Sidebar>);

    expect(screen.getByRole("complementary")).toHaveAttribute(
      "data-fixed",
      "true"
    );

    rerender(<Sidebar fixed={false}>Nav</Sidebar>);
    expect(screen.getByRole("complementary")).toHaveAttribute(
      "data-fixed",
      "false"
    );
  });
});
