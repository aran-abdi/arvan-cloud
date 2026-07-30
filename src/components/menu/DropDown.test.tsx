import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { DropDownContent } from "./DropDownContent";
import { DropDownElement } from "./DropDownElement";
import { DropDownMenu } from "./DropDownMenu";

describe("DropDownMenu", () => {
  it("renders menu contents when open", () => {
    render(
      <DropDownMenu open>
        <DropDownElement>Edit</DropDownElement>
      </DropDownMenu>
    );

    expect(screen.getByRole("menu")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Edit" })).toBeInTheDocument();
  });

  it("returns null when closed", () => {
    const { container } = render(
      <DropDownMenu open={false}>
        <DropDownElement>Edit</DropDownElement>
      </DropDownMenu>
    );

    expect(container).toBeEmptyDOMElement();
  });
});

describe("DropDownElement", () => {
  it("calls onClick when enabled", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<DropDownElement onClick={onClick}>Delete</DropDownElement>);

    await user.click(screen.getByRole("button", { name: "Delete" }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when disabled is set", () => {
    render(<DropDownElement disabled>Delete</DropDownElement>);

    const button = screen.getByRole("button", { name: "Delete" });
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-disabled", "true");
  });

  it("renders an optional icon", () => {
    render(
      <DropDownElement icon={<span data-testid="icon">★</span>}>
        Edit
      </DropDownElement>
    );

    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });
});

describe("DropDownContent", () => {
  it("renders the loading label", () => {
    render(<DropDownContent label="loading..." />);

    expect(screen.getByText("loading...")).toBeInTheDocument();
  });
});
