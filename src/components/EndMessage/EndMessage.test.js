import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import { matchers } from 'jest-emotion'
import theme from '../../theme'
import EndMessage from './EndMessage'

expect.extend(matchers)

describe('EndMessage', () => {
  test('matches snapshot', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <EndMessage />
      </ThemeProvider>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('displays the correct end message', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <EndMessage />
      </ThemeProvider>,
    )
    expect(getByTestId('end-message')).toHaveTextContent(
      '✋ You have reached the end.',
    )
  })

  test('renders the end message with the correct styles from theme', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <EndMessage />
      </ThemeProvider>,
    )
    expect(getByTestId('end-message')).toHaveStyleRule('font-size', '1.5rem')
    expect(getByTestId('end-message')).toHaveStyleRule('color', '#111')
    expect(getByTestId('end-message')).toHaveStyleRule('padding', '2rem 0')
  })
})
