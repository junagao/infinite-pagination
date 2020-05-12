import React from 'react'
import { string, bool, func } from 'prop-types'
import ButtonStyled from './Button.styles'

export default function Button({ children, disabled, onSelect, id }) {
  return (
    <ButtonStyled
      type="button"
      data-testid="button"
      disabled={disabled}
      onClick={() => onSelect(id)}
    >
      {children}
    </ButtonStyled>
  )
}

Button.propTypes = {
  children: string.isRequired,
  disabled: bool.isRequired,
  onSelect: func.isRequired,
  id: string.isRequired,
}
