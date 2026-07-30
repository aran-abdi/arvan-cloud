import {
  GuideArticle,
  GuideCode,
  GuideInlineCode,
  GuideList,
  GuideSection,
} from "./GuideArticle";

export function GettingStartedGuide() {
  return (
    <GuideArticle>
      <p>
        Arvan is a Next.js App Router app with a shared UI kit, feature-based
        domain code, and DummyJSON as the backend. These guides live under{" "}
        <GuideInlineCode>/docs/guides</GuideInlineCode> next to the component
        and token playgrounds.
      </p>

      <GuideSection title="Requirements">
        <GuideList>
          <li>Node.js 20+</li>
          <li>npm (lockfile is npm-based)</li>
        </GuideList>
      </GuideSection>

      <GuideSection title="Install & run">
        <GuideCode>{`npm install
npm run dev`}</GuideCode>
        <p>
          Open <GuideInlineCode>http://localhost:3000</GuideInlineCode>. Useful
          entry points:
        </p>
        <GuideList>
          <li>
            <GuideInlineCode>/</GuideInlineCode> — landing
          </li>
          <li>
            <GuideInlineCode>/login</GuideInlineCode> — sign in (DummyJSON users)
          </li>
          <li>
            <GuideInlineCode>/dashboard/articles</GuideInlineCode> — articles
            CRUD (auth required)
          </li>
          <li>
            <GuideInlineCode>/docs</GuideInlineCode> — this documentation
          </li>
        </GuideList>
      </GuideSection>

      <GuideSection title="Scripts">
        <GuideList>
          <li>
            <GuideInlineCode>npm run dev</GuideInlineCode> — development server
          </li>
          <li>
            <GuideInlineCode>npm run build</GuideInlineCode> /{" "}
            <GuideInlineCode>npm start</GuideInlineCode> — production
          </li>
          <li>
            <GuideInlineCode>npm run lint</GuideInlineCode> — ESLint
          </li>
          <li>
            <GuideInlineCode>npm test</GuideInlineCode> — Vitest watch mode
          </li>
          <li>
            <GuideInlineCode>npm run test:run</GuideInlineCode> — single Vitest
            run (CI)
          </li>
        </GuideList>
      </GuideSection>

      <GuideSection title="Environment">
        <p>
          The DummyJSON base URL defaults to{" "}
          <GuideInlineCode>https://dummyjson.com</GuideInlineCode>. Override
          with:
        </p>
        <GuideCode>{`DUMMYJSON_BASE_URL=https://dummyjson.com`}</GuideCode>
        <p>
          No local database is required. Auth tokens are stored in httpOnly
          cookies after login.
        </p>
      </GuideSection>

      <GuideSection title="Demo credentials">
        <p>
          Use any valid DummyJSON user (for example{" "}
          <GuideInlineCode>emilys</GuideInlineCode> /{" "}
          <GuideInlineCode>emilyspass</GuideInlineCode>). You can also sign in
          with the user&apos;s email when it resolves via the users API.
        </p>
      </GuideSection>
    </GuideArticle>
  );
}
