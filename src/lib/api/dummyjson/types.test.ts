import { describe, expect, it } from "vitest";
import { DummyJsonApiError } from "./types";

describe("DummyJsonApiError", () => {
  it("uses message from JSON body when available", () => {
    const error = new DummyJsonApiError(400, { message: "Invalid credentials" });

    expect(error.status).toBe(400);
    expect(error.message).toBe("Invalid credentials");
  });

  it("falls back to status message when body has no message", () => {
    const error = new DummyJsonApiError(500, {});

    expect(error.message).toBe("DummyJSON request failed with status 500");
  });
});
