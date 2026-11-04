# Torchlit Crossover Theme Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply the supplied Forever Crawlers logo and approved Torchlit Crossover visual design to the Docusaurus website.

**Architecture:** Keep the existing Docusaurus homepage structure and customize its TypeScript components and CSS modules. Use global Infima variables for light/dark palettes, and eject only the safe footer and admonition layout components for site-wide themed wrappers.

**Tech Stack:** Docusaurus, React, TypeScript, CSS Modules, Infima, WebP

**Spec:** `docs/superpowers/specs/2026-11-04-torchlit-theme-design.md`

## Global Constraints

- Use the supplied Forever Crawlers image unchanged as a local WebP asset.
- Match the selected Torchlit Crossover mockup: crimson `#b72d2d`, ember `#d8483e`, gold `#ffd783`, and iron `#121315` as core accents.
- Support readable dark and light modes and retain existing docs destinations.
- Swizzle only safe TypeScript `Footer/Layout` and `Admonition/Layout` components.
- Add no dependencies, test files, guide pages, custom domain, or deployment changes.

## Review Focus

- Project base path: logo and hero assets must resolve under `/wow-forever-guides/`; inspect production HTML and use Docusaurus URL helpers.
- Color modes: both light and dark palettes must retain readable text and visible controls; inspect CSS variables and rendered pages.
- Swizzle safety: ejected components must preserve their original props and behavior; compare generated files and run the production build.
- Homepage content: the three approved cards and existing `/docs/intro` link must render without stock Docusaurus feature copy; inspect production HTML.
- Deployment: the existing workflow must deploy the final commit; check the Actions result and public homepage after push.

---

### Task 1: Implement and publish the Torchlit Crossover theme

**Files:**
- Create: `static/img/forever-crawlers.webp`
- Modify: `docusaurus.config.ts`, `src/css/custom.css`, `src/pages/index.tsx`, `src/pages/index.module.css`, `src/components/HomepageFeatures/index.tsx`, `src/components/HomepageFeatures/styles.module.css`
- Create via TypeScript swizzle: `src/theme/Footer/Layout/index.tsx`, `src/theme/Admonition/Layout/index.tsx`

**Interfaces:**
- Consumes: existing Docusaurus layout, homepage components, and GitHub Pages configuration
- Produces: branded logo references, Torchlit CSS classes, and three homepage cards named Class Guides, Dungeon Guides, and Crawler Corner

- [ ] **Step 1: Run a failing inline acceptance check**

Run a Node assertion script that checks for `static/img/forever-crawlers.webp`, `img/forever-crawlers.webp` in `docusaurus.config.ts`, `useBaseUrl` and `Enter the Dungeon` in `src/pages/index.tsx`, and Class Guides, Dungeon Guides, and Crawler Corner in `src/components/HomepageFeatures/index.tsx`. Expected: FAIL because none of the branding is implemented yet. Do not create a test file.

- [ ] **Step 2: Install the supplied logo and configure branding**

Download the exact supplied Discord URL to `static/img/forever-crawlers.webp`. Set it as the favicon and navbar logo, update the navbar logo alt text, and make dark mode the default while retaining the color-mode toggle.

- [ ] **Step 3: Add the safe theme swizzles**

Run the Docusaurus swizzle command with `--eject --typescript` for `Footer/Layout` and `Admonition/Layout`. Preserve their generated props and content structure while adding focused Torchlit wrapper classes.

- [ ] **Step 4: Apply the global palette and component styles**

Replace stock green/teal Infima colors with the approved crimson, ember, gold, and iron palette. Add readable light parchment values, themed navbar/footer/admonition treatments, button states, and focus-visible states without changing navigation behavior.

- [ ] **Step 5: Implement the approved homepage**

Add the base-path-aware hero logo and approved hero copy/button text. Replace stock feature illustrations/copy with Class Guides, Dungeon Guides, and Crawler Corner cards using text marks and Torchlit CSS; keep the hero link targeted at `/docs/intro` and update generic homepage metadata.

- [ ] **Step 6: Run acceptance and project verification**

Rerun Step 1's inline assertion script; expected: PASS. Run `npm run typecheck && npm run build`; expected: both succeed. Inspect `build/index.html` for the logo, three card labels, and `/wow-forever-guides/` asset paths. Serve the build and request `/wow-forever-guides/` and `/wow-forever-guides/docs/intro`; expected: HTTP 200.

- [ ] **Step 7: Review and commit**

Run `git status --short` and `git diff --check`. Expected: only theme assets/components/styles are changed, with no build output or new dependencies. Commit with `feat: add Torchlit Crossover theme`.

- [ ] **Step 8: Publish and verify the live theme**

Merge to `main`, rerun typecheck/build, and push. Wait for the existing GitHub Actions deployment to succeed, then request the public homepage and logo asset. Expected: the public page shows the new hero/cards and the logo returns HTTP 200.
