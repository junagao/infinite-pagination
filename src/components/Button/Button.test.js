import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import { matchers } from 'jest-emotion'
import theme from '../../theme'
import Button from './Button'

expect.extend(matchers)

describe('Button', () => {
  test('matches snapshot', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Button disabled={false} onSelect={jest.fn()} id="daok34-asd32-dsa">
          item-6
        </Button>
      </ThemeProvider>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('displays the correct item', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button disabled={false} onSelect={jest.fn()} id="daok34-asd32-dsa">
          item-6
        </Button>
      </ThemeProvider>,
    )
    expect(getByTestId('button')).toHaveTextContent('item-6')
  })

  test('render disabled button correctly if disabled - set pointer-events to none and color to grey', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button disabled onSelect={jest.fn()} id="daok34-asd32-dsa">
          item-6
        </Button>
      </ThemeProvider>,
    )
    expect(getByTestId('button')).toHaveStyleRule('pointer-events', 'none')
    expect(getByTestId('button')).toHaveStyleRule('color', '#ddd')
    expect(getByTestId('button')).toBeDisabled()
  })

  it('fires the onClick method on click', () => {
    const handleClick = jest.fn()
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Button disabled={false} onSelect={handleClick} id="daok34-asd32-dsa">
          item-6
        </Button>
      </ThemeProvider>,
    )
    fireEvent.click(container.firstChild)
    expect(handleClick).toHaveBeenCalled()
  })
})
