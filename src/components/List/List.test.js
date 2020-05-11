import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import theme from '../../theme'
import List from './List'

describe('List', () => {
  test('matches snapshot', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <List />
      </ThemeProvider>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
