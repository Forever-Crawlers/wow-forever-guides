# Torchlit Crossover theme design

## Intent

Rebrand WoW Forever Guides with the supplied Forever Crawlers logo and the selected Torchlit Crossover direction: Horde crimson and iron, torchlight gold, and subtle Dungeon Crawler Carl arcade energy while keeping guides readable.

## Goals

- Download the owner-supplied Discord logo as a local WebP asset and use it for the favicon, navbar, and homepage hero.
- Create dark iron and light parchment color modes with crimson, ember, and gold accents.
- Restyle the homepage hero, buttons, and cards to match the approved mockup; use Class Guides, Dungeon Guides, and Crawler Corner as the card labels without creating new guide pages.
- Update homepage metadata and the hero link text while retaining the existing docs destination.
- Swizzle the safe TypeScript `Footer/Layout` and `Admonition/Layout` components to support consistent custom footer and guide-callout styling.
- Verify TypeScript, production output, the GitHub Pages base path, and rendered homepage/docs responses before publishing.

## Non-goals and anti-goals

- No new dependencies, guide content, custom domain, or deployment changes.
- No unsafe swizzling of navbar, documentation cards, or routing internals.
- Do not sacrifice documentation readability or light/dark mode support for visual effects.
- Do not replace the supplied logo with a recreated version.

## Constraints and decisions

- Use the selected Torchlit Crossover mockup as the visual authority.
- Use the owner-selected swizzling approach, limited to safe components that benefit from it.
- Preserve Docusaurus behavior and existing GitHub Actions deployment.
- Use the supplied asset: `https://cdn.discordapp.com/icons/1566613130203897888/f7794229a292bdbcb0fb6f03501a4380.webp?size=80&quality=lossless`.

## Approaches

- **Selected: focused customization plus safe swizzles.** Existing homepage components and CSS cover the main visual design; swizzled footer and admonition layouts provide the requested deeper theme ownership without taking over routing or navigation internals.
- **Rejected: CSS only.** Simpler, but not the approach selected by the project owner.
- **Rejected: broad/unsafe ejection.** Too much upstream code to maintain for a visual theme and unnecessary for the approved design.
