import { useState } from 'react'
import { explainFinancialTerm } from '../lib/gemini'
import type { FinLingoResponse } from '../types'

interface UseFinLingoReturn {
  input: string
  isLoading: boolean
  error: string | null
  result: FinLingoResponse | null
  setInput: (value: string) => void
  submit: () => Promise<void>
  reset: () => void
}

export function useFinLingo(): UseFinLingoReturn {
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<FinLingoResponse | null>(null)

  async function submit() {
    if (!input.trim()) return

    setIsLoading(true)
    setError(null)
    setResult(null)

    try {
      const response = await explainFinancialTerm(input.trim())
      setResult(response)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.'
      )
    } finally {
      setIsLoading(false)
    }
  }

  function reset() {
    setInput('')
    setError(null)
    setResult(null)
  }

  return { input, isLoading, error, result, setInput, submit, reset }
}
