import {
  GuideArticle,
  GuideCode,
  GuideInlineCode,
  GuideList,
  GuideSection,
} from "./GuideArticle";

export function AuthGuide() {
  return (
    <GuideArticle>
      <p>
        Authentication uses DummyJSON&apos;s login API and stores tokens in
        httpOnly cookies. Protection is layered: proxy, dashboard layout, and
        Server Actions.
      </p>

      <GuideSection title="Login flow">
        <GuideList>
          <li>
            Client submits credentials via{" "}
            <GuideInlineCode>loginAction</GuideInlineCode>
          </li>
          <li>
            Email inputs are resolved to a username when possible; otherwise
            the value is treated as a username
          </li>
          <li>
            On success, <GuideInlineCode>createSession</GuideInlineCode> sets{" "}
            <GuideInlineCode>arvan_access_token</GuideInlineCode> and{" "}
            <GuideInlineCode>arvan_refresh_token</GuideInlineCode>
          </li>
          <li>
            Redirect uses a safe <GuideInlineCode>?next=</GuideInlineCode> path
            or defaults to articles
          </li>
        </GuideList>
      </GuideSection>

      <GuideSection title="Proxy (Next.js 16)">
        <p>
          Route guards live in <GuideInlineCode>src/proxy.ts</GuideInlineCode>{" "}
          (this replaces the older <GuideInlineCode>middleware.ts</GuideInlineCode>{" "}
          pattern). It:
        </p>
        <GuideList>
          <li>
            Redirects unauthenticated <GuideInlineCode>/dashboard/*</GuideInlineCode>{" "}
            visits to <GuideInlineCode>/login?next=…</GuideInlineCode>
          </li>
          <li>
            Sends logged-in users away from{" "}
            <GuideInlineCode>/login</GuideInlineCode> and{" "}
            <GuideInlineCode>/register</GuideInlineCode>
          </li>
        </GuideList>
        <p>
          Cookie presence alone is not enough — the dashboard layout also
          validates the token with DummyJSON&apos;s{" "}
          <GuideInlineCode>/auth/me</GuideInlineCode>.
        </p>
      </GuideSection>

      <GuideSection title="Session helpers">
        <GuideCode>{`import {
  createSession,
  destroySession,
  getAccessToken,
} from "@/features/auth/session";`}</GuideCode>
        <p>
          Logout calls <GuideInlineCode>destroySession</GuideInlineCode> and
          redirects to login. Refresh tokens are stored but not yet used for
          silent refresh.
        </p>
      </GuideSection>

      <GuideSection title="When adding protected work">
        <GuideList>
          <li>Do not rely on the proxy alone</li>
          <li>Re-check the access token in layouts and Server Actions</li>
          <li>
            Prefer returning action error results over throwing for expected
            auth failures
          </li>
        </GuideList>
      </GuideSection>
    </GuideArticle>
  );
}
