import { posts } from "../src/blog-content.ts"
import { products, solutions } from "../src/site-data.ts"

export const staticRoutes = [
  "/",
  "/products",
  ...products.map((product) => `/products/${product.slug}`),
  "/features",
  "/pricing",
  "/enterprise",
  "/customers",
  ...solutions.map((solution) => `/solutions/${solution.slug}`),
  "/languages",
  "/docs",
  "/how-we-work",
  "/docs/api-reference",
  "/docs/guides",
  "/status",
  "/changelog",
  "/blog",
  ...posts.map((post) => `/blog/${post.slug}`),
  "/newsroom",
  "/playground",
  "/research",
  "/understand",
  "/structure",
  "/priorities",
  "/about",
  "/security",
  "/careers",
  "/media",
  "/contact",
  "/contact/sales",
  "/contact/support",
  "/contact/startup-program",
  "/legal/terms-of-service",
  "/legal/privacy-policy",
]

export const notFoundRoute = "/__not-found__"

export const redirectRoutes = [
  { from: "/velocity", to: "/" },
  { from: "/desk", to: "/" },
  { from: "/desk/signup", to: "/" },
  { from: "/dashboard", to: "/" },
  { from: "/dashboard/login", to: "/" },
  { from: "/dashboard/signup", to: "/" },
  { from: "/legal/subprocessors", to: "/security" },
]
