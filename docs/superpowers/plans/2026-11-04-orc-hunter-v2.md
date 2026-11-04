# Orc Hunter v2 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the Orc Hunter 1–20 guide with the owner-supplied full 1–60 v2 route.

**Architecture:** Rename the existing Hunter page to `orc-1-60.mdx` and rewrite it as one continuous, evidence-labeled guide. Update every internal link and change the Leveling roadmap from planned later bands to the completed guide.

**Tech Stack:** Docusaurus, MDX, npm, GitHub Actions

**Spec:** `docs/superpowers/specs/2026-11-04-orc-hunter-v2-design.md`

## Global Constraints

- Keep one authoritative full guide; no duplicate early page or redirect dependency.
- Preserve the source's acts, task checklists, gear checks, class systems, exceptions, services, and level-60 handoff.
- Label Current/confirmed, Beta-reported, and Guide recommendation sections.
- Use current Forever mechanics and sources; no external copied text/images, new dependencies, or test files.
- Include sources and review date `2026-11-04`.

## Review Focus

- Evidence accuracy: beta trainer/tame/quest/tuning/vendor/mount details must not read as confirmed; inspect labels in context.
- Hunter accuracy: Mana, pet scaling/care, combat traps, current ability milestones, and removal of Orc Command must not conflict with current references.
- Route completeness: Acts 0–10 and the system/reference sections must survive adaptation; use inline checks and independent review.
- Link migration: no internal link may retain `orc-1-20`, and Leveling must not describe the later Hunter bands as planned; search source and build links.
- Publication: the new 1–60 URL must deploy and return the updated content; verify Actions and the live page.

---

### Task 1: Replace and publish the full Orc Hunter guide

**Files:**
- Rename: `docs/classes/hunter/orc-1-20.mdx` → `docs/classes/hunter/orc-1-60.mdx`
- Modify: `docs/intro.mdx`, `docs/classes/index.mdx`, `docs/leveling/index.mdx`

**Interfaces:**
- Consumes: `.superpowers/research/orc-hunter-v2.txt` and the design's Blizzard/Icy Veins/Maxroll references
- Produces: `/docs/classes/hunter/orc-1-60` with updated links from Start Here, Classes, and Leveling

- [ ] **Step 1: Run the failing inline acceptance check**

Use Node assertions for `docs/classes/hunter/orc-1-60.mdx` containing `Orc Hunter: Levels 1–60`, `Taming the Beast`, `Summon Hawk`, `Feign Death`, `Bestial Wrath`, `Riverglades`, `Beta-reported`, `Guide recommendation`, `Sources`, and `2026-11-04`. Also assert that `docs/classes/hunter/orc-1-20.mdx` is absent after migration. Expected: FAIL because the full replacement does not exist. Do not create a test file.

- [ ] **Step 2: Write the full Hunter replacement**

Rename the existing file and implement every section in the design: evidence key, setup, Acts 0–10, level-60 audit, exceptions, Hunter systems, efficiency rules, services, route summary, and dated sources. Convert act steps and gear checks to task-list items. Label beta route/trainer/tame/vendor/mount details and keep talent, pet, profession, and route choices clearly recommendations.

- [ ] **Step 3: Migrate navigation and roadmap links**

Update Start Here and Classes to `Orc Hunter: Levels 1–60` at `/docs/classes/hunter/orc-1-60`. Update Leveling to link the completed full route instead of listing Orc Hunter 21–60 as future work. Do not alter unrelated roadmaps.

- [ ] **Step 4: Verify mechanics and content**

Rerun Step 1; expected: PASS. Audit Mana, pet care/scaling, combat traps, ability milestones, Growl dungeon etiquette, and Orc Command removal against the design references. Ensure exact beta numbers and contested melee/pet behavior are labeled or generalized. Search all source docs for lingering `/docs/classes/hunter/orc-1-20` links; expected: none.

- [ ] **Step 5: Verify production output**

Run `npm run typecheck && npm run build`; expected: PASS with no broken links. Inspect `build/docs/classes/hunter/orc-1-60.html` for the full title, later acts, sources, and correct base path. Serve the build and request the homepage and new Hunter route under `/wow-forever-guides/`, expecting HTTP 200.

- [ ] **Step 6: Review and commit**

Run `git status --short` and `git diff --check`; expected: the renamed guide and three navigation/roadmap files only. Commit with `docs: expand Orc Hunter guide to level 60`.

- [ ] **Step 7: Publish after final review**

After whole-branch review and required fixes, merge to `main`, rerun typecheck/build, and push. Wait for GitHub Actions, then fetch `https://forever-crawlers.github.io/wow-forever-guides/docs/classes/hunter/orc-1-60`; expected: deployment success and the full updated guide.
