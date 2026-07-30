import {
  GuideArticle,
  GuideCode,
  GuideInlineCode,
  GuideList,
  GuideSection,
} from "./GuideArticle";

export function DesignSystemGuide() {
  return (
    <GuideArticle>
      <p>
        UI is built from shared components, TypeScript constants, and CSS custom
        properties. Interactive demos live under{" "}
        <GuideInlineCode>/docs/components</GuideInlineCode>; token tables under{" "}
        <GuideInlineCode>/docs/tokens</GuideInlineCode>.
      </p>

      <GuideSection title="Three layers">
        <GuideList>
          <li>
            <strong>constants/</strong> — numeric source values and{" "}
            <GuideInlineCode>*_VAR</GuideInlineCode> string refs for inline
            styles
          </li>
          <li>
            <strong>styles/tokens.css</strong> — CSS custom properties consumed
            by CSS modules (single source for visual values in stylesheets)
          </li>
          <li>
            <strong>components/ + features/</strong> — UI that composes both;
            prefer <GuideInlineCode>var(--token)</GuideInlineCode> in modules
          </li>
        </GuideList>
        <p>
          When you add a design value: (1) add it to the relevant file under{" "}
          <GuideInlineCode>constants/</GuideInlineCode>, (2) mirror it in{" "}
          <GuideInlineCode>tokens.css</GuideInlineCode>, (3) register it in{" "}
          <GuideInlineCode>src/docs/tokens/registry.ts</GuideInlineCode> so
          docs stay in sync.
        </p>
      </GuideSection>

      <GuideSection title="Do not hardcode">
        <GuideList>
          <li>
            Avoid raw hex, px, font-size, radius, shadow, or z-index in CSS
            modules when a token already exists
          </li>
          <li>
            If nothing matches, add a token at the <em>exact</em> current value
            so visuals stay identical
          </li>
          <li>
            Media-query breakpoints stay literal (
            <GuideInlineCode>768px</GuideInlineCode> /{" "}
            <GuideInlineCode>1024px</GuideInlineCode>);{" "}
            <GuideInlineCode>--bp-*</GuideInlineCode> are reference only
          </li>
          <li>
            Layout keywords (<GuideInlineCode>100%</GuideInlineCode>,{" "}
            <GuideInlineCode>auto</GuideInlineCode>, flex fractions) and runtime
            positioning are fine without tokens
          </li>
        </GuideList>
      </GuideSection>

      <GuideSection title="Component docs">
        <GuideList>
          <li>
            Each page under{" "}
            <GuideInlineCode>/docs/components</GuideInlineCode> has a playground,
            visual examples, a copyable <strong>Usage</strong> sample, then an
            API table
          </li>
          <li>
            Prefer importing from{" "}
            <GuideInlineCode>@/components</GuideInlineCode> as shown in the
            samples
          </li>
        </GuideList>
      </GuideSection>

      <GuideSection title="Component package">
        <GuideCode>{`src/components/button/
  Button.tsx
  Button.module.css
  Button.test.tsx
  index.ts`}</GuideCode>
        <p>
          Public surface is re-exported from{" "}
          <GuideInlineCode>@/components</GuideInlineCode>. Prefer importing from
          the barrel rather than deep paths.
        </p>
      </GuideSection>

      <GuideSection title="Styling approach">
        <GuideList>
          <li>CSS Modules for component-local styles</li>
          <li>
            Tailwind is available project-wide but the design system leans on
            tokens + modules
          </li>
          <li>
            Use <GuideInlineCode>cn()</GuideInlineCode> from{" "}
            <GuideInlineCode>@/lib/cn</GuideInlineCode> for class composition
          </li>
        </GuideList>
      </GuideSection>

      <GuideSection title="Adding a component">
        <GuideList>
          <li>
            Create the folder under{" "}
            <GuideInlineCode>src/components</GuideInlineCode>
          </li>
          <li>
            Export from <GuideInlineCode>src/components/index.ts</GuideInlineCode>
          </li>
          <li>
            Add constants / CSS vars if the design introduces new sizes or colors
          </li>
          <li>
            Register a docs demo in{" "}
            <GuideInlineCode>src/docs/registry.ts</GuideInlineCode> and{" "}
            <GuideInlineCode>src/docs/components/</GuideInlineCode>
          </li>
          <li>Add a co-located Vitest file for behavior that matters</li>
        </GuideList>
      </GuideSection>
    </GuideArticle>
  );
}
