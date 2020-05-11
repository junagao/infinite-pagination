import React from 'react'
import { string, bool, func } from 'prop-types'
import { Button } from 'components'

const Item = ({ id, name, selected, onSelect }) => (
  <li data-testid="list-item">
    <Button text={name} disabled={selected} onClick={() => onSelect(id)} />
  </li>
)

Item.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  selected: bool.isRequired,
  onSelect: func.isRequired,
}

export default Item
