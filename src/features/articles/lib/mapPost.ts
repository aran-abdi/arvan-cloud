const EXCERPT_WORD_COUNT = 12;

export function getExcerpt(body: string, wordCount = EXCERPT_WORD_COUNT): string {
  const words = body.trim().split(/\s+/).filter(Boolean);

  if (words.length <= wordCount) {
    return words.join(" ");
  }

  return `${words.slice(0, wordCount).join(" ")}…`;
}

// DummyJSON posts have no created field.
export function getMockCreatedDate(postId: number): string {
  const date = new Date(Date.UTC(2024, 0, 1));
  date.setUTCDate(date.getUTCDate() + ((postId - 1) % 365));
  return date.toISOString().slice(0, 10);
}

export function formatAuthor(username: string | undefined, userId: number): string {
  return `@${username ?? `user_${userId}`}`;
}

export function formatTags(tags: string[]): string {
  return tags.join(", ");
}
