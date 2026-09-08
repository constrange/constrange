import { useEffect, useMemo, useRef, useState } from "react"
import { Link } from "react-router-dom"
import {
  logos,
  situationStages,
  situations,
  type Situation,
  type SituationNode,
  type SituationStage,
} from "@/site-data"
import { Reveal } from "./Layout"

const NODE_META: { id: SituationNode; label: string; x: number; y: number }[] = (() => {
  const cx = 180
  const cy = 138
  const r = 92
  const ids: SituationNode[] = ["work", "systems", "risk", "time", "people"]
  return ids.map((id, i) => {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / 5
    return {
      id,
      label: id[0].toUpperCase() + id.slice(1),
      x: cx + r * Math.cos(a),
      y: cy + r * Math.sin(a),
    }
  })
})()

const RING = NODE_META.map((n) => `${n.x},${n.y}`).join(" ")

function pointOf(id: SituationNode) {
  return NODE_META.find((n) => n.id === id)!
}

function shorten(a: { x: number; y: number }, b: { x: number; y: number }, pad = 18) {
  const dx = b.x - a.x
  const dy = b.y - a.y
  const len = Math.hypot(dx, dy) || 1
  const ux = dx / len
  const uy = dy / len
  return {
    x1: a.x + ux * pad,
    y1: a.y + uy * pad,
    x2: b.x - ux * pad,
    y2: b.y - uy * pad,
  }
}

function ConstraintField({
  active,
  lit,
  live,
}: {
  active: SituationNode[]
  lit: number
  live: boolean
}) {
  const hot = active.slice(0, Math.max(0, lit))
  const flow = hot
  const flowPath = flow
    .map((id, i) => {
      const p = pointOf(id)
      return `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`
    })
    .join(" ")

  const cx = 180
  const cy = 138

  return (
    <div className={live ? "studio-map-stage live" : "studio-map-stage"}>
      <svg className="studio-map" viewBox="0 0 360 276" role="img" aria-label="Constraint map">
        <defs>
          <radialGradient id="fieldGlow" cx="50%" cy="48%" r="52%">
            <stop offset="0%" stopColor="#271675" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#271675" stopOpacity="0" />
          </radialGradient>
          <marker id="flowHead" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#271675" />
          </marker>
        </defs>

        <circle cx={cx} cy={cy} r="108" fill="url(#fieldGlow)" />
        <polygon className="ring" points={RING} />

        {NODE_META.map((from, i) =>
          NODE_META.slice(i + 1).map((to) => (
            <line key={`${from.id}-${to.id}`} className="mesh" x1={from.x} y1={from.y} x2={to.x} y2={to.y} />
          )),
        )}

        {flow.length > 1 &&
          flow.slice(0, -1).map((id, i) => {
            const seg = shorten(pointOf(id), pointOf(flow[i + 1]))
            return (
              <line
                key={`flow-${id}`}
                className={live ? "flow live" : "flow"}
                x1={seg.x1}
                y1={seg.y1}
                x2={seg.x2}
                y2={seg.y2}
                markerEnd="url(#flowHead)"
              />
            )
          })}

        {flow.length > 1 && live && <path className="flow-pulse" d={flowPath} />}

        {NODE_META.map((n) => {
          const idx = hot.findIndex((id) => id === n.id)
          const on = idx !== -1
          const dx = n.x - cx
          const dy = n.y - cy
          const L = Math.hypot(dx, dy) || 1
          const lx = n.x + (dx / L) * 28
          const ly = n.y + (dy / L) * 28
          return (
            <g key={n.id} className={on ? "node on" : "node"}>
              {on && <circle className="halo" cx={n.x} cy={n.y} r="18" />}
              <circle className="core" cx={n.x} cy={n.y} r={on ? 13 : 8} />
              {on && (
                <text className="idx" x={n.x} y={n.y + 4}>
                  {String(idx + 1).padStart(2, "0")}
                </text>
              )}
              <text className="lbl" x={lx} y={ly + 4}>
                {n.label}
              </text>
            </g>
          )
        })}
      </svg>
      <ol className="studio-flow" aria-label="Active path">
        {active.map((id, i) => (
          <li key={id} className={i < lit ? "on" : ""}>
            <b>{String(i + 1).padStart(2, "0")}</b>
            {pointOf(id).label}
          </li>
        ))}
      </ol>
    </div>
  )
}

function estimateDuration(text: string) {
  const words = text.trim().split(/\s+/).length
  return Math.max(4_800, (words / 2.4) * 1000)
}

