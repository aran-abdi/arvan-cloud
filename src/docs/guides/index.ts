import type { ComponentType } from "react";
import type { GuideSlug } from "./registry";
import { GettingStartedGuide } from "./getting-started";
import { ProjectStructureGuide } from "./project-structure";
import { ArchitectureGuide } from "./architecture";
import { AuthGuide } from "./auth";
import { DesignSystemGuide } from "./design-system";
import { I18nGuide } from "./i18n";
import { TestingGuide } from "./testing";
import { ConventionsGuide } from "./conventions";

export { GUIDE_NAV, getGuideBySlug, isGuideSlug } from "./registry";
export type { GuideSlug, GuideNavItem } from "./registry";

export const GUIDE_PAGES: Record<GuideSlug, ComponentType> = {
  "getting-started": GettingStartedGuide,
  "project-structure": ProjectStructureGuide,
  architecture: ArchitectureGuide,
  auth: AuthGuide,
  "design-system": DesignSystemGuide,
  i18n: I18nGuide,
  testing: TestingGuide,
  conventions: ConventionsGuide,
};
