import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import { matchers } from 'jest-emotion'
import theme from '../../theme'
import ErrorMessage from './ErrorMessage'

expect.extend(matchers)

describe('ErrorMessage', () => {
  test('matches snapshot', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <ErrorMessage text="ERROR" />
      </ThemeProvider>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('displays the correct error message', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <ErrorMessage text="ERROR" />
      </ThemeProvider>,
    )
    expect(getByTestId('error-message')).toHaveTextContent(
      'The following error occurred: ERROR. Please try again.',
    )
  })

  test('renders the error message with the correct styles from theme', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <ErrorMessage text="ERROR" />
      </ThemeProvider>,
    )
    expect(getByTestId('error-message')).toHaveStyleRule('font-size', '1.5rem')
    expect(getByTestId('error-message')).toHaveStyleRule('color', '#BD271E')
    expect(getByTestId('error-message')).toHaveStyleRule('padding', '2rem 0')
  })
})
