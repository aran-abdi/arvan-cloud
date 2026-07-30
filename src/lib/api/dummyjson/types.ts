export type DummyJsonAuthUser = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
};

export type DummyJsonUser = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  password?: string;
  image?: string;
};

export type DummyJsonUsersResponse = {
  users: DummyJsonUser[];
  total: number;
  skip: number;
  limit: number;
};

export type DummyJsonPost = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  userId: number;
  views?: number;
  reactions?: {
    likes: number;
    dislikes: number;
  };
};

export type DummyJsonPostsResponse = {
  posts: DummyJsonPost[];
  total: number;
  skip: number;
  limit: number;
};

export type DummyJsonErrorBody = {
  message?: string;
};

export class DummyJsonApiError extends Error {
  readonly status: number;
  readonly body: unknown;

  constructor(status: number, body: unknown, message?: string) {
    const resolvedMessage =
      message ??
      (typeof body === "object" &&
      body !== null &&
      "message" in body &&
      typeof body.message === "string"
        ? body.message
        : `DummyJSON request failed with status ${status}`);

    super(resolvedMessage);
    this.name = "DummyJsonApiError";
    this.status = status;
    this.body = body;
  }
}
