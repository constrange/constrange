import { useEffect, useRef, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { postBySlug, posts } from "@/blog-content"
import { PostArt } from "@/components/site/PostArt"
import { PostCard } from "@/components/site/PostCard"
import { FaqList, Prose, ReadingProgress, TableOfContents } from "@/components/site/Prose"
import { PageHero } from "@/components/site/Blocks"
import { Reveal } from "@/components/site/Layout"
import { copyToClipboard, openShareWindow, publicPostUrl, twitterIntentUrl } from "@/share"

export default function BlogPost() {
  const { slug } = useParams()
  const article = postBySlug(slug)
  const bodyRef = useRef<HTMLDivElement>(null)
  const [copyLabel, setCopyLabel] = useState("Copy link")
  const copyReset = useRef<number>(0)

  /* let the hero gradient show through the sticky header */
  useEffect(() => {
    document.body.classList.add("on-gradient")
    return () => document.body.classList.remove("on-gradient")
  }, [])

  useEffect(() => {
    setCopyLabel("Copy link")
    return () => window.clearTimeout(copyReset.current)
  }, [article?.slug])

  if (!article) {
    return (
      <PageHero
        eyebrow="404"
        title="Post not found"
        blurb="That post is not on the blog. Browse everything we have published so far."
        primary={{ label: "Back to blog", to: "/blog" }}
        secondary={null}
      />
    )
  }

  const related = posts.filter((a) => a.slug !== article.slug).slice(0, 4)
  const shareUrl = publicPostUrl(article.slug)

  const flashCopyLabel = (label: string) => {
    window.clearTimeout(copyReset.current)
    setCopyLabel(label)
    copyReset.current = window.setTimeout(() => setCopyLabel("Copy link"), 1800)
  }

  const onCopyLink = async () => {
    const ok = await copyToClipboard(shareUrl)
    flashCopyLabel(ok ? "Copied!" : "Copy failed")
  }

  const onPost = () => {
    openShareWindow(twitterIntentUrl(article.title, shareUrl))
  }

  return (
    <article className="post">
      <ReadingProgress target={bodyRef} />

      <header className={`post-hero tone-${article.art.tone}`}>
        <div className="post-hero-inner shell">
          <div className="post-hero-copy">
            <Link className="category-pill" to="/blog">
              {article.category}
            </Link>
            <time className="post-date">{article.date}</time>
            <h1 className="post-title">{article.title}</h1>
            <p className="post-deck">{article.deck}</p>
            <div className="post-byline">
              <p>
                <strong>{article.author.name},</strong> <span>{article.author.role}</span>
              </p>
              <div className="post-tags">
                {article.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="post-art" aria-hidden="true">
            <PostArt art={article.art} title={article.title} category={article.category} variant="hero" />
          </div>
        </div>
      </header>

      <div className="post-layout shell" ref={bodyRef}>
        <aside className="post-aside">
          <TableOfContents blocks={article.body} />
          <div className="post-share">
            <h4>Share</h4>
            <div>
              <button type="button" onClick={onCopyLink}>
                {copyLabel}
              </button>
              <button type="button" onClick={onPost}>
                Post
              </button>
            </div>
          </div>
        </aside>

        <div className="post-body">
          <Prose blocks={article.body} />
          <div className="post-faq">
            <FaqList items={article.faqs} title="Frequently asked questions" />
          </div>
        </div>
      </div>

      <section className="section shell">
        <Reveal className="section-head">
          <span className="eyebrow">Keep reading</span>
          <h2 className="serif-md">Related posts</h2>
        </Reveal>
        <div className="blog-grid">
          {related.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 2) * 80}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
      </section>
    </article>
  )
}
