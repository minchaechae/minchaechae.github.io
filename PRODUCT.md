# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary audience is researchers, professors, and potential collaborators who want to quickly understand Minchae Kim's research interests, projects, and publications. Recruiters are a secondary audience.

## Product Purpose

A personal academic website that helps visitors:

- Understand the research focus quickly.
- Browse selected research projects and publications.
- View the CV.
- Find a clear way to make contact.

Success means visitors can understand the research and reach the relevant work, CV, or contact information with little effort.

## Operating Context

Visitors use the website to learn about the researcher and explore academic work before further reading or potential contact. The primary audience and goals above were confirmed by the site owner during initialization.

## Capabilities and Constraints

- Current role: PhD Student in Computer Science at Virginia Tech.
- Preserve the research focus on HCI, XR, spatial computing, and 3D interfaces.
- Preserve existing research/project content, publication records, the CV link, and contact information.
- Preserve the Jekyll/GitHub Pages setup and existing GitHub Pages deployment.

## Brand Commitments

The site must feel like a personal academic website. The owner explicitly ruled out a startup or SaaS landing-page identity for a future redesign.

## Evidence on Hand

The following are repository observations, not confirmation that every biographical detail is current:

- `_data/profile.yml` contains the name Minchae Kim, biography, research interests, email, and academic/professional profile links. Its research topics include HCI, extended reality, spatial computing, 3D user interfaces, and the intersection of XR and AI.
- `_data/publications.yml` contains four publication records with authors, venues, years, paper or poster links, and thumbnails. Topics include JourneyVR, affective motor performance, and BalanceVR.
- `_data/news.yml` contains dated academic updates.
- `cv.pdf`, `profile.jpg`, and `publications/` contain the existing CV, portrait, and publication images. Their contents and freshness were not independently verified during initialization.
- `index.html` assembles About, News, and Publications sections through Jekyll includes. The current implementation uses Jekyll/Liquid, YAML content files, and browser JavaScript; `_config.yml` specifies the minchaechae.github.io site URL.

## Product Principles

- Make the research focus easy to understand quickly.
- Prioritize selected research projects and publications for academic visitors.
- Keep the CV and contact information easy to find.
- Support recruiter evaluation without displacing the primary academic audience.
- Ground research and biographical claims in supplied evidence; do not invent achievements, affiliations, or project outcomes.

## Open Decisions

- The owner wants selected research projects to be browsable; which projects should be selected and whether they need separate project pages is not yet established.
- Product-specific accessibility requirements and additional identity or content constraints have not been established.
