import {
  GuideArticle,
  GuideCode,
  GuideInlineCode,
  GuideList,
  GuideSection,
} from "./GuideArticle";

export function TestingGuide() {
  return (
    <GuideArticle>
      <p>
        Tests run with Vitest, Testing Library, and jsdom. Config lives in{" "}
        <GuideInlineCode>vitest.config.ts</GuideInlineCode>; setup in{" "}
        <GuideInlineCode>src/test/setup.ts</GuideInlineCode>.
      </p>

      <GuideSection title="Commands">
        <GuideCode>{`npm test          # watch
npm run test:run  # single run`}</GuideCode>
      </GuideSection>

      <GuideSection title="Where tests live">
        <p>
          Co-locate <GuideInlineCode>*.test.ts</GuideInlineCode> /{" "}
          <GuideInlineCode>*.test.tsx</GuideInlineCode> next to the unit under
          test inside <GuideInlineCode>src/</GuideInlineCode>. Examples:
        </p>
        <GuideList>
          <li>Component behavior — next to the component</li>
          <li>Pure validation — next to the validator</li>
          <li>Path helpers / mappers — next to the lib file</li>
        </GuideList>
      </GuideSection>

      <GuideSection title="Patterns">
        <GuideList>
          <li>Query by role and accessible name</li>
          <li>
            Use <GuideInlineCode>userEvent</GuideInlineCode> for interactions
          </li>
          <li>
            Prefer fixtures shaped like real message JSON for form tests
          </li>
          <li>
            Keep pure functions (validation, path parsing) free of React so they
            stay easy to unit test
          </li>
        </GuideList>
      </GuideSection>

      <GuideSection title="What we do not have yet">
        <p>
          There is no Playwright/E2E suite in the repo. Favor solid unit and
          component coverage for new work unless an E2E stack is added later.
        </p>
      </GuideSection>
    </GuideArticle>
  );
}
