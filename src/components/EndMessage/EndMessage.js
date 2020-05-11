import React from 'react'
import Text from './EndMessage.styles'

export default function EndMessage() {
  return (
    <Text data-testid="end-message">
      <span role="img" aria-label="stop hand emoticon">
        ✋
      </span>{' '}
      You have reached the end.{' '}
    </Text>
  )
}
