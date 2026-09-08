# Constrange — how to deploy

This repository is the Constrange company site (`constrange.com`): an Eleventy static site with React SSR prerendering and client hydration.

---

## Local development

```bash
npm install --legacy-peer-deps
npm run dev
# http://localhost:8080 (Eleventy default port)
```

## Production build

```bash
npm run build
# output: _site/
```

Preview the production build:

```bash
npm run preview
```

---

## Deploy to GitHub Pages (automatic on every push)

This repo includes `.github/workflows/deploy.yml`. **Every push to `main`** builds the Eleventy site and deploys it to GitHub Pages.

### One-time setup on GitHub

1. Create a new repository on GitHub (for example `constrange`).
2. Push this project to the `main` branch.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Push to `main` (or re-run the workflow from the **Actions** tab).

Your site will be live at:

- `https://<your-username>.github.io/<repo-name>/` for a normal project repo
- `https://<your-username>.github.io/` if the repo is named `<your-username>.github.io`

### Custom domain (recommended)

This site uses root paths like `/assets/...` and SEO canonical URLs for `https://constrange.com`.

Best setup:

1. **Settings → Pages → Custom domain** → enter `constrange.com`
2. Add the DNS records GitHub shows you
3. Keep `SITE_ORIGIN` in `src/seo.ts` as `https://constrange.com`

### How future updates go live

```text
Edit code → git commit → git push to main → GitHub Actions builds → live site updates
```

You do **not** need to upload the zip again after this is set up.

---

## Deploy (Vercel)

1. Import the repository.
2. **Framework:** Other
3. **Build command:** `npm run build`
4. **Output directory:** `_site`
5. **Install command:** `npm install`
6. Add domains: `constrange.com`, `www.constrange.com`

Redirects for legacy Velocity/desk URLs are written to `_site/_redirects` and `_site/vercel.json` during build.

---

## Project structure

```
src/                 React components, pages, and content data
src/assets/css/      Site stylesheet (preserved from original design)
src/_includes/       Eleventy includes (reserved for future templates)
src/_data/           Eleventy data (reserved)
scripts/             Prerender, asset build, hosting helpers
public/              Static assets copied to site root
generated/          Prerendered HTML (build artifact, gitignored)
_site/               Production output (gitignored)
eleventy.config.js
```

---

## What runs at build time

1. `scripts/prerender.tsx` — React SSR for every route into `generated/`
2. `scripts/build-assets.mjs` — client hydration bundle + fonts/CSS
3. Eleventy — copies generated pages and `public/` into `_site/`
4. `scripts/write-hosting.mjs` — sitemap and redirect files

No Node.js server is required after deployment.
