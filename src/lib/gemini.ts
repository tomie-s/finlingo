import { GoogleGenerativeAI } from '@google/generative-ai'
import { buildUserPrompt } from './prompts'
import type { FinLingoResponse } from '../types'

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY)

const model = genAI.getGenerativeModel({
  model: 'gemini-2.0-flash',
  generationConfig: { responseMimeType: 'application/json' },
})

export async function explainFinancialTerm(input: string): Promise<FinLingoResponse> {
  const result = await model.generateContent(buildUserPrompt(input))
  const parsed: FinLingoResponse = JSON.parse(result.response.text())
  return parsed
}
