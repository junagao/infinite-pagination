import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import { matchers } from 'jest-emotion'
import theme from '../../theme'
import Loading from './Loading'

expect.extend(matchers)

describe('Loading', () => {
  test('matches snapshot', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Loading />
      </ThemeProvider>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('renders the spinner correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Loading />
      </ThemeProvider>,
    )
    expect(getByTestId('spinner')).toHaveStyleRule('border-radius', '99999em')
    expect(getByTestId('spinner')).toHaveStyleRule('width', '1.5rem')
    expect(getByTestId('spinner')).toHaveStyleRule('height', '1.5rem')
  })
})
