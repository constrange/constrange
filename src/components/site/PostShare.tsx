import { useEffect, useRef, useState } from "react"
import {
  SHARE_CHANNELS,
  canNativeShare,
  copyToClipboard,
  nativeShare,
  openShareWindow,
} from "@/share"

type PostShareProps = {
  title: string
  url: string
}

export function PostShare({ title, url }: PostShareProps) {
  const [copyLabel, setCopyLabel] = useState("Copy link")
  const [showNativeShare, setShowNativeShare] = useState(false)
  const copyReset = useRef<number>(0)

  useEffect(() => {
    setShowNativeShare(canNativeShare())
    return () => window.clearTimeout(copyReset.current)
  }, [])

  const flashCopyLabel = (label: string) => {
    window.clearTimeout(copyReset.current)
    setCopyLabel(label)
    copyReset.current = window.setTimeout(() => setCopyLabel("Copy link"), 1800)
  }

  const onCopyLink = async () => {
    const ok = await copyToClipboard(url)
    flashCopyLabel(ok ? "Copied!" : "Copy failed")
  }

  const onNativeShare = async () => {
    await nativeShare(title, url)
  }

  return (
    <div className="post-share">
      <h4>Share</h4>
      <div className="post-share-actions">
        <button type="button" className="post-share-btn" onClick={onCopyLink}>
          {copyLabel}
        </button>
        {SHARE_CHANNELS.map((channel) => (
          <a
            key={channel.id}
            className="post-share-btn"
            href={channel.href(title, url)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => {
              if (channel.id === "email") return
              event.preventDefault()
              openShareWindow(channel.href(title, url))
            }}
          >
            {channel.label}
          </a>
        ))}
        {showNativeShare ? (
          <button type="button" className="post-share-btn" onClick={onNativeShare}>
            More options
          </button>
        ) : null}
      </div>
    </div>
  )
}