function pickEnglishVoice(voices: SpeechSynthesisVoice[]) {
  const english = voices.filter((voice) => /^en([-_]|$)/i.test(voice.lang) || /english/i.test(voice.name))
  const list = english.length ? english : voices
  if (!list.length) return null

  const reject =
    /compact|eloquence|novelty|whisper|zarvox|trinoids|boing|bells|cellos|bad news|good news|albert|fred|organ|superstar|bubbles|jester|junior|princess|kathy|deranged|hysterical|robot|dummy/i

  const score = (voice: SpeechSynthesisVoice) => {
    const label = `${voice.name} ${voice.voiceURI} ${voice.lang}`
    if (reject.test(label)) return -1000
    let points = 0
    if (/neural|natural|premium|enhanced|wavenet|studio|online \(natural\)|multilingual/i.test(label)) points += 90
    if (/google uk english female|google us english|google uk english male/i.test(label)) points += 75
    if (/samantha|karen|moira|tessa|fiona|serena|victoria|kate|martha|zira|aria|jenny|sonia|libby|nana|ava|allison|susan|emily|siri/i.test(label))
      points += 60
    if (/daniel|gordon|rishi|oliver|arthur|thomas|james|ryan|guy|davis|andrew|brian|aaron|tom|david/i.test(label)) points += 50
    if (/en-GB|en_GB/.test(voice.lang)) points += 18
    if (voice.localService) points += 8
    return points
  }

  return [...list].sort((a, b) => score(b) - score(a))[0] ?? null
}

function formatTime(ms: number) {
  const total = Math.max(0, Math.round(ms / 1000))
  const m = Math.floor(total / 60)
  return `${m}:${String(total % 60).padStart(2, "0")}`
}

/** Speech-like bars: silence as 2–5px dots, mid energy, occasional full-height ticks. */
const VOICE_BARS = [
  2, 11, 24, 38, 31, 22, 40, 27, 2, 4, 18, 45, 33, 14, 6, 21, 29, 2, 3, 15, 27, 36, 28, 41, 19, 2, 5, 32, 50, 23, 12, 4, 17, 25, 2, 3, 8, 20, 34, 30, 16, 39, 26, 2, 4, 13, 29, 52, 22, 9, 3, 18, 28, 2,
]

function VoiceWave({
  progress,
  onSeek,
}: {
  progress: number
  onSeek: (p: number) => void
}) {
  const lit = Math.floor(progress * VOICE_BARS.length)
  return (
    <button
      type="button"
      className="studio-seek"
      aria-label="Seek audio"
      onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const cs = getComputedStyle(e.currentTarget)
        const padL = parseFloat(cs.paddingLeft) || 0
        const padR = parseFloat(cs.paddingRight) || 0
        const x = e.clientX - rect.left - padL
        const w = Math.max(1, rect.width - padL - padR)
        onSeek(Math.min(1, Math.max(0, x / w)))
      }}
    >
      {VOICE_BARS.map((h, i) => (
        <i key={i} className={i < lit ? "on" : undefined} style={{ height: h }} aria-hidden />
      ))}
    </button>
  )
}

