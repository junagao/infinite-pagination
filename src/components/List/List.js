import React, { useState, useEffect } from 'react'
import api from 'api'
import { Item } from 'components'

const List = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(`items`)
      setData(response.data.data)
    }
    fetchData()
  }, [])

  return (
    <ul>
      {data.map(({ id, name }) => (
        <Item key={id} name={name} />
      ))}
    </ul>
  )
}

export default List
