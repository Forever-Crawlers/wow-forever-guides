# Paladin and Shaman Guides Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish complete Undead Paladin and Windshaper Skyborne Shaman leveling guides for levels 1–60.

**Architecture:** Add one MDX page per guide under its class category, preserving the source documents' act-based routes and adding explicit evidence labels. Link each completed guide from the Classes hub and Start Here, then use the existing GitHub Actions deployment.

**Tech Stack:** Docusaurus, MDX, npm, GitHub Actions

**Spec:** `docs/superpowers/specs/2026-11-04-paladin-shaman-guides-design.md`

## Global Constraints

- Preserve both complete 1–60 routes on one page per guide.
- Use owner-supplied DOCX content for route/voice and current references for verification; do not copy external wording or images.
- Label Current/Confirmed, Beta-reported, and Guide recommendation content by section.
- No new dependencies, test files, extra guides, unsafe talent certainty, or contradictory early-mail Shaman advice.
- Include sources and review date `2026-11-04` on both pages.

## Review Focus

- Evidence accuracy: beta quest/tuning/vendor details must not read as current confirmed facts; inspect labels and Sources sections in both tasks.
- Route completeness: each guide must retain setup, level-ordered acts, class systems, exceptions, services, and level-60 handoff; inline checks and reviewer inspection cover this.
- Current class mechanics: Paladin uses current Seal/Judgement/Holy Strike concepts; Shaman uses Mana, current totem workflow, and leather until 40; source-audit each task.
- Navigation safety: Start Here and Classes link only real guides; run production link checking after each task.
- Publication: both routes must deploy and return current content; verify Actions and live pages after final review.

---

### Task 1: Undead Paladin levels 1–60

**Files:**
- Create: `docs/classes/paladin/_category_.json`, `docs/classes/paladin/undead-1-60.mdx`
- Modify: `docs/classes/index.mdx`, `docs/intro.mdx`

**Interfaces:**
- Consumes: `.superpowers/research/undead-paladin.txt` and the design's Paladin references
- Produces: `/docs/classes/paladin/undead-1-60` and links from Classes/Start Here

- [ ] **Step 1: Run the failing inline acceptance check**

Use Node assertions for the new file and `Undead Paladin: Levels 1–60`, `Bandarion Keep`, `Holy Strike`, `Ruins of Lordaeron`, `Summon Warhorse`, `Beta-reported`, `Guide recommendation`, `Sources`, and `2026-11-04`. Expected: FAIL because the guide is absent. Do not create a test file.

- [ ] **Step 2: Write the complete Paladin guide**

Implement every section in the design's Paladin structure: evidence key, Acts 0–10, level-60 audit, zone/dungeon exceptions, class systems, speed rules, services, route summary, and dated sources. Preserve checklists and practical voice while labeling beta details and recommendations. Generalize conflicting older talent mechanics rather than presenting them as current.

- [ ] **Step 3: Link the Paladin guide**

Add a Paladin section to the Classes hub and add Undead Paladin to Start Here's available class paths. Leave Shaman as future coverage until Task 2.

- [ ] **Step 4: Verify content and production output**

Rerun Step 1; expected: PASS. Audit against the design and current references for access, Mana/roles, Seals/Judgement, Holy Strike, dungeon preparation, and mount/raid wording. Check that beta details are labeled and no external content is copied. Run `npm run typecheck && npm run build`; inspect `build/docs/classes/paladin/undead-1-60.html` for title, acts, and correct base path.

- [ ] **Step 5: Commit**

Run `git status --short` and `git diff --check`; expected: only intended content files. Commit with `docs: add Undead Paladin leveling guide`.

### Task 2: Windshaper Skyborne Shaman levels 1–60 and publication

**Files:**
- Create: `docs/classes/shaman/_category_.json`, `docs/classes/shaman/skyborne-1-60.mdx`
- Modify: `docs/classes/index.mdx`, `docs/intro.mdx`

**Interfaces:**
- Consumes: `.superpowers/research/skyborne-shaman.txt`, the design's Shaman/Skyborne references, and Task 1's navigation pattern
- Produces: `/docs/classes/shaman/skyborne-1-60` and links from Classes/Start Here

- [ ] **Step 1: Run the failing inline acceptance check**

Use Node assertions for the new file and `Windshaper Skyborne Shaman: Levels 1–60`, `Heroic Pack`, `Zephras Isle`, `Thendal`, `Valanaar`, `Call of the Elements`, `Totemic Projection`, `Beta-reported`, `Guide recommendation`, `Sources`, and `2026-11-04`. Expected: FAIL because the guide is absent. Do not create a test file.

- [ ] **Step 2: Write the complete Shaman guide**

Implement every section in the design's Shaman structure: evidence key, Acts 0–10, level-60 audit, exceptions, class systems, speed rules, services, route summary, and dated sources. Preserve the route while labeling beta quest/travel/tuning/vendor/mount details. Use Mana and leather until 40; keep Enhancement/Elemental/Restoration and profession choices clearly recommendations.

- [ ] **Step 3: Link the Shaman guide**

Add a Shaman section to the Classes hub and add Windshaper Skyborne Shaman to Start Here. Remove Shaman from generic future-class coverage without removing other planned classes.

- [ ] **Step 4: Verify both guides locally**

Rerun Step 1; expected: PASS. Audit current access/faction/zone claims and totem milestones against the design references; confirm no early-mail contradiction or unlabeled estimate remains. Run `npm run typecheck && npm run build`. Serve the production build and request the homepage plus both new guide routes under `/wow-forever-guides/`, expecting HTTP 200. Inspect generated HTML for all three class paths.

- [ ] **Step 5: Commit**

Run `git status --short` and `git diff --check`; expected: only intended content files. Commit with `docs: add Skyborne Shaman leveling guide`.

- [ ] **Step 6: Publish after final review**

After whole-branch review and required fixes, merge to `main`, rerun typecheck/build, and push. Wait for GitHub Actions, then fetch the live Undead Paladin and Windshaper Skyborne Shaman guide URLs; expected: deployment success and current content at both.
