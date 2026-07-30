import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("server-only", () => ({}));

const createSession = vi.fn();
const getLoginMessages = vi.fn();
const findDummyJsonUsersByEmail = vi.fn();
const loginWithDummyJson = vi.fn();

vi.mock("@/features/auth/session", () => ({
  createSession: (...args: unknown[]) => createSession(...args),
}));

vi.mock("@/features/auth/login/i18n/getLoginMessages", () => ({
  getLoginMessages: (...args: unknown[]) => getLoginMessages(...args),
}));

vi.mock("@/lib/api/dummyjson", async () => {
  const actual = await vi.importActual<typeof import("@/lib/api/dummyjson")>(
    "@/lib/api/dummyjson"
  );
  return {
    ...actual,
    findDummyJsonUsersByEmail: (...args: unknown[]) =>
      findDummyJsonUsersByEmail(...args),
    loginWithDummyJson: (...args: unknown[]) => loginWithDummyJson(...args),
  };
});

describe("loginAction", () => {
  beforeEach(() => {
    createSession.mockReset();
    getLoginMessages.mockReset();
    findDummyJsonUsersByEmail.mockReset();
    loginWithDummyJson.mockReset();

    getLoginMessages.mockResolvedValue({
      login: {
        errors: {
          signInFailedTitle: "Sign-in Failed!",
          invalidCredentials: "Username and/or Password is invalid",
          genericDescription: "Something went wrong. Please try again.",
        },
      },
    });
  });

  it("resolves email to username, creates session, and succeeds", async () => {
    findDummyJsonUsersByEmail.mockResolvedValue([{ username: "emilys" }]);
    loginWithDummyJson.mockResolvedValue({
      accessToken: "access",
      refreshToken: "refresh",
    });

    const { loginAction } = await import("./login");
    const result = await loginAction({
      email: "emily.johnson@x.dummyjson.com",
      password: "emilyspass",
    });

    expect(findDummyJsonUsersByEmail).toHaveBeenCalledWith(
      "emily.johnson@x.dummyjson.com"
    );
    expect(loginWithDummyJson).toHaveBeenCalledWith({
      username: "emilys",
      password: "emilyspass",
    });
    expect(createSession).toHaveBeenCalledWith({
      accessToken: "access",
      refreshToken: "refresh",
    });
    expect(result).toEqual({ ok: true });
  });

  it("returns toast copy for invalid credentials", async () => {
    const { DummyJsonApiError } = await import("@/lib/api/dummyjson");
    findDummyJsonUsersByEmail.mockResolvedValue([{ username: "emilys" }]);
    loginWithDummyJson.mockRejectedValue(
      new DummyJsonApiError(400, { message: "Invalid credentials" })
    );

    const { loginAction } = await import("./login");
    const result = await loginAction({
      email: "emily.johnson@x.dummyjson.com",
      password: "wrong",
    });

    expect(result).toEqual({
      ok: false,
      title: "Sign-in Failed!",
      description: "Username and/or Password is invalid",
    });
    expect(createSession).not.toHaveBeenCalled();
  });
});
