export function LoadingState() {
  return (
    <div className="space-y-4" aria-label="Loading results">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-3 h-4 w-24 animate-pulse rounded bg-slate-200" />
        <div className="space-y-2">
          <div className="h-3 w-full animate-pulse rounded bg-slate-100" />
          <div className="h-3 w-5/6 animate-pulse rounded bg-slate-100" />
          <div className="h-3 w-4/6 animate-pulse rounded bg-slate-100" />
        </div>
      </div>
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-3 h-4 w-36 animate-pulse rounded bg-slate-200" />
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-3 animate-pulse rounded bg-slate-100" style={{ width: `${85 - i * 8}%` }} />
          ))}
        </div>
      </div>
    </div>
  )
}
