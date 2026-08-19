# FOSS4G 2027 Bristol Website

This is a fork of the [OSGEO OCEANIA] FOSS4G 2025 website: https://github.com/osgeo-oceania/foss4g-2025

This site is deployed to the github-pages environment by the [Build and Deploy to GitHub Pages workflow](https://github.com/osgeouk/foss4g-2027/blob/main/.github/workflows/build-and-deploy.yml).

The site is served from the root path, so the `PUBLIC_BASE_PATH` variable in `.env` is empty. If the site ever needs to be served from a subfolder again, set `PUBLIC_BASE_PATH` in `.env` (and in the workflow yml) together with `kit.paths.base` in `svelte.config.js`.

## Website Development

Required software: `git` `nodejs (>=18)` `npm`
Used Frameworks: `sveltekit` `svelte` `mdsvex` `daisyui` `tailwind css`

### Quickstart

```bash
git clone https://github.com/osgeouk/foss4g-2027
cd foss4g-2027
npm install
npm run dev
```

### Editing Page Content

Page content is stored in `/src/routes/`

For the url `https://<site-root>/sponsorship`

The content is at `/src/routes/sponsorship/+page.svx`
