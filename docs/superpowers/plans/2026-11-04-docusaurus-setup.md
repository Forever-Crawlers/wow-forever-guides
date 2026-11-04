# Docusaurus Setup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish an official Docusaurus classic TypeScript template as the initial WoW Forever Guides website.

**Architecture:** Generate the template in a temporary directory inside the repository, copy its files into the repository root without overwriting the existing license or planning records, and customize only the project identity and introductory documentation. Verify the exact root project with npm before committing and pushing it.

**Tech Stack:** Docusaurus classic template, TypeScript, React, Node.js, npm, Git

**Spec:** `docs/superpowers/specs/2026-11-04-docusaurus-setup-design.md`

## Global Constraints

- Generate the official Docusaurus classic TypeScript template in the repository root.
- Preserve `LICENSE` and the existing `origin` remote.
- Do not add guide content, a custom theme, hosting configuration, or unrelated applications.
- Use npm and the current official template.
- Do not add test files to this previously test-free template; use its production build for verification.

## Review Focus

- Existing repository files: `LICENSE` and the approved design/plan records must survive scaffolding; check them in the final Git diff.
- Template language: generated configuration and source files must use the TypeScript variant; inspect the generated file extensions and `package.json`.
- Generated artifacts: `node_modules/`, build output, and the temporary scaffold directory must not be committed; inspect `git status --short`.
- Project identity: visible site title and repository documentation must say WoW Forever Guides; inspect the config and README diff.
- Publication: the commit must reach the existing `origin/main`; compare local and remote revisions after pushing.

---

### Task 1: Generate, verify, and publish the website

**Files:**
- Create: official classic TypeScript template files, including `docusaurus.config.ts`, `sidebars.ts`, `src/`, `docs/`, `blog/`, `static/`, and `package.json`
- Modify: `README.md`, `.gitignore`, and template identity fields in `docusaurus.config.ts`
- Preserve: `LICENSE`, `docs/superpowers/specs/2026-11-04-docusaurus-setup-design.md`, and this plan

**Interfaces:**
- Consumes: the existing Git repository and npm toolchain
- Produces: a root-level Docusaurus project supporting `npm run start` and `npm run build`

- [ ] **Step 1: Generate the official TypeScript template in a staging directory**

Run `npx create-docusaurus@latest .docusaurus-template-tmp classic --typescript --package-manager npm --skip-install` from the repository root. The staging directory must contain `docusaurus.config.ts` and `sidebars.ts`.

- [ ] **Step 2: Move the template into the repository root**

Copy the staged template, including hidden files, into the root while retaining `LICENSE` and the design/plan records. Remove the staging directory. Replace the Python-specific `.gitignore` with the generated Docusaurus ignore rules.

- [ ] **Step 3: Set the initial project identity**

Change the template site title to `WoW Forever Guides`, its tagline to a concise WoW guides description, and its GitHub organization/project fields to `Forever-Crawlers` and `wow-forever-guides`. Replace the template README introduction with setup and development commands for this project without changing generated source behavior.

- [ ] **Step 4: Install and verify the deliverable**

Run `npm install`, then `npm run build` from the repository root. Expected: dependencies install successfully and Docusaurus reports a successful production build. Confirm TypeScript template files and project naming are present.

- [ ] **Step 5: Inspect the exact commit contents**

Run `git status --short` and `git diff --stat`. Expected: no staging directory, `node_modules/`, or `build/` files are staged or reported as untracked; `LICENSE` remains present. Remove only temporary artifacts created by this setup.

- [ ] **Step 6: Commit and publish**

Stage the initial website, design, and plan; commit with `feat: set up Docusaurus guide website`, then push `main` to the existing `origin`. Verify `git status --short --branch` is clean and aligned with `origin/main`, and report the GitHub repository URL and commit hash.