export function HeroDemo() {
  const [stage, setStage] = useState<SituationStage>("understand")
  const [current, setCurrent] = useState<Situation>(situations[0])
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [heard, setHeard] = useState(0)
  const [lit, setLit] = useState(0)
  const [showReading, setShowReading] = useState(false)
  const [showMove, setShowMove] = useState(false)
  const timers = useRef<number[]>([])
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const started = useRef(0)
  const ended = useRef(false)
  const speakGen = useRef(0)
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null)
  const estimated = useMemo(() => estimateDuration(current.spoken), [current.spoken])
  const [duration, setDuration] = useState(estimated)

  const inStage = useMemo(() => situations.filter((s) => s.stage === stage), [stage])

  const clearTimers = () => {
    speakGen.current += 1
    timers.current.forEach((id) => window.clearTimeout(id))
    timers.current = []
    if (typeof window !== "undefined" && window.speechSynthesis) window.speechSynthesis.cancel()
    const audio = audioRef.current
    if (audio) {
      audio.pause()
      audio.removeAttribute("src")
      audio.load()
      audioRef.current = null
    }
  }

  const reset = (next: Situation) => {
    clearTimers()
    ended.current = false
    setCurrent(next)
    setPlaying(false)
    setProgress(0)
    setHeard(0)
    setLit(0)
    setShowReading(false)
    setShowMove(false)
    setDuration(estimateDuration(next.spoken))
  }

  useEffect(() => {
    setDuration(estimated)
  }, [estimated])

  useEffect(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return
    const remember = () => {
      voiceRef.current = pickEnglishVoice(window.speechSynthesis.getVoices())
    }
    remember()
    window.speechSynthesis.addEventListener("voiceschanged", remember)
    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", remember)
      clearTimers()
    }
  }, [])

  const finishBrief = () => {
    if (ended.current) return
    ended.current = true
    setPlaying(false)
    setProgress(1)
    setHeard(current.pressure.length)
    setShowReading(true)
    timers.current.push(window.setTimeout(() => setShowMove(true), 700))
  }

  const seekTo = (p: number) => {
    const ratio = Math.min(1, Math.max(0, p))
    const audio = audioRef.current
    if (audio && Number.isFinite(audio.duration) && audio.duration > 0) {
      audio.currentTime = ratio * audio.duration
    }
    setProgress(ratio)
    setHeard(Math.floor(ratio * current.pressure.length))
    if (ratio >= 1) finishBrief()
  }

  const begin = () => {
    if (playing) {
      reset(current)
      return
    }

    clearTimers()
    ended.current = false
    setPlaying(true)
    setProgress(0)
    setHeard(0)
    setLit(0)
    setShowReading(false)
    setShowMove(false)
    started.current = performance.now()

    current.nodes.forEach((_, i) => {
      timers.current.push(window.setTimeout(() => setLit(i + 1), 280 + i * 220))
    })

    const gen = speakGen.current
    const text = current.spoken
    const chars = current.pressure.length
    let usedFallback = false

    const followClock = (ms: number) => {
      const tick = () => {
        if (ended.current || speakGen.current !== gen) return
        const p = Math.min(1, (performance.now() - started.current) / ms)
        setProgress(p)
        setHeard((prev) => Math.max(prev, Math.floor(p * chars)))
        if (p < 1) timers.current.push(window.setTimeout(tick, 80))
      }
      timers.current.push(window.setTimeout(tick, 80))
      timers.current.push(window.setTimeout(finishBrief, ms + 600))
    }

    const speakFallback = () => {
      if (usedFallback || speakGen.current !== gen) return
      usedFallback = true
      const synth = typeof window !== "undefined" ? window.speechSynthesis : undefined
      if (!synth) {
        followClock(estimated)
        return
      }
      const voice = pickEnglishVoice(synth.getVoices()) ?? voiceRef.current
      voiceRef.current = voice
      const utter = new SpeechSynthesisUtterance(text)
      if (voice) {
        utter.voice = voice
        utter.lang = voice.lang
      } else {
        utter.lang = "en-GB"
      }
      utter.rate = 0.92
      utter.pitch = 1
      utter.volume = 1
      utter.onboundary = (event) => {
        if (speakGen.current !== gen) return
        if (typeof event.charIndex === "number") {
          const ratio = text.length ? event.charIndex / text.length : 0
          setHeard(Math.floor(ratio * chars))
        }
      }
      utter.onend = finishBrief
      utter.onerror = finishBrief
      synth.speak(utter)
      followClock(estimated)
    }

    const audio = new Audio(`/audio/${current.id}.mp3?v=3`)
    audioRef.current = audio
    audio.addEventListener("loadedmetadata", () => {
      if (speakGen.current !== gen) return
      if (Number.isFinite(audio.duration) && audio.duration > 0) setDuration(audio.duration * 1000)
    })
    audio.addEventListener("timeupdate", () => {
      if (speakGen.current !== gen || !audio.duration) return
      const p = Math.min(1, audio.currentTime / audio.duration)
      setProgress(p)
      setHeard(Math.floor(p * chars))
    })
    audio.addEventListener("ended", () => {
      if (speakGen.current !== gen) return
      finishBrief()
    })
    audio.addEventListener("error", () => {
      if (speakGen.current !== gen) return
      speakFallback()
    })
    void audio.play().catch(speakFallback)
  }

  const heardText = current.pressure.slice(0, heard)
  const restText = current.pressure.slice(heard)

  return (
    <section className="studio" aria-label="How Constrange reads a situation">
      <div className="studio-stages" role="tablist" aria-label="Method">
        {situationStages.map((s) => (
          <button
            key={s.id}
            role="tab"
            aria-selected={stage === s.id}
            className={stage === s.id ? "active" : ""}
            onClick={() => {
              setStage(s.id)
              const first = situations.find((item) => item.stage === s.id)
              if (first) reset(first)
            }}
          >
            <span>{s.num}</span>
            {s.label}
          </button>
        ))}
      </div>

      <div className="studio-body">
        <aside className="studio-rail">
          <p className="studio-kicker">Typical pressure</p>
          <div className="studio-list" role="tablist" aria-label="Situation">
            {inStage.map((item) => (
              <button
                key={item.id}
                role="tab"
                aria-selected={current.id === item.id}
                className={current.id === item.id ? "active" : ""}
                onClick={() => reset(item)}
              >
                {item.title}
              </button>
            ))}
          </div>
          <p className="studio-note">These are the kinds of problems we take on. Choose one, then press play.</p>
        </aside>

        <div className="studio-field">
          <div className={playing ? "studio-player live" : "studio-player"}>
            <button
              className="studio-play"
              onClick={begin}
              aria-label={playing ? "Stop audio brief" : "Play audio brief"}
            >
              {playing ? (
                <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden>
                  <rect x="5" y="4" width="3.5" height="12" fill="#fff" />
                  <rect x="11.5" y="4" width="3.5" height="12" fill="#fff" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden>
                  <path d="M6 4L16 10L6 16V4Z" fill="#fff" />
                </svg>
              )}
            </button>
            <VoiceWave progress={progress} onSeek={seekTo} />
            <em className="studio-time" aria-label={`${formatTime(progress * duration)} of ${formatTime(duration)}`}>
              {formatTime(progress * duration)}
              <span className="studio-dur"> / {formatTime(duration)}</span>
            </em>
          </div>

          <div className="studio-map-wrap">
            <p className="studio-kicker">What is actually in play</p>
            <ConstraintField
              active={current.nodes}
              lit={playing ? Math.max(lit, 1) : current.nodes.length}
              live={playing}
            />
          </div>

          <div className="studio-voices">
            <article className="studio-voice in">
              <span>The pressure — spoken</span>
              {playing || heard > 0 ? (
                <p className="studio-spoken">
                  <span>{heardText}</span>
                  <span>{restText}</span>
                </p>
              ) : (
                <p>{current.pressure}</p>
              )}
            </article>
            <article className={showReading ? "studio-voice ours in" : "studio-voice ours"}>
              <span>The reading</span>
              <p>{showReading ? current.reading : "After the brief is heard, judgement is written here."}</p>
            </article>
          </div>

          <aside className={showMove ? "studio-move in" : "studio-move"}>
            <span>First move</span>
            <p>{showMove ? current.move : "A path only after the problem is named."}</p>
          </aside>
        </div>
      </div>
    </section>
  )
}

