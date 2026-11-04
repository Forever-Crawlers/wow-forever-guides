# Orc Hunter v2 update design

## Intent

Replace the existing Orc Hunter 1–20 guide with the owner-supplied v2 full 1–60 route, preserving its beginner-friendly act structure while clearly separating current facts, beta reports, and recommendations.

## Goals

- Replace `docs/classes/hunter/orc-1-20.mdx` with `docs/classes/hunter/orc-1-60.mdx` as one authoritative guide.
- Preserve setup, Acts 0–10, checklists, gear checks, pet/talent/zone progression, class systems, exceptions, services, and level-60 handoff from the supplied document.
- Use **Current/confirmed**, **Beta-reported**, and **Guide recommendation** labels for sections that need them.
- Retain current Forever mechanics: Mana, gear-scaled pets, combat traps, current ability milestones, pet families, and the removal of Orc Command.
- Update Start Here, the Classes hub, and the Leveling roadmap to link the completed full guide instead of describing later Hunter bands as planned.
- Include current sources and review date `2026-11-04`.

## Non-goals and constraints

- Do not keep a duplicate early guide or add a redirect dependency.
- Do not copy external guide text/images or introduce new dependencies/test files.
- Do not present beta quest orders, exact tuning, pet behavior, vendor locations, prices, or mount estimates as current confirmed facts.
- Generalize or label conflicting talent and melee-weaving recommendations rather than asserting them.
- Preserve shared onboarding, other class guides, the theme, and deployment configuration.

## Approaches

- **Selected: replace and rename to 1–60.** One current guide avoids synchronization problems and gives readers the complete path.
- **Rejected: keep separate 1–20 and 1–60 guides.** This would preserve the existing URL but duplicate early content and create avoidable maintenance.

## Source and format

Source: `WoW_Forever_Orc_Hunter_Leveling_Guide_v2.docx`, extracted for implementation to `.superpowers/research/orc-hunter-v2.txt`.

Use one MDX page with the supplied act order:

1. Introduction, evidence key, and setup.
2. Valley of Trials, 1–4.
3. Early Durotar/Razor Hill, 4–10.
4. Taming the Beast and first-pet care at 10.
5. Durotar completion, Orgrimmar, and early Barrens, 10–16.
6. Level-20 toolkit, including Aimed Shot, Cheetah, Freezing Trap, and Disengage.
7. Levels 21–30: Beast Mastery, Summon Hawk, pet ability progression, and Feign Death.
8. Levels 30–39: zones, pet ability safari, weapon upgrades, and mount savings.
9. Levels 40–45: mail, mount, Riverglades, and Krol'dok Stronghold.
10. Levels 45–60: later zones, dungeon ladder, pet ranks, and endgame role choice.
11. Level-60 audit, exceptions, Hunter systems, efficiency rules, services, and route summary.
12. Sources and review date.

Convert source checkbox steps to Markdown task lists. Use admonitions for beta-reported quest, trainer, tame-table, vendor, and mount details. Preserve useful recommendations without claiming they are mandatory or mathematically optimal.

Use these existing verification references:

- [Blizzard's Forever starter guide](https://worldofwarcraft.blizzard.com/news/24315280/new-players-starter-guide-welcome-to-world-of-warcraft-forever)
- [Icy Veins' Forever Beast Mastery Hunter guide](https://www.icy-veins.com/wow-forever/beast-mastery-hunter-leveling)
- [Maxroll's Forever Hunter guide](https://maxroll.gg/wow-forever/class-guides/hunter-leveling-guide)

## Verification

- Run failing inline checks first for the new title, full-range acts, evidence labels, current milestones, and source section.
- After implementation, verify the new page and all updated links; ensure no internal link still targets `orc-1-20` and no later Hunter roadmap entry is labeled planned.
- Run TypeScript and production builds, inspect generated HTML, and serve the new route locally under `/wow-forever-guides/`.
- After independent review, merge and push `main`, confirm GitHub Actions succeeds, and fetch the live 1–60 guide.
