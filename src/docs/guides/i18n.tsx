import {
  GuideArticle,
  GuideCode,
  GuideInlineCode,
  GuideList,
  GuideSection,
} from "./GuideArticle";

export function I18nGuide() {
  return (
    <GuideArticle>
      <p>
        Locales are <GuideInlineCode>en</GuideInlineCode> (default) and{" "}
        <GuideInlineCode>fa</GuideInlineCode> (RTL). There is no next-intl —
        messages are JSON files loaded on the server.
      </p>

      <GuideSection title="Two tiers">
        <GuideList>
          <li>
            <strong>App-wide</strong> —{" "}
            <GuideInlineCode>src/i18n/dictionaries/{"{en,fa}"}/common.json</GuideInlineCode>{" "}
            via <GuideInlineCode>getDictionary()</GuideInlineCode>
          </li>
          <li>
            <strong>Feature-scoped</strong> —{" "}
            <GuideInlineCode>src/features/*/i18n/{"{en,fa}"}.json</GuideInlineCode>{" "}
            via loaders built with{" "}
            <GuideInlineCode>createMessagesLoader</GuideInlineCode>
          </li>
        </GuideList>
      </GuideSection>

      <GuideSection title="Feature loader pattern">
        <GuideCode>{`import { createMessagesLoader } from "@/i18n/createMessagesLoader";
import type { ArticlesMessages } from "../types";

export const getArticlesMessages = createMessagesLoader<ArticlesMessages>({
  en: async () => (await import("./en.json")).default,
  fa: async () => (await import("./fa.json")).default,
});`}</GuideCode>
        <p>
          Infer message types from the English JSON so TypeScript stays aligned
          with copy:
        </p>
        <GuideCode>{`import enArticles from "./i18n/en.json";

export type ArticlesMessages = typeof enArticles;`}</GuideCode>
      </GuideSection>

      <GuideSection title="Validation & copy">
        <p>
          Validators take a messages slice and return field errors — never hardcode
          user-facing strings in validation or actions. Pass{" "}
          <GuideInlineCode>defaultLocale</GuideInlineCode> (or a future resolved
          locale) into loaders from route/server code.
        </p>
      </GuideSection>

      <GuideSection title="RTL">
        <p>
          Direction comes from{" "}
          <GuideInlineCode>localeDirection</GuideInlineCode> in{" "}
          <GuideInlineCode>src/i18n/config.ts</GuideInlineCode>. Persian UI uses
          Yekan Bakh FaNum; Latin UI uses Inter. Full locale switching in the
          product UI is not wired yet — infrastructure is ready for it.
        </p>
      </GuideSection>
    </GuideArticle>
  );
}
