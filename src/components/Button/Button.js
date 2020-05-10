import React from 'react'
import { string, bool, func } from 'prop-types'

export default function Button({ text, disabled, onClick }) {
  return (
    <button type="button" disabled={disabled} onClick={onClick}>
      {text}
    </button>
  )
}

Button.propTypes = {
  text: string.isRequired,
  disabled: bool.isRequired,
  onClick: func.isRequired,
}
