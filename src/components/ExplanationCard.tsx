interface ExplanationCardProps {
  explanation: string
}

export function ExplanationCard({ explanation }: ExplanationCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-teal-600">
        Plain-English Explanation
      </h2>
      <p className="text-base leading-relaxed text-slate-700">{explanation}</p>
    </div>
  )
}
