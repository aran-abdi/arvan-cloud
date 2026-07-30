import {
  GuideArticle,
  GuideCode,
  GuideInlineCode,
  GuideList,
  GuideSection,
} from "./GuideArticle";

export function ArchitectureGuide() {
  return (
    <GuideArticle>
      <p>
        The app follows a thin-routes / fat-features pattern. Routes stay small;
        domain logic lives in <GuideInlineCode>src/features</GuideInlineCode>.
      </p>

      <GuideSection title="Request flow">
        <GuideList>
          <li>
            <strong>RSC pages</strong> load messages and data, then render a
            feature view.
          </li>
          <li>
            <strong>Client forms</strong> validate locally, call a Server
            Action, show a toast, and navigate.
          </li>
          <li>
            <strong>Server Actions</strong> re-check auth when needed, call
            DummyJSON, and return{" "}
            <GuideInlineCode>{`{ ok: true } | { ok: false, … }`}</GuideInlineCode>{" "}
            for user-facing errors.
          </li>
        </GuideList>
      </GuideSection>

      <GuideSection title="API layer">
        <p>
          All DummyJSON traffic goes through{" "}
          <GuideInlineCode>dummyJsonFetch</GuideInlineCode> in{" "}
          <GuideInlineCode>src/lib/api/dummyjson/</GuideInlineCode>. Modules
          cover auth, users, and posts. Failures throw{" "}
          <GuideInlineCode>DummyJsonApiError</GuideInlineCode>; actions catch
          and map them to localized messages.
        </p>
        <GuideCode>{`import { createDummyJsonPost } from "@/lib/api/dummyjson";

const post = await createDummyJsonPost({
  title,
  body,
  userId,
  tags,
});`}</GuideCode>
      </GuideSection>

      <GuideSection title="Server boundaries">
        <GuideList>
          <li>
            <GuideInlineCode>&quot;use server&quot;</GuideInlineCode> on action
            modules
          </li>
          <li>
            <GuideInlineCode>import &quot;server-only&quot;</GuideInlineCode> on
            session helpers, message loaders, and data fetchers
          </li>
          <li>
            Never import server-only modules into client components
          </li>
        </GuideList>
      </GuideSection>

      <GuideSection title="Routing map">
        <GuideList>
          <li>
            <GuideInlineCode>/login</GuideInlineCode>,{" "}
            <GuideInlineCode>/register</GuideInlineCode> — auth
          </li>
          <li>
            <GuideInlineCode>/dashboard/articles</GuideInlineCode> — list (page
            1)
          </li>
          <li>
            <GuideInlineCode>/dashboard/articles/page/[page]</GuideInlineCode> —
            paginated list
          </li>
          <li>
            <GuideInlineCode>/dashboard/articles/create</GuideInlineCode> —
            create
          </li>
          <li>
            <GuideInlineCode>/dashboard/articles/[id]/edit</GuideInlineCode> —
            edit
          </li>
        </GuideList>
        <p>
          Keep URLs centralized in feature{" "}
          <GuideInlineCode>lib/paths.ts</GuideInlineCode> helpers instead of
          hardcoding strings in components.
        </p>
      </GuideSection>
    </GuideArticle>
  );
}
