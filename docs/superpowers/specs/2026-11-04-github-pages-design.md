# GitHub Pages deployment design

## Intent

Publish WoW Forever Guides as a public Docusaurus website and automatically update it when `main` changes.

## Goals

- Configure Docusaurus for `https://forever-crawlers.github.io/wow-forever-guides/`.
- Add a GitHub Actions workflow that installs locked dependencies, builds the site, and deploys `build/` to GitHub Pages on pushes to `main` and manual runs.
- Verify TypeScript and the production build with the final URL settings.
- Commit and push the deployment configuration to `origin/main`.
- Confirm the public site responds after GitHub Pages is enabled.

## Non-goals

- Configuring a custom domain.
- Changing guide content, branding, or site behavior.
- Adding automated test files or upgrading dependencies.

## Constraints and decisions

- Use GitHub Actions, selected by the project owner, rather than manual `gh-pages` deployments.
- Use the existing npm lockfile and Docusaurus build command.
- GitHub Pages is currently disabled; enabling it in repository settings may require the owner's web session.
- Keep the existing GitHub remote and deploy from `main`.

## Approaches

- **Selected: GitHub Actions.** Automatic deployments keep the public site synchronized with `main` without local credentials on future updates.
- **Rejected: manual `gh-pages` branch.** This is simpler initially but requires a manual local deployment after every update.
