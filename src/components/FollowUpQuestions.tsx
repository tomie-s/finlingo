interface FollowUpQuestionsProps {
  questions: string[]
}

export function FollowUpQuestions({ questions }: FollowUpQuestionsProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-teal-600">
        Questions to Ask Your Financial Expert
      </h2>
      <ol className="space-y-3">
        {questions.map((question, index) => (
          <li key={index} className="flex gap-3">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-50 text-xs font-semibold text-teal-600">
              {index + 1}
            </span>
            <p className="text-sm leading-relaxed text-slate-700">{question}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
