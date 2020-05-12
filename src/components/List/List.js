import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import api from 'api'
import { Item, Loading, EndMessage, ErrorMessage } from 'components'

export default function List() {
  const initialSelectedItems = () =>
    JSON.parse(window.localStorage.getItem('selectedItems')) || []
  const [selectedItems, setSelectedItems] = useState(initialSelectedItems)
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [hasMorePages, setHasMorePages] = useState(true)
  const [error, setError] = useState('')

  const fetchData = async () => {
    if (page >= 10000) {
      setHasMorePages(false)
    }
    try {
      const response = await api.get(`items?page=${page}`)
      const mergedItems = response.data.data.map((item) => ({
        ...item,
        ...selectedItems.find(({ id }) => id === item.id),
      }))
      setData([...data, ...mergedItems])
      setPage(page + 1)
    } catch (e) {
      setError(e)
    }
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const sortedItems = selectedItems.sort(
      (a, b) => a.absoluteIndex - b.absoluteIndex,
    )
    window.localStorage.setItem('selectedItems', JSON.stringify(sortedItems))
  }, [selectedItems])

  const handleSelectItem = (id) => {
    const selectedItem = data.find((item) => item.id === id)
    selectedItem.selected = true
    setSelectedItems([...selectedItems, selectedItem])
  }

  if (error) {
    return <ErrorMessage text={error} />
  }

  return (
    <InfiniteScroll
      dataLength={data.length}
      next={fetchData}
      hasMore={hasMorePages}
      loader={<Loading />}
      endMessage={<EndMessage />}
    >
      <ul>
        {data.map(({ id, name, selected }) => (
          <Item
            key={id}
            id={id}
            name={name}
            selected={selected || false}
            onSelect={handleSelectItem}
          />
        ))}
      </ul>
    </InfiniteScroll>
  )
}
