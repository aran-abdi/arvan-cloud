import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Modal } from "./Modal";
import { ModalBody } from "./ModalBody";
import { ModalFooter } from "./ModalFooter";
import { ModalHeader } from "./ModalHeader";

describe("Modal", () => {
  it("renders a dialog when open", () => {
    render(
      <Modal open size={600}>
        <ModalHeader>Title</ModalHeader>
        <ModalBody>Body content</ModalBody>
        <ModalFooter>Footer</ModalFooter>
      </Modal>
    );

    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveAttribute("aria-modal", "true");
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Body content")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  it("returns null when closed", () => {
    const { container } = render(
      <Modal open={false} size={600}>
        Hidden
      </Modal>
    );

    expect(container).toBeEmptyDOMElement();
  });

  it("calls onClose when the backdrop is pressed", () => {
    const onClose = vi.fn();

    render(
      <Modal open size={600} onClose={onClose}>
        Content
      </Modal>
    );

    fireEvent.mouseDown(screen.getByRole("dialog"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("does not close when pressing inside the panel", () => {
    const onClose = vi.fn();

    render(
      <Modal open size={600} onClose={onClose}>
        Content
      </Modal>
    );

    fireEvent.mouseDown(screen.getByText("Content"));
    expect(onClose).not.toHaveBeenCalled();
  });

  it("renders inline without a modal overlay", () => {
    render(
      <Modal inline size={456}>
        Preview
      </Modal>
    );

    expect(screen.getByRole("dialog")).toHaveAttribute("aria-modal", "false");
    expect(screen.getByText("Preview")).toBeInTheDocument();
  });
});
