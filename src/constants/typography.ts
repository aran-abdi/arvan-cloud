export const LETTER_SPACING = {
  tight2: "-0.02em",
  wide4: "0.04em",
} as const;

export const FONT_WEIGHT = {
  regular: 400,
  medium450: 450,
  medium: 500,
  semibold: 600,
} as const;

export const FONT_SIZE = {
  11: 11,
  12: 12,
  13: 13,
  14: 14,
  16: 16,
  18: 18,
} as const;

export const LINE_HEIGHT = {
  16: 16,
  18: 18,
  20: 20,
  22: 22,
  24: 24,
} as const;

export const TYPE = {
  label: {
    fontSize: FONT_SIZE[14],
    lineHeight: LINE_HEIGHT[20],
    fontWeight: FONT_WEIGHT.regular,
    letterSpacing: LETTER_SPACING.tight2,
  },
  input: {
    fontSize: FONT_SIZE[14],
    lineHeight: LINE_HEIGHT[20],
    fontWeight: FONT_WEIGHT.regular,
    letterSpacing: LETTER_SPACING.tight2,
  },
  message: {
    fontSize: FONT_SIZE[12],
    lineHeight: LINE_HEIGHT[16],
    fontWeight: FONT_WEIGHT.semibold,
    letterSpacing: LETTER_SPACING.tight2,
  },
  compact: {
    fontSize: FONT_SIZE[13],
    lineHeight: LINE_HEIGHT[18],
    fontWeight: FONT_WEIGHT.regular,
    letterSpacing: LETTER_SPACING.tight2,
  },
  caption: {
    fontSize: FONT_SIZE[11],
    lineHeight: LINE_HEIGHT[16],
    fontWeight: FONT_WEIGHT.semibold,
    letterSpacing: LETTER_SPACING.wide4,
  },
  title: {
    fontSize: FONT_SIZE[18],
    lineHeight: LINE_HEIGHT[24],
    fontWeight: FONT_WEIGHT.semibold,
    letterSpacing: LETTER_SPACING.tight2,
  },
  heading: {
    fontSize: FONT_SIZE[16],
    lineHeight: LINE_HEIGHT[24],
    fontWeight: FONT_WEIGHT.semibold,
    letterSpacing: LETTER_SPACING.tight2,
  },
  sectionTitle: {
    fontSize: FONT_SIZE[18],
    lineHeight: LINE_HEIGHT[24],
    fontWeight: FONT_WEIGHT.semibold,
    letterSpacing: LETTER_SPACING.tight2,
  },
  sectionDescription: {
    fontSize: FONT_SIZE[14],
    lineHeight: LINE_HEIGHT[20],
    fontWeight: FONT_WEIGHT.regular,
    letterSpacing: LETTER_SPACING.tight2,
  },
  sidebarItem: {
    fontSize: FONT_SIZE[16],
    lineHeight: LINE_HEIGHT[24],
    fontWeight: FONT_WEIGHT.semibold,
    letterSpacing: LETTER_SPACING.tight2,
  },
} as const;

export const TYPE_VAR = {
  labelFontSize: "var(--type-label-font-size)",
  labelLineHeight: "var(--type-label-line-height)",
  labelFontWeight: "var(--type-label-font-weight)",
  labelLetterSpacing: "var(--type-label-letter-spacing)",
  inputFontSize: "var(--type-input-font-size)",
  inputLineHeight: "var(--type-input-line-height)",
  inputFontWeight: "var(--type-input-font-weight)",
  inputLetterSpacing: "var(--type-input-letter-spacing)",
  messageFontSize: "var(--type-message-font-size)",
  messageLineHeight: "var(--type-message-line-height)",
  messageFontWeight: "var(--type-message-font-weight)",
  messageLetterSpacing: "var(--type-message-letter-spacing)",
  compactFontSize: "var(--type-compact-font-size)",
  compactLineHeight: "var(--type-compact-line-height)",
  compactFontWeight: "var(--type-compact-font-weight)",
  compactLetterSpacing: "var(--type-compact-letter-spacing)",
  captionFontSize: "var(--type-caption-font-size)",
  captionLineHeight: "var(--type-caption-line-height)",
  captionFontWeight: "var(--type-caption-font-weight)",
  captionLetterSpacing: "var(--type-caption-letter-spacing)",
  titleFontSize: "var(--type-title-font-size)",
  titleLineHeight: "var(--type-title-line-height)",
  titleFontWeight: "var(--type-title-font-weight)",
  titleLetterSpacing: "var(--type-title-letter-spacing)",
  headingFontSize: "var(--type-heading-font-size)",
  headingLineHeight: "var(--type-heading-line-height)",
  headingFontWeight: "var(--type-heading-font-weight)",
  headingLetterSpacing: "var(--type-heading-letter-spacing)",
  bodyRelaxedLineHeight: "var(--type-body-relaxed-line-height)",
} as const;
