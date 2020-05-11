import React from 'react'
import { string } from 'prop-types'
import Text from './ErrorMessage.styles'

export default function ErrorMessage({ text }) {
  return (
    <Text data-testid="error-message">
      The following error occurred: {text}. Please try again.
    </Text>
  )
}

ErrorMessage.propTypes = {
  text: string.isRequired,
}
