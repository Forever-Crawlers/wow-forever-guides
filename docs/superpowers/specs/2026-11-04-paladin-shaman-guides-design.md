# Undead Paladin and Skyborne Shaman guides design

## Intent and why

Add the two owner-supplied leveling guides as complete, readable 1–60 paths in the existing class library. Preserve their act-based structure and practical checklists without presenting beta reports, recommendations, or estimates as settled game facts.

## Goals

- Publish **Undead Paladin: Levels 1–60** as one complete guide page.
- Publish **Windshaper Skyborne Shaman: Levels 1–60** as one complete guide page.
- Preserve each document's level-ordered acts, checklists, lessons, gear checks, class systems, zone/dungeon exceptions, and endgame handoff.
- Label confirmed/current information, beta-reported details, and guide recommendations clearly and consistently.
- Add current source links and review date `2026-11-04` to both guides.
- Link both completed guides from Start Here and the Classes hub.
- Verify Markdown/MDX, internal links, TypeScript, production builds, local routes, and live deployment.

## Non-goals and anti-goals

- No splitting acts into separate pages.
- No additional race/class guides, interactive talent tools, or new dependencies.
- No copied images, maps, or promotional material from external guide sites.
- No exhaustive point-by-point talent build presented as current when the supplied document conflicts with newer references.
- No removal of uncertainty labels to make the content look more authoritative.
- No changes to shared onboarding, deployment configuration, or the Torchlit theme.

## Source documents

- `WoW_Forever_Undead_Paladin_Leveling_Guide.docx`, extracted for this session to `.superpowers/research/undead-paladin.txt`.
- `WoW_Forever_Skyborne_Shaman_Leveling_Guide.docx`, extracted to `.superpowers/research/skyborne-shaman.txt`.

Use the owner-supplied text as the route and voice source. Current external references are verification aids, not text to copy.

## Current references

### Paladin

