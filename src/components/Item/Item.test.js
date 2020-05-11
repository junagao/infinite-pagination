import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import theme from '../../theme'
import Item from './Item'

describe('Item', () => {
  test('matches snapshot', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Item id="yt302" name="item-1" selected onSelect={jest.fn()} />
      </ThemeProvider>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('renders one li item with one instance of button', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Item id="yt302" name="item-1" selected onSelect={jest.fn()} />
      </ThemeProvider>,
    )
    const button = getByTestId('button')
    expect(getByTestId('list-item')).toContainElement(button)
  })
})
