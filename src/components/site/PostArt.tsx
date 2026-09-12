import type { Article } from "@/blog-content"

type PostArtProps = {
  art: Article["art"]
  title: string
  category?: string
  variant?: "hero" | "card"
}

export function PostArt({ art, title, category, variant = "card" }: PostArtProps) {
  const tag = (category ?? art.label).toUpperCase()

  return (
    <div
      className={`post-art-frame tone-${art.tone}${variant === "hero" ? " is-hero" : " is-card"}`}
    >
      <span className="post-art-noise" aria-hidden />
      <span className="post-art-noise post-art-noise-2" aria-hidden />
      <span className="post-art-noise post-art-noise-3" aria-hidden />
      <div className="post-art-stack">
        <span className="post-art-chip">{tag}</span>
        <span className="post-art-cell post-art-cell-mid">{art.cells[0]}</span>
        <span className="post-art-cell post-art-cell-title">{title}</span>
      </div>
    </div>
  )
}
