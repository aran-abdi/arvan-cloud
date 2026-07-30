export const SECTION = {
  width: 810,
  headerMinHeight: 92,
  bodyHeight: 256,
  padding: 24,
  titleDescriptionGap: 8,
  borderRadius: 8,
  borderWidth: 1,
} as const;

export const SECTION_VAR = {
  width: "var(--section-width)",
  headerMinHeight: "var(--section-header-min-height)",
  bodyHeight: "var(--section-body-height)",
  padding: "var(--section-padding)",
  titleDescriptionGap: "var(--section-title-description-gap)",
  borderRadius: "var(--section-radius)",
  borderWidth: "var(--section-border-width)",
} as const;
