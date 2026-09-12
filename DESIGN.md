---
name: Minchae Kim Academic Website
description: An understated personal academic homepage centered on research.
colors:
  paper: "#fff"
  ink: "#242925"
  muted: "#5d645e"
  link: "#365e50"
  link-hover: "#1e4033"
  rule: "#dce0db"
  selection: "#dce8df"
  underline: "#8b9f93"
typography:
  display:
    fontFamily: '"Avenir Next", Avenir, "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: "clamp(2.4rem, 5vw, 4rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-.035em"
  headline:
    fontFamily: '"Avenir Next", Avenir, "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: "2rem"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-.035em"
  title:
    fontFamily: 'Georgia, "Times New Roman", serif'
    fontSize: "1.28rem"
    fontWeight: 400
    lineHeight: 1.32
  body:
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: ".875rem"
    fontWeight: 400
    lineHeight: 1.65
spacing:
  link-row: ".25rem"
  inline-links: "1.25rem"
  publication-columns: "2.5rem"
  intro-columns: "3rem"
  section: "3.5rem"
components:
  text-link:
    textColor: "{colors.link}"
  text-link-hover:
    textColor: "{colors.link-hover}"
  navigation:
    textColor: "{colors.muted}"
    typography: "{typography.label}"
  publication-row:
    padding: "1.15rem 0 1.3rem"
  news-row:
    typography: "{typography.label}"
    padding: ".4rem 0"
  footer:
    textColor: "{colors.muted}"
    padding: "1.25rem 0 2rem"
---

# Design System: Minchae Kim Academic Website

## Overview

**Creative North Star: "An understated academic homepage"**

An understated academic homepage that lets research, real imagery, and complete bibliographic information establish credibility. System serif headings give the page a personal, editorial character; neutral sans-serif text keeps longer passages and metadata easy to read.

The page is flat and quiet. Whitespace, alignment, and thin rules organize content without decorative containers. Interaction uses native links and immediate state changes, with no entrance, scroll, or hover motion.

**Key Characteristics:**

- System typography with a restrained serif hierarchy.
- Open bibliography rows and intact research figures.
- Muted green text links on white paper.
- Readable metadata and visible keyboard focus.

## Colors

Muted green supports a white-paper and dark-ink palette; color identifies links and hierarchy rather than decorating surfaces.

### Primary

- **Muted Green** (`link`): contact, CV, publication resources, and keyboard outlines.
- **Deep Green** (`link-hover`): immediate hover feedback on text links.
- **Soft Green Underline** (`underline`): the default link underline, strengthening on hover.

### Neutral

- **Paper** (`paper`): the page and focused skip-link background.
- **Ink** (`ink`): headings, biography, and author text.
- **Secondary Ink** (`muted`): research interests, venues, dates, navigation, and footer.
- **Fine Rule** (`rule`): publication separators, news boundary, and footer boundary.
- **Selection Wash** (`selection`): selected text background, with Ink foreground.

## Typography

Georgia with Times New Roman and serif fallbacks supplies display, section, and publication headings. Helvetica Neue with Helvetica, Arial, and sans-serif fallbacks supplies body and metadata. Both stacks are local system fonts.

The frontmatter defines the primary hierarchy. Display identifies the researcher; headline names the publication section; title carries publication titles. News uses a smaller serif heading (1.5rem). Author text is slightly smaller than body (.9375rem), with the site owner's name emphasized at weight 600. Venue text uses label size with line-height 1.55. The footer is smaller still (.8125rem).

Headings balance wrapping. Biography measure is capped at 70ch. Dates and publication years use tabular numerals; publication years do not wrap internally. Labels retain natural casing.

## Layout

The centered page is capped at 960px with 2rem gutters. The introduction pairs flexible text with a prominent 280px by 320px portrait. News follows the introduction and precedes the denser publications list. This is the current homepage composition, not a requirement for every future page.

Publication rows pair flexible text with a compact 150px-wide figure column. Figures occupy a 96px-tall area with contained scaling and top alignment. Rows use compact whitespace and thin separators, not surrounding boxes. News pairs a 6rem date column with flexible text. Navigation and link lists wrap naturally; the footer distributes content across the available width.

At viewport widths of 700px and below, page gutters become 1.25rem. The intro keeps the name beside a 150px by 180px portrait while biography spans the full width. Publications stack text before figures; figures are at most 220px wide in a 120px-tall area. Publication titles become 1.22rem. Navigation aligns left, news dates use a 5rem column, and section spacing tightens.

## Elevation & Depth

There are no shadows, raised surfaces, or tonal cards. Whitespace, hierarchy, and one-pixel rules provide structure. Keyboard focus uses a two-pixel solid link-color outline offset by five pixels; it is an accessibility state, not elevation.

## Shapes

Images and content use square corners. The portrait is cropped with cover fitting; publication figures use contain fitting to preserve their content. Links have fine underlines offset by .22em. No radius scale is present.

## Components

### Text links

Underlined green text provides the common action language. Hover deepens the foreground and matches the underline to the current color. Contact and resource lists use wrapping rows with vertical click-area padding. Focus remains visibly outlined. No button, input, badge, or card variants are implemented.

### Navigation

A small, quiet text navigation links to About, Publications, and News. It is right-aligned on desktop and left-aligned on mobile. Links begin in Secondary Ink without underlines; hover turns them green and underlines them. Native anchor navigation requires no script or motion.

### Introduction

The researcher's name anchors a modest portrait, role, research interests, and biography. Contact, CV, and profile links form a simple wrapping text list. The portrait has descriptive alternative text.

### Publication row

A serif title leads authors, venue and year, then available resource links. Author emphasis is rendered in HTML. Optional real research figures sit alongside the text on desktop and below it on mobile. Every record remains visible without JavaScript.

### News row

Compact date-and-text rows keep updates subordinate to publications. Muted dates align in a fixed column; update text can wrap freely.

### Footer and skip link

A thin rule separates a small copyright and contact footer. A skip link is concealed above the viewport until keyboard focus, then appears on Paper. All links retain visible focus. The reduced-motion media query disables future animation and transitions; no motion is currently designed.

## Do's and Don'ts

### Do:

- Do use real research images and preserve their full figure content.
- Do retain complete titles, authors, venues, dates, and resource links.
- Do keep contact, CV, and publication resources as recognizable text links.
- Do preserve the mobile stack and keyboard focus treatment.

### Don't:

- Don't introduce cards, pills, badges, gradients, glass, or decorative shadows.
- Don't add entrance animation, scroll effects, or hover movement.
- Don't replace academic content with marketing claims.
- Don't require JavaScript to reveal content or emphasize the site owner among authors.
