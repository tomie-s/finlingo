import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ExplanationCard } from './ExplanationCard'

describe('ExplanationCard', () => {
  it('renders the explanation text', () => {
    const explanation = 'A variable rate mortgage means your interest rate can change over time.'
    render(<ExplanationCard explanation={explanation} />)
    expect(screen.getByText(explanation)).toBeInTheDocument()
  })
})
