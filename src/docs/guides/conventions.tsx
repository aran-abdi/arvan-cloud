import {
  GuideArticle,
  GuideInlineCode,
  GuideList,
  GuideSection,
} from "./GuideArticle";

export function ConventionsGuide() {
  return (
    <GuideArticle>
      <p>
        Prefer clear structure and readable code over heavy commentary. If
        something is non-obvious, a short “why” comment is fine — otherwise let
        names and types speak.
      </p>

      <GuideSection title="Code style">
        <GuideList>
          <li>Match existing patterns in the feature you touch</li>
          <li>
            Import via barrels:{" "}
            <GuideInlineCode>@/components</GuideInlineCode>,{" "}
            <GuideInlineCode>@/features/articles</GuideInlineCode>
          </li>
          <li>
            Keep routes thin; put logic in features
          </li>
          <li>
            Avoid drive-by refactors unrelated to the task
          </li>
          <li>
            Do not leave large blocks of narrating comments or leftover
            scaffolding
          </li>
        </GuideList>
      </GuideSection>

      <GuideSection title="Server & data">
        <GuideList>
          <li>
            Mark server-only modules with{" "}
            <GuideInlineCode>server-only</GuideInlineCode>
          </li>
          <li>
            Actions return discriminated results for expected failures
          </li>
          <li>
            Centralize paths in <GuideInlineCode>lib/paths.ts</GuideInlineCode>
          </li>
          <li>
            Remember DummyJSON is demo persistence — not a production database
          </li>
        </GuideList>
      </GuideSection>

      <GuideSection title="Design & copy">
        <GuideList>
          <li>
            Keep <GuideInlineCode>constants/*</GuideInlineCode> and{" "}
            <GuideInlineCode>tokens.css</GuideInlineCode> aligned
          </li>
          <li>
            Put user-facing strings in i18n JSON, not inline in components
          </li>
          <li>
            Validation messages come from the messages object passed into
            validators
          </li>
        </GuideList>
      </GuideSection>

      <GuideSection title="Next.js 16">
        <p>
          This project uses Next.js 16 APIs that may differ from older docs you
          know. Before changing routing or request interception, check{" "}
          <GuideInlineCode>node_modules/next/dist/docs/</GuideInlineCode>. Auth
          guards belong in <GuideInlineCode>src/proxy.ts</GuideInlineCode>, not
          a legacy middleware file.
        </p>
      </GuideSection>

      <GuideSection title="Docs maintenance">
        <GuideList>
          <li>
            New shared components → component docs + optional token entries
          </li>
          <li>
            New architectural patterns → update the relevant guide under{" "}
            <GuideInlineCode>src/docs/guides/</GuideInlineCode>
          </li>
          <li>
            Keep the README short and point developers here for depth
          </li>
        </GuideList>
      </GuideSection>
    </GuideArticle>
  );
}
