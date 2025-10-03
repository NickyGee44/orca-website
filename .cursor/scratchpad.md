Background and Motivation
- Rebuild orcaaudit.com 1:1 with improvements in UX/performance while preserving copy and IA. Integrate content pack provided by user across pages with structured config for easy maintenance.

Key Challenges and Analysis
- Ensure App Router structure maps cleanly to sitemap; maintain SEO parity.
- Centralize content in JSON to avoid hardcoding and enable reuse across sections.
- Keep light/dark theming and animations consistent while prioritizing readability.
- Avoid regressions to intro Lottie, mobile nav, and calculator interactions.

High-level Task Breakdown
1) Create content storage
   - Success: `content/pages/*.json` files for Homepage, About, Responsibility, Freight Audit & Analytics overview, each Service detail, Articles, Videos, Carbon Calculator, Blog, FAQ, Contact. Each includes: `seo`, `sections` (typed), and `cta` blocks.
2) Wire content loader utilities
   - Success: helper to load JSON by route; types defined; components read from content where applicable (hero, teasers, grids, FAQ).
3) Migrate Homepage to content-driven
   - Success: Hero, About teaser, Solution teaser, Who Benefits, Overcharged+Calculator intro, Testimonial, Resources map to JSON.
4) Build Responsibility page
   - Success: CSR copy + image (Capitalize for Kids) rendered with SEO.
5) Build Freight Audit & Analytics overview page
   - Success: Benefits/Features lists rendered; CTA present; SEO set.
6) Build Services detail pages (7)
   - Success: Each page renders intro, benefits, CTA; SEO set; linked from Services bento + nav.
7) Build Resources (Articles, Videos, Carbon Calculator)
   - Success: Article index using cards; Video listing; Carbon Calculator hero + explainer.
8) Blog index
   - Success: Existing listing wired to JSON; extendable posts stub.
9) FAQ page
   - Success: Structured Q&A rendered via motion accordion; anchors.
10) Contact page
   - Success: Form fields (Name, Email, Phone, Company) + direct contact; CTA hooks.
11) SEO sweep
   - Success: Each route exports metadata from JSON with canonical/OG/Twitter.

Project Status Board
- [ ] Create `content/pages` JSON scaffolding
- [ ] Implement content loader and types
- [ ] Migrate Homepage to content JSON
- [ ] Build Responsibility page
- [ ] Build Freight Audit & Analytics overview page
- [ ] Build 7 Services detail pages
- [ ] Build Resources: Articles, Videos, Carbon Calculator
- [ ] Wire Blog index to JSON
- [ ] Build FAQ page from provided Q/A
- [ ] Build Contact page
- [ ] SEO metadata per route

Current Status / Progress Tracking
- Planner prepared structure; awaiting executor to scaffold content files and begin migration.

Executor's Feedback or Assistance Requests
- If any external images/logos are needed (e.g., CSR badge), confirm sources/paths.
- Confirm desired URL structure for service subpages (current `navConfig`).

Lessons
- Maintain accessibility in modals and menus (focus trap, aria-expanded).
- Keep theme contrast high for readability; test mobile first.

