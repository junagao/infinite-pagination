import React from 'react'
import { string } from 'prop-types'
import { Button } from 'components'

const Item = ({ name }) => (
  <li>
    <Button text={name}>{name}</Button>
  </li>
)

Item.propTypes = {
  name: string.isRequired,
}

export default Item
