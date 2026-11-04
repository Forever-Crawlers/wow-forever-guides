# GitHub Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Automatically deploy the Docusaurus website to GitHub Pages whenever `main` changes.

**Architecture:** Docusaurus emits the static site into `build/` with the repository's project base path. A GitHub Actions build job installs from `package-lock.json`, builds and uploads that directory, and a dependent deploy job publishes it with the Pages API.

**Tech Stack:** Docusaurus, TypeScript, npm, GitHub Actions, GitHub Pages

**Spec:** `docs/superpowers/specs/2026-11-04-github-pages-design.md`

## Global Constraints

- Configure the public site for `https://forever-crawlers.github.io/wow-forever-guides/`.
- Deploy on pushes to `main` and manual workflow runs.
- Use the existing lockfile and build command; do not upgrade dependencies.
- Do not change guide content, branding, or add test files.
- Do not configure a custom domain.

## Review Focus

- Project base path: production pages and assets must resolve below `/wow-forever-guides/`; inspect the generated homepage after the final build.
- Deployment permissions: the deploy job needs `pages: write` and `id-token: write` without broad repository write access; inspect workflow permissions.
- Reproducible installation: CI must use `npm ci` and the committed lockfile; inspect the build job.
- Trigger scope: only pushes to `main` and manual dispatches should deploy; inspect workflow triggers.
- Disabled Pages service: if GitHub rejects deployment because Pages is not enabled, the owner must select GitHub Actions as the source before live verification.

---

### Task 1: Configure and publish GitHub Pages deployment

**Files:**
- Modify: `docusaurus.config.ts:17-21`
- Create: `.github/workflows/deploy.yml`
- Modify: `README.md` with the public URL and automatic deployment behavior

**Interfaces:**
- Consumes: `package-lock.json`, `npm run build`, and the existing `main` branch
- Produces: a Pages deployment of `build/` at `https://forever-crawlers.github.io/wow-forever-guides/`

- [ ] **Step 1: Configure the production site URL**

Set `url` to `https://forever-crawlers.github.io`, `baseUrl` to `/wow-forever-guides/`, and `trailingSlash` to `false` in `docusaurus.config.ts`.

- [ ] **Step 2: Add the deployment workflow**

Create `.github/workflows/deploy.yml` using `actions/checkout@v4`, `actions/setup-node@v4` with Node 20 and npm caching, `npm ci`, `npm run build`, `actions/upload-pages-artifact@v3` for `build`, and `actions/deploy-pages@v4`. Trigger on `main` pushes and `workflow_dispatch`; grant the deploy job only Pages and OIDC write permissions.

- [ ] **Step 3: Document deployment**

Add the public URL and explain in `README.md` that pushes to `main` deploy automatically through GitHub Actions.

- [ ] **Step 4: Verify the final site configuration**

Run `npm run typecheck && npm run build`. Expected: both exit successfully. Inspect `build/index.html` for `/wow-forever-guides/` asset URLs and the configured canonical public URL.

- [ ] **Step 5: Review and commit**

Run `git status --short` and `git diff --check`. Expected: only the config, workflow, README, and planning records are changed; no generated output is included. Commit with `ci: deploy website to GitHub Pages`.

- [ ] **Step 6: Publish and verify deployment**

Push `main` to `origin`. Ensure GitHub Pages uses GitHub Actions as its source, asking the owner to enable it if necessary. Wait for the workflow result, then request the public URL. Expected: deployment succeeds and the homepage returns HTTP 200 with WoW Forever Guides content; if enablement is pending, report the exact remaining setting rather than claiming the site is live.
