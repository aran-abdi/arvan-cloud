import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HeaderContent } from "./HeaderContent";
import { Section } from "./Section";
import { SectionBody } from "./SectionBody";
import { SectionHeader } from "./SectionHeader";

describe("Section", () => {
  it("composes header and body content", () => {
    render(
      <Section aria-label="Users section">
        <SectionHeader title="Users" description="Manage accounts" />
        <SectionBody>Content</SectionBody>
      </Section>
    );

    expect(
      screen.getByRole("region", { name: "Users section" })
    ).toBeInTheDocument();
    expect(screen.getByText("Users")).toBeInTheDocument();
    expect(screen.getByText("Manage accounts")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
  });
});

describe("HeaderContent", () => {
  it("renders the title and optional description", () => {
    const { rerender } = render(
      <HeaderContent title="Users" description="Manage accounts" />
    );

    expect(screen.getByText("Users")).toBeInTheDocument();
    expect(screen.getByText("Manage accounts")).toBeInTheDocument();

    rerender(<HeaderContent title="Users" description="" />);
    expect(screen.queryByText("Manage accounts")).not.toBeInTheDocument();
  });

  it("omits description when undefined", () => {
    render(<HeaderContent title="Users" />);

    expect(screen.getByText("Users")).toBeInTheDocument();
    expect(screen.queryByText("Manage accounts")).not.toBeInTheDocument();
  });
});
