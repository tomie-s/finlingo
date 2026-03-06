import { useFinLingo } from './hooks/useFinLingo'
import { InputPanel } from './components/InputPanel'
import { ExplanationCard } from './components/ExplanationCard'
import { FollowUpQuestions } from './components/FollowUpQuestions'
import { LoadingState } from './components/LoadingState'
import { ErrorMessage } from './components/ErrorMessage'

function App() {
  const { input, isLoading, error, result, setInput, submit, reset } = useFinLingo()

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Fin<span className="text-teal-600">Lingo</span>
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Paste a financial clause or type a term — get a plain-English explanation instantly.
          </p>
        </div>

        {/* Input */}
        {!result && (
          <InputPanel
            input={input}
            isLoading={isLoading}
            onInputChange={setInput}
            onSubmit={submit}
          />
        )}

        {/* Loading */}
        {isLoading && (
          <div className="mt-8">
            <LoadingState />
          </div>
        )}

        {/* Error */}
        {error && !isLoading && (
          <div className="mt-6">
            <ErrorMessage message={error} />
            <button
              onClick={reset}
              className="mt-4 text-sm font-medium text-teal-600 hover:text-teal-700"
            >
              Try again
            </button>
          </div>
        )}

        {/* Results */}
        {result && !isLoading && (
          <div className="space-y-4">
            <ExplanationCard explanation={result.explanation} />
            <FollowUpQuestions questions={result.followUpQuestions} />
            <button
              onClick={reset}
              className="mt-2 text-sm font-medium text-teal-600 hover:text-teal-700"
            >
              ← Try another
            </button>
          </div>
        )}

      </div>
    </div>
  )
}

export default App
