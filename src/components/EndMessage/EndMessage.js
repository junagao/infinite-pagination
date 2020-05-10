import React from 'react'
import Text from './EndMessage.styles'

export default function EndMessage() {
  return (
    <Text>
      <span role="img" aria-label="stop hand emoticon">
        ✋
      </span>{' '}
      You have reached the end.{' '}
    </Text>
  )
}
