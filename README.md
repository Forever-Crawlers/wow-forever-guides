# WoW Forever Guides

A documentation website for WoW Forever Guides, built with [Docusaurus](https://docusaurus.io/) and TypeScript.

Visit the public website at [forever-crawlers.github.io/wow-forever-guides](https://forever-crawlers.github.io/wow-forever-guides/).

## Requirements

- Node.js 20 or newer
- npm

## Installation

```bash
npm install
```

## Local development

```bash
npm run start
```

This starts a local development server and opens the website in your browser. Most changes are reflected live without restarting the server.

## Production build

```bash
npm run build
```

This generates static content in the `build` directory, ready for deployment to a static hosting service.

## Type checking

```bash
npm run typecheck
```

## Deployment

Pushes to `main` automatically build and deploy the website to GitHub Pages using the workflow in `.github/workflows/deploy.yml`. You can also run the workflow manually from the repository's Actions tab.
