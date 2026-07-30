import { describe, expect, it } from "vitest";
import { validateRegisterForm } from "./validateRegisterForm";

const validation = {
  required: "Required field",
};

describe("validateRegisterForm", () => {
  it("requires username, email, and password", () => {
    expect(
      validateRegisterForm(
        { username: "", email: "", password: "" },
        validation
      )
    ).toEqual({
      username: "Required field",
      email: "Required field",
      password: "Required field",
    });
  });

  it("treats whitespace-only values as empty", () => {
    expect(
      validateRegisterForm(
        { username: "   ", email: "   ", password: "secret" },
        validation
      )
    ).toEqual({
      username: "Required field",
      email: "Required field",
    });
  });

  it("returns no errors for filled values", () => {
    expect(
      validateRegisterForm(
        {
          username: "jane",
          email: "jane@example.com",
          password: "secret",
        },
        validation
      )
    ).toEqual({});
  });
});
