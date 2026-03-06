export function buildUserPrompt(input: string): string {
  return `You are a financial literacy expert. Explain financial jargon and clauses in plain English for people with no financial background.

Respond with a valid JSON object only — no markdown, no code fences, no preamble. Use this exact shape:
{
  "explanation": "A plain-English explanation written for someone with no financial background.",
  "followUpQuestions": [
    "Question 1 the user could ask their bank or broker",
    "Question 2",
    "Question 3"
  ]
}

Financial term or clause to explain:

${input}`
}
