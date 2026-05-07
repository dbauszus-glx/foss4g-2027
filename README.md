# FOSS4G 2027 Bristol Website

This is a fork of the FOSS4G 2025 website: https://github.com/osgeo-oceania/foss4g-2025

The production site can be visited here: https://2025.foss4g.org/

## Website Development

- Required software: `git` `nodejs (>=18)` `npm`
- Used Frameworks: `sveltekit` `svelte` `mdsvex` `daisyui` `tailwind css`

### Quickstart

```bash
git clone https://github.com/osgeo-oceania/foss4g-2025-dev/
cd foss4g-2025-dev
npm install
npm run dev
```

### Editing Page Content

- Page content is stored in `/src/routes/`
  - ex. for the url `https://osgeo-oceania.github.io/foss4g-2025-dev/attend/call-for-papers/`
  - the content is at `/src/routes/attend/call-for-papers/+page.svx`