export function LogoMarquee({ label = "Situations we recognise" }: { label?: string }) {
  const ref = useRef<HTMLElement>(null)
  const [on, setOn] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const io = new IntersectionObserver(([entry]) => setOn(entry.isIntersecting), { rootMargin: "80px" })
    io.observe(node)
    return () => io.disconnect()
  }, [])

  return (
    <section ref={ref} className="marquee-section shell" aria-label="Trusted companies">
      <p>{label}</p>
      <div className="marquee">
        <div className="marquee-track" style={{ animationPlayState: on ? "running" : "paused" }}>
          {[...logos, ...logos].map((name, i) => (
            <span key={`${name}-${i}`}>{name}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PageHero({
  crumbs,
  eyebrow,
  title,
  blurb,
  primary = { label: "Start a conversation", to: "/contact" },
  secondary = { label: "How we work", to: "/how-we-work" },
}: {
  crumbs?: [string, string][]
  eyebrow?: string
  title: string
  blurb: string
  primary?: { label: string; to: string } | null
  secondary?: { label: string; to: string } | null
}) {
  return (
    <section className="page-hero shell">
      {crumbs && (
        <p className="breadcrumbs">
          {crumbs.map(([label, to], i) => (
            <span key={to}>
              {i > 0 && " / "}
              <Link to={to}>{label}</Link>
            </span>
          ))}
        </p>
      )}
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h1 className="serif-lg">{title}</h1>
      <p className="lede">{blurb}</p>
      {(primary || secondary) && (
        <div className="hero-actions">
          {primary && (
            <Link className="btn" to={primary.to}>
              {primary.label}
            </Link>
          )}
          {secondary && (
            <Link className="btn btn-ghost" to={secondary.to}>
              {secondary.label}
            </Link>
          )}
        </div>
      )}
    </section>
  )
}

export function Section({
  title,
  blurb,
  children,
  eyebrow,
}: {
  title?: string
  blurb?: string
  eyebrow?: string
  children: React.ReactNode
}) {
  return (
    <section className="section shell">
      {(title || blurb) && (
        <Reveal className="section-head">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          {title && <h2 className="serif-md">{title}</h2>}
          {blurb && <p>{blurb}</p>}
        </Reveal>
      )}
      {children}
    </section>
  )
}

export function Callout({
  title,
  blurb,
  to,
  label,
}: {
  title: string
  blurb: string
  to: string
  label: string
}) {
  return (
    <Reveal className="callout">
      <div>
        <h3 className="serif-sm">{title}</h3>
        <p>{blurb}</p>
      </div>
      <Link className="btn btn-light" to={to}>
        {label}
      </Link>
    </Reveal>
  )
}
