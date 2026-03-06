import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { InputPanel } from './InputPanel'

const defaultProps = {
  input: '',
  isLoading: false,
  onInputChange: vi.fn(),
  onSubmit: vi.fn(),
}

describe('InputPanel', () => {
  it('renders the textarea and submit button', () => {
    render(<InputPanel {...defaultProps} />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Explain This' })).toBeInTheDocument()
  })

  it('shows a validation error when submitted with empty input', async () => {
    render(<InputPanel {...defaultProps} input="" />)
    await userEvent.click(screen.getByRole('button', { name: 'Explain This' }))
    expect(screen.getByText(/please enter a financial term/i)).toBeInTheDocument()
  })

  it('calls onSubmit with the input value when submitted', async () => {
    const onSubmit = vi.fn()
    const onInputChange = vi.fn()
    render(
      <InputPanel
        {...defaultProps}
        input="APR"
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      />
    )
    await userEvent.click(screen.getByRole('button', { name: 'Explain This' }))
    expect(onSubmit).toHaveBeenCalledWith('APR')
  })

  it('disables the button when isLoading is true', () => {
    render(<InputPanel {...defaultProps} isLoading={true} />)
    expect(screen.getByRole('button')).toBeDisabled()
  })
})
