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
            <strong>constants/</strong> — source values (heights, spacing,
            radii) imported from TS when needed for inline styles
          </li>
          <li>
            <strong>styles/tokens.css</strong> — CSS variables consumed by CSS
            modules
          </li>
          <li>
            <strong>components/</strong> — primitives that compose both
          </li>
        </GuideList>
        <p>
          When you add a design value, update both the constant file and{" "}
          <GuideInlineCode>tokens.css</GuideInlineCode>.
        </p>
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
          <li>Create the folder under <GuideInlineCode>src/components</GuideInlineCode></li>
          <li>Export from <GuideInlineCode>src/components/index.ts</GuideInlineCode></li>
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
