export type GuideSlug =
  | "getting-started"
  | "project-structure"
  | "architecture"
  | "auth"
  | "design-system"
  | "i18n"
  | "testing"
  | "conventions";

export type GuideNavItem = {
  slug: GuideSlug;
  title: string;
  description: string;
};

export const GUIDE_NAV: readonly GuideNavItem[] = [
  {
    slug: "getting-started",
    title: "Getting started",
    description: "Install dependencies, run the app, and find your way around.",
  },
  {
    slug: "project-structure",
    title: "Project structure",
    description: "What lives where under src/ and how folders relate.",
  },
  {
    slug: "architecture",
    title: "Architecture",
    description: "Thin routes, feature slices, Server Actions, and the API layer.",
  },
  {
    slug: "auth",
    title: "Auth & sessions",
    description: "Login, cookies, proxy guards, and how protected routes work.",
  },
  {
    slug: "design-system",
    title: "Design system",
    description: "Components, constants, CSS tokens, and how to add UI.",
  },
  {
    slug: "i18n",
    title: "Internationalization",
    description: "Locales, dictionaries, and feature-scoped message loaders.",
  },
  {
    slug: "testing",
    title: "Testing",
    description: "Vitest setup, co-located tests, and common patterns.",
  },
  {
    slug: "conventions",
    title: "Conventions",
    description: "Patterns every contributor should follow when shipping code.",
  },
] as const;

export function getGuideBySlug(slug: string): GuideNavItem | undefined {
  return GUIDE_NAV.find((item) => item.slug === slug);
}

export function isGuideSlug(slug: string): slug is GuideSlug {
  return GUIDE_NAV.some((item) => item.slug === slug);
}
