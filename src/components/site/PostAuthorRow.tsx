import { Link } from "react-router-dom"
import { resolveAuthor } from "@/blog/authors"

type PostAuthorRowProps = {
  author: { name: string; role: string; avatar?: string }
  category: string
}

export function PostAuthorRow({ author, category }: PostAuthorRowProps) {
  const profile = resolveAuthor(author)

  return (
    <div className="post-author-row">
      <img
        className="post-author-avatar"
        src={profile.avatar}
        alt={profile.name}
        width={26}
        height={26}
        loading="eager"
        decoding="async"
      />
      <p className="post-author-meta">
        <span className="post-author-name">{profile.name},</span>{" "}
        <span className="post-author-role">{profile.role}</span>
      </p>
      <Link className="post-category-badge" to="/blog">
        {category}
      </Link>
    </div>
  )
}
