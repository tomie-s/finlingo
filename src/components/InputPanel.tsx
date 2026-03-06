import { useState } from 'react'

interface InputPanelProps {
  input: string
  isLoading: boolean
  onInputChange: (value: string) => void
  onSubmit: (value: string) => void
}

export function InputPanel({ input, isLoading, onInputChange, onSubmit }: InputPanelProps) {
  const [validationError, setValidationError] = useState<string | null>(null)

  function handleSubmit() {
    if (!input.trim()) {
      setValidationError('Please enter a financial term or paste a clause to explain.')
      return
    }
    setValidationError(null)
    onSubmit(input)
  }

  function handleChange(value: string) {
    if (validationError && value.trim()) setValidationError(null)
    onInputChange(value)
  }

  return (
    <div className="space-y-3">
      <textarea
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Paste a financial clause or type a term e.g. 'variable rate mortgage'..."
        rows={5}
        disabled={isLoading}
        className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 shadow-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100 disabled:opacity-50"
      />
      {validationError && (
        <p className="text-sm text-red-600">{validationError}</p>
      )}
      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className="w-full rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
      >
        {isLoading ? 'Explaining...' : 'Explain This'}
      </button>
    </div>
  )
}
