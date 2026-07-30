import {
  GuideArticle,
  GuideCode,
  GuideInlineCode,
  GuideList,
  GuideSection,
} from "./GuideArticle";

export function ProjectStructureGuide() {
  return (
    <GuideArticle>
      <p>
        Almost everything application-related lives under{" "}
        <GuideInlineCode>src/</GuideInlineCode>. Path alias{" "}
        <GuideInlineCode>@/*</GuideInlineCode> maps there.
      </p>

      <GuideSection title="Top-level layout">
        <GuideCode>{`src/
  app/           # Next.js routes & layouts (thin)
  components/    # Shared design-system UI
  constants/     # Numeric / semantic design values (TS)
  docs/          # Docs UI: components, tokens, guides
  features/      # Domain slices (auth, articles, dashboard)
  i18n/          # Locales + shared dictionaries
  lib/           # Shared helpers & DummyJSON client
  styles/        # tokens.css, fonts
  assets/        # Icons, font files
  proxy.ts       # Auth route protection (Next.js 16)
  test/          # Vitest setup`}</GuideCode>
      </GuideSection>

      <GuideSection title="Responsibilities">
        <GuideList>
          <li>
            <strong>app/</strong> — pages parse params, set metadata, render a
            feature view. Keep business logic out of here.
          </li>
          <li>
            <strong>features/</strong> — vertical slices: actions, components,
            i18n, validation, types, lib.
          </li>
          <li>
            <strong>components/</strong> — reusable primitives (Button, Input,
            Table, …) with CSS modules and co-located tests.
          </li>
          <li>
            <strong>constants/</strong> + <strong>styles/tokens.css</strong> —
            design values in TS and CSS custom properties (keep in sync).
          </li>
          <li>
            <strong>lib/api/dummyjson/</strong> — HTTP client and resource
            modules for the external API.
          </li>
          <li>
            <strong>docs/</strong> — registries and demos for{" "}
            <GuideInlineCode>/docs/*</GuideInlineCode>.
          </li>
        </GuideList>
      </GuideSection>

      <GuideSection title="Feature folder shape">
        <p>
          Use articles as the reference layout when adding a new domain:
        </p>
        <GuideCode>{`features/articles/
  index.ts              # public exports
  actions/              # "use server"
  components/
  i18n/                 # en.json, fa.json, loader
  lib/                  # paths, mappers, data loaders
  validation/
  types.ts`}</GuideCode>
      </GuideSection>
    </GuideArticle>
  );
}
