import { useEffect, useId, useRef } from "react"

export type CalPrefill = {
  name?: string
  email?: string
  notes?: string
}

type CalInlineEmbedProps = {
  namespace?: string
  calLink?: string
  brandColor?: string
  prefill?: CalPrefill
  className?: string
}

type CalNamespace = {
  q?: unknown[]
  (command: string, ...args: unknown[]): void
}

type CalGlobal = {
  loaded?: boolean
  ns: Record<string, CalNamespace>
  q: unknown[]
  config?: { forwardQueryParams?: boolean }
  (command: string, ...args: unknown[]): void
}

declare global {
  interface Window {
    Cal?: CalGlobal
  }
}

function ensureCalBootstrap() {
  if (window.Cal) return

  const doc = document
  const scriptUrl = "https://app.cal.com/embed/embed.js"

  const queue = (target: CalGlobal | CalNamespace, args: unknown[]) => {
    const api = target as CalNamespace
    api.q = api.q || []
    api.q.push(args)
  }

  const cal = function (...args: unknown[]) {
    const api = window.Cal as CalGlobal
    if (!api.loaded) {
      api.ns = {}
      api.q = api.q || []
      const script = doc.createElement("script")
      script.src = scriptUrl
      script.async = true
      doc.head.appendChild(script)
      api.loaded = true
    }

    if (args[0] === "init") {
      const namespace = args[1]
      const namespaceApi = function (...inner: unknown[]) {
        queue(namespaceApi as CalNamespace, inner)
      }
      if (typeof namespace === "string") {
        api.ns[namespace] = namespaceApi as CalNamespace
        queue(namespaceApi as CalNamespace, args)
        queue(api, ["initNamespace", namespace])
      }
      return
    }

    queue(api, args)
  } as CalGlobal

  cal.ns = {}
  cal.q = []
  window.Cal = cal
}

function mountInlineEmbed({
  containerId,
  namespace,
  calLink,
  brandColor,
  prefill,
}: {
  containerId: string
  namespace: string
  calLink: string
  brandColor: string
  prefill?: CalPrefill
}) {
  const cal = window.Cal
  if (!cal) return

  cal("init", namespace, { origin: "https://app.cal.com" })
  cal.config = cal.config || {}
  cal.config.forwardQueryParams = true

  const ns = cal.ns[namespace]
  if (!ns) return

  ns("inline", {
    elementOrSelector: `#${containerId}`,
    config: {
      layout: "month_view",
      useSlotsViewOnSmallScreen: "true",
      ...(prefill?.name ? { name: prefill.name } : {}),
      ...(prefill?.email ? { email: prefill.email } : {}),
      ...(prefill?.notes ? { notes: prefill.notes } : {}),
    },
    calLink,
  })

  ns("ui", {
    cssVarsPerTheme: {
      light: { "cal-brand": brandColor },
      dark: { "cal-brand": brandColor },
    },
    hideEventTypeDetails: true,
    layout: "month_view",
  })
}

export function CalInlineEmbed({
  namespace = "first-conversation",
  calLink = "constrange/first-conversation",
  brandColor = "#271675",
  prefill,
  className,
}: CalInlineEmbedProps) {
  const reactId = useId().replace(/:/g, "")
  const containerId = `cal-inline-${reactId}`
  const mountedRef = useRef(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    const container = document.getElementById(containerId)
    if (container) container.innerHTML = ""

    ensureCalBootstrap()
    mountInlineEmbed({
      containerId,
      namespace,
      calLink,
      brandColor,
      prefill,
    })
    mountedRef.current = true

    return () => {
      mountedRef.current = false
    }
  }, [containerId, namespace, calLink, brandColor, prefill?.name, prefill?.email, prefill?.notes])

  return (
    <div
      id={containerId}
      className={className ? `cal-inline-embed ${className}` : "cal-inline-embed"}
      aria-label="Book a first conversation"
    />
  )
}
