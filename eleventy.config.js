import { execSync } from "node:child_process"
import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const siteDir = path.join(root, "_site")

function copySiteAssets() {
  fs.cpSync(path.join(root, "generated"), siteDir, { recursive: true, force: true })
  fs.cpSync(path.join(root, "public"), siteDir, { recursive: true, force: true })
}

export default function (eleventyConfig) {
  eleventyConfig.on("eleventy.before", async () => {
    execSync("tsx --tsconfig tsconfig.build.json scripts/generate-blog-og.tsx", { stdio: "inherit" })
    execSync("tsx --tsconfig tsconfig.build.json scripts/prerender.tsx", { stdio: "inherit" })
    execSync("node scripts/build-assets.mjs", { stdio: "inherit" })
  })

  eleventyConfig.addWatchTarget("./src")
  eleventyConfig.addWatchTarget("./scripts")
  eleventyConfig.addWatchTarget("./public")

  eleventyConfig.setServerOptions({
    port: 5173,
  })

  eleventyConfig.on("eleventy.after", () => {
    copySiteAssets()
    execSync("node scripts/write-hosting.mjs", { stdio: "inherit" })
  })

  return {
    dir: {
      input: "eleventy-src",
      output: "_site",
    },
  }
}
