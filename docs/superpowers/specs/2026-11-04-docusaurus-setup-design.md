# Docusaurus setup design

## Intent

Turn this repository into a documentation website for WoW Forever Guides using Docusaurus and TypeScript, then publish the initial template to the existing GitHub repository.

## Goals

- Generate the official Docusaurus classic TypeScript template in the repository root.
- Preserve the existing `LICENSE` and GitHub remote.
- Update the README and ignore rules for the Node.js/Docusaurus project.
- Install dependencies and verify a production build.
- Commit the initial site and push it to `origin/main`.

## Non-goals

- Writing WoW guide content or customizing the visual theme beyond project naming.
- Configuring a public website host or custom domain.
- Adding unrelated applications to this repository.

## Constraints and decisions

- Use the repository root, as selected by the project owner.
- Keep the existing `Forever-Crawlers/wow-forever-guides` GitHub remote.
- Use the existing npm toolchain and the current official Docusaurus TypeScript template.
- Replace the irrelevant Python-specific ignore rules with rules appropriate for this website.
- Commit the design record with the initial project setup.

## Approaches

- **Selected: repository root.** The standard Docusaurus commands work directly from the checkout and the repository has no other application to accommodate.
- **Rejected: `website/` subdirectory.** This would add nesting without a current need to share the repository with another project.
