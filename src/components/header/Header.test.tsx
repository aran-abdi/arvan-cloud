import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Header } from "./Header";

describe("Header", () => {
  it("renders a banner landmark with children", () => {
    render(<Header>App header</Header>);

    expect(screen.getByRole("banner")).toHaveTextContent("App header");
  });

  it("defaults to fixed and can be unfixed", () => {
    const { rerender } = render(<Header>App header</Header>);

    expect(screen.getByRole("banner")).toHaveAttribute("data-fixed", "true");

    rerender(<Header fixed={false}>App header</Header>);
    expect(screen.getByRole("banner")).toHaveAttribute("data-fixed", "false");
  });
});
