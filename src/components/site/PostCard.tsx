import { Link } from "react-router-dom"
import type { Article } from "@/blog-content"

export function PostCard({ post, featured = false }: { post: Article; featured?: boolean }) {
  return (
    <Link className={featured ? "post-card is-featured" : "post-card"} to={`/blog/${post.slug}`}>
      <div className={`post-card-media tone-${post.art.tone}`} aria-hidden="true">
        <div className="post-art-comp">
          <span className="post-art-chip">{post.art.label}</span>
          <div className="post-art-cells">
            <span>{post.art.cells[0]}</span>
            <span>{post.art.cells[1]}</span>
          </div>
        </div>
      </div>
      <div className="post-card-body">
        <div className="meta">
          <span>{post.category}</span>
          <time dateTime={post.dateIso}>{post.date}</time>
          <em>{post.readTime}</em>
        </div>
        <h3>{post.title}</h3>
        <p>{post.deck}</p>
        <span className="arrow-link">
          Read post <i>→</i>
        </span>
      </div>
    </Link>
  )
}
