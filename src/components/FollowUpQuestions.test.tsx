import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FollowUpQuestions } from './FollowUpQuestions'

describe('FollowUpQuestions', () => {
  const mockQuestions = [
    'What is the current interest rate on my account?',
    'Can the rate change without notice?',
    'What is the maximum rate I could be charged?',
  ]

  it('renders all 3 questions', () => {
    render(<FollowUpQuestions questions={mockQuestions} />)
    mockQuestions.forEach((question) => {
      expect(screen.getByText(question)).toBeInTheDocument()
    })
  })
})
