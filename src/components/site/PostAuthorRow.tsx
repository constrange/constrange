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
      <div className="post-author">
        <img
          className="post-author-avatar"
          src={profile.avatar}
          alt=""
          width={40}
          height={40}
          loading="eager"
          decoding="async"
        />
        <p className="post-author-meta">
          <strong>{profile.name},</strong> <span>{profile.role}</span>
        </p>
      </div>
      <Link className="post-category-badge" to="/blog">
        {category}
      </Link>
    </div>
  )
}
