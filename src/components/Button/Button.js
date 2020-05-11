import React from 'react'
import { string, bool, func } from 'prop-types'
import ButtonStyled from './Button.styles'

export default function Button({ text, disabled, onClick }) {
  return (
    <ButtonStyled
      type="button"
      data-testid="button"
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </ButtonStyled>
  )
}

Button.propTypes = {
  text: string.isRequired,
  disabled: bool.isRequired,
  onClick: func.isRequired,
}
