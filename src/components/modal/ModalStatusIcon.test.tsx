import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ModalStatusIcon } from "./ModalStatusIcon";

describe("ModalStatusIcon", () => {
  it("renders the success variant", () => {
    const { container } = render(<ModalStatusIcon variant="success" />);

    const wrapper = container.querySelector('[data-variant="success"]');
    expect(wrapper).toBeInTheDocument();
    expect(wrapper?.querySelector("svg")).toBeInTheDocument();
  });

  it("renders the failed variant", () => {
    const { container } = render(<ModalStatusIcon variant="failed" />);

    const wrapper = container.querySelector('[data-variant="failed"]');
    expect(wrapper).toBeInTheDocument();
    expect(wrapper?.querySelector("img")).toBeInTheDocument();
  });
});
