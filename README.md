# Constrange

Independent decision intelligence marketing site — built with [Eleventy](https://www.11ty.dev/).

## Commands

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # output: _site/
npm run preview  # serve production build locally
```

## Architecture

This site preserves the original React components and CSS. At build time:

1. **React SSR** prerenders every route into static HTML (`generated/`)
2. **esbuild** bundles the client hydration script (`generated/assets/site.js`)
3. **Eleventy** orchestrates the build, copies assets, and writes hosting files (`sitemap.xml`, redirects)

After deployment, no Node.js server is required.

See [DEPLOY.md](./DEPLOY.md) for deployment instructions.
