import type { Article } from "@/blog-content"

type PostArtProps = {
  art: Article["art"]
  variant?: "hero" | "card"
}

export function PostArt({ art, variant = "card" }: PostArtProps) {
  return (
    <div
      className={`post-art-frame tone-${art.tone}${variant === "hero" ? " is-hero" : " is-card"}`}
    >
      <span className="post-art-noise" aria-hidden />
      <div className="post-art-stack">
        <span className="post-art-chip">{art.label}</span>
        <span className="post-art-cell post-art-cell-a">{art.cells[0]}</span>
        <span className="post-art-cell post-art-cell-b">{art.cells[1]}</span>
      </div>
    </div>
  )
}
