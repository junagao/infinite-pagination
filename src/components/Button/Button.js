import React from 'react'
import { string } from 'prop-types'

export default function Button({ text }) {
  return <button type="button">{text}</button>
}

Button.propTypes = {
  text: string.isRequired,
}
