import { decisionReviewSteps } from "@/site-data"

export function MethodFlow({ className = "" }: { className?: string }) {
  return (
    <ol className={`method-flow ${className}`.trim()} aria-label="Decision Review method">
      {decisionReviewSteps.map((step, index) => (
        <li key={step}>
          <span>{step}</span>
          {index < decisionReviewSteps.length - 1 && (
            <i className="method-flow-arrow" aria-hidden>→</i>
          )}
        </li>
      ))}
    </ol>
  )
}
