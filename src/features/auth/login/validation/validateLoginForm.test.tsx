import { describe, expect, it } from "vitest";
import { validateLoginForm } from "./validateLoginForm";

const validation = {
  required: "Required field",
};

describe("validateLoginForm", () => {
  it("requires email and password", () => {
    expect(
      validateLoginForm({ email: "", password: "" }, validation)
    ).toEqual({
      email: "Required field",
      password: "Required field",
    });
  });

  it("treats whitespace-only email as empty", () => {
    expect(
      validateLoginForm({ email: "   ", password: "secret" }, validation)
    ).toEqual({
      email: "Required field",
    });
  });

  it("returns no errors for filled values", () => {
    expect(
      validateLoginForm(
        { email: "user@example.com", password: "secret" },
        validation
      )
    ).toEqual({});
  });
});
