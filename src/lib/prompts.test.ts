import { describe, it, expect } from 'vitest'
import { buildUserPrompt } from './prompts'

describe('buildUserPrompt', () => {
  it('returns a string containing the user input', () => {
    const input = 'variable rate mortgage'
    const prompt = buildUserPrompt(input)
    expect(prompt).toContain(input)
  })

  it('returns a string', () => {
    const prompt = buildUserPrompt('APR')
    expect(typeof prompt).toBe('string')
  })
})