- [WowCarry's Forever Paladin guide](https://wowcarry.com/blog/wow-forever/paladin-guide), reviewed November 2, documents current role choices, talent-tree changes, and cautions around prelaunch/live data.
- [Blizzard's Forever starter guide](https://worldofwarcraft.blizzard.com/news/24315280/new-players-starter-guide-welcome-to-world-of-warcraft-forever) supplies shared access, ruleset, interface, profession, and social context.
- The supplied document's claims about Undead Paladin access, Bandarion Keep, Seals/Judgement, Holy Strike, Blessings, tanking, and mounts must retain their stated evidence status unless a current reference confirms them.

### Skyborne Shaman

- [Mobalytics' Forever Shaman leveling guide](https://mobalytics.gg/wow-forever/classes/shaman-leveling-guide) documents Enhancement leveling, current totem tools, Mana discipline, weapon training, dungeon-quest preparation, and level-based class progression.
- [Overgear's Skyborne guide](https://overgear.com/guides/wow-forever/skyborne-guide/) documents Windshaper faction choice, Shaman access, the Heroic Pack requirement, Zephras Isle, and current racial descriptions.
- [Blizzard's Forever starter guide](https://worldofwarcraft.blizzard.com/news/24315280/new-players-starter-guide-welcome-to-world-of-warcraft-forever) confirms Skyborne faction choice, paid access, Zephras Isle's 1–12 range, and shared onboarding.
- The supplied document's beta quest names, exact racial numbers, vendor locations, mount costs, and route estimates must not be promoted to confirmed facts.

## Approaches

- **Selected: one full page per guide with evidence labels.** This preserves each continuous route, matches the existing Orc Hunter format, and uses Docusaurus's on-page navigation for acts and systems.
- **Rejected: trim both to levels 1–20.** This would be easier to verify but discards most of the supplied content and was not selected by the owner.
- **Rejected: separate page per act.** Deep links would improve, but roughly twenty extra pages would interrupt continuous routes and complicate maintenance.

## Shared format and evidence policy

Each page begins with audience, scope, how to use the acts, and a compact evidence key:

- **Current/confirmed:** supported by the supplied document's confirmed ledger and/or current references.
- **Beta-reported:** quest names, exact tuning, coordinates, vendor inventories, mount details, and other details that may have changed.
- **Guide recommendation:** route, specialization, gear, profession, and efficiency choices rather than game facts.

Use an admonition before blocks containing beta route details. Keep the rule “when the game and guide disagree, trust the current game, quest log, and tooltips.” Do not repeat a label on every sentence; label the relevant section or table.

Use MDX headings, lists, tables, and task-list checkboxes. Keep one `h1`, use `h2` for acts/systems and `h3` for goals/lessons/gear where useful. Convert source checkbox symbols to Markdown task-list items. Remove DOCX table-of-contents artifacts and page-number fragments.

## Undead Paladin page

Create:

- `docs/classes/paladin/_category_.json` — label `Paladin`, position 2.
- `docs/classes/paladin/undead-1-60.mdx`.

Content structure:

1. **Introduction and evidence key:** first Horde Paladin option, no extra race unlock purchase, Normal-ruleset beginner compatibility, and how to use the route.
2. **Act 0 — setup and meeting friends:** Undead/Paladin creation, same faction/ruleset, Tirisfal vs. Durotar starts, zeppelin-based meetup planning.
3. **Act 1 — Deathknell, 1–4:** class introduction, Seal of Righteousness, early Judgement/Blessing habits, vendors and first weapon/bags.
4. **Act 2 — Brill and the road, 4–7:** class-chain continuation, Holy Strike at 6, defensive/stun tools, and Bandarion Keep direction. Keep named quest/item specifics beta-labeled.
5. **Act 3 — Bandarion Keep, 7–10:** class hub, keep quest arc, Linen/Redemption preparation, Seal of Fury and Blessing of Protection concepts.
6. **Act 4 — finishing Tirisfal, 10–12:** remaining zone loops, Undercity services, Redemption at 12, zeppelin travel, and weapon training.
7. **Act 5 — Silverpine, 12–16:** Sepulcher hub, safe pulls and patrol awareness, Blessing of Wisdom, Retribution Aura/Righteous Fury distinctions, quest-item discipline.
8. **Act 6 — Ruins of Lordaeron, 15–20:** quest-loaded first clear, tank/heal/damage role choices, level-20 Consecration/Blessing of Kings/Exorcism, and Seal of Command as a recommendation with current-tree caution.
9. **Act 7 — levels 20–30:** Hillsbrad/Barrens choices, Retribution solo spine, optional dungeon roles, weapon skills, and mount savings.
10. **Act 8 — levels 30–39:** Arathi/Shimmering Flats and alternatives, role experimentation, Mana discipline, and two-handed weapon priorities.
11. **Act 9 — levels 40–45:** plate and Summon Warhorse details with evidence labels, Riverglades, Krol'dok Stronghold, and role reassessment.
12. **Act 10 — levels 45–60:** Plaguelands and newer dungeon ladder, level-60 charger/class quest as labeled in the source, endgame role choice, and scheduled raid-content handoff.
13. **Level-60 audit:** role-appropriate weapon skills, Seals/Blessings/Auras, Mana, mounts, professions, funds, and group/guild readiness.
14. **Zone and dungeon exception table:** preserve the source table's route exceptions without asserting Alliance-side detours are recommended.
15. **Class systems:** Seals/Judgement, Holy Strike, Blessings/Auras, Mana economy, Undead racials, three roles, professions, mounts, dungeon etiquette, and speed rules. Exact racial percentages and older talent mechanics remain beta/recommendation labeled or are generalized.
16. **Services cheat sheet, route summary, sources, and review date.**

## Windshaper Skyborne Shaman page

Create:

- `docs/classes/shaman/_category_.json` — label `Shaman`, position 3.
- `docs/classes/shaman/skyborne-1-60.mdx`.

Content structure:

1. **Introduction and evidence key:** Windshaper is the Horde branch, faction chosen at creation, Shaman access, Heroic Pack-or-higher requirement, and subscription distinction.
2. **Act 0 — setup and meeting friends:** pack/subscription check, Horde choice, character creation, and planned mainland meetup around 12–13.
3. **Act 1 — Thendal, 1–4:** first quests, Lightning Bolt, melee when enemies close, Mana pacing, vendors, and weapon/bag basics.
4. **Act 2 — Shen'dar, 4–7:** Earth totem/class quest, Walk on Air, campsite/rested introduction, and beta-labeled quest names.
5. **Act 3 — Valanaar, 7–10:** coastal hub, Fire totem/class quest, healing/Mana habits, and departure preparation.
6. **Act 4 — leaving Zephras Isle, 10–12:** finish the isle and use the source's western-skyboat direction as beta-reported; emphasize checking the destination rather than presenting hostile-city outcomes as current fact.
7. **Act 5 — mainland handoff, 12–13:** Thunder Bluff/Orgrimmar guided transition, trainers, weapon masters, services, and group meetup.
8. **Act 6 — Barrens, 13–16:** Crossroads, Ragefire Chasm quest preparation, Enhancement recommendation, Cooking, and mount fund.
9. **Act 7 — Ruins of Lordaeron, 16–20:** optional dungeon route, level-20 Call of the Elements/Totemic Recall/Ghost Wolf, totem presets, and weapon/imbue habits. Use leather until 40; remove the source's contradictory implication that mail may be equipped early.
10. **Act 8 — levels 20–30:** Barrens/Ashenvale/Hillsbrad/Thousand Needles choices, Water totem, Totemic Projection, profession choices, and role exploration.
11. **Act 9 — levels 30–45:** 30s alternatives, Riverglades, Krol'dok Stronghold, level-40 mount/mail guidance, and Windfury recommendations labeled as guide choices. Racial mount vendor/cost details remain beta-labeled or generalized.
12. **Act 10 — levels 45–60:** later zone/dungeon ladder, endgame spec choice, and Mount Hyjal as endgame rather than leveling content.
13. **Level-60 audit:** chosen role, weapon skills, totem presets, recall/projection, imbues, armor, professions, funds, and group/guild readiness.
14. **Zone and dungeon exception table:** preserve useful Horde route warnings and clearly label beta-reported travel/dungeon details.
15. **Class systems:** current totem workflow, weapon imbues, leather-to-mail progression, Enhancement/Elemental/Restoration roles, Windshaper racials, professions, mounts, dungeon roles, and speed rules. Exact numbers remain labeled where they depend on beta tuning.
16. **Services cheat sheet, route summary, sources, and review date.**

## Navigation integration

- Add Paladin and Shaman sections to `docs/classes/index.mdx`, linking the completed guides and removing them from generic future-class coverage.
- Update `docs/intro.mdx` to offer all three completed class paths: Orc Hunter, Undead Paladin, and Windshaper Skyborne Shaman.
- Keep the existing New Player, Races, Leveling, Dungeons, Professions, Endgame, and Reference structure unchanged.
- Do not add links to unwritten race guides or talent tools.

## Verification

- Before implementation, inline Node checks must fail for both new files, titles, and key milestones.
- After implementation, the same checks must pass for both guides, including Undead Paladin's Bandarion Keep/Holy Strike/Ruins of Lordaeron and Skyborne Shaman's Zephras Isle/Call of the Elements/Windshaper access.
- Check for removed DOCX artifacts, contradictory early-mail Shaman advice, unlabeled “guide estimate” text, and missing source/review sections.
- Run `npm run typecheck` and `npm run build`; internal broken links must fail.
- Inspect generated HTML and serve both new routes under `/wow-forever-guides/`, expecting HTTP 200.
- After independent review, merge and push `main`, confirm GitHub Actions succeeds, and fetch both live guide URLs.
