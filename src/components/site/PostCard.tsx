import { Link } from "react-router-dom"
import type { Article } from "@/blog-content"
import { PostArt } from "@/components/site/PostArt"

export function PostCard({ post, featured = false }: { post: Article; featured?: boolean }) {
  return (
    <Link className={featured ? "post-card is-featured" : "post-card"} to={`/blog/${post.slug}`}>
      <div className="post-card-media" aria-hidden="true">
        <PostArt art={post.art} />
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
