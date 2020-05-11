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
        <Button text="item-6" disabled={false} onClick={jest.fn()} />
      </ThemeProvider>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('displays the correct item', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button text="item-6" disabled={false} onClick={jest.fn()} />
      </ThemeProvider>,
    )
    expect(getByTestId('button')).toHaveTextContent('item-6')
  })

  test('render disabled button correctly if disabled - set pointer-events to none and color to grey', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button text="item-6" disabled onClick={jest.fn()} />
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
        <Button text="item-6" disabled={false} onClick={handleClick} />
      </ThemeProvider>,
    )
    fireEvent.click(container.firstChild)
    expect(handleClick).toHaveBeenCalled()
  })
})
