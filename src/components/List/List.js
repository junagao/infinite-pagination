import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import api from 'api'
import { Item } from 'components'

const List = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(2)
  const [hasMorePages, setHasMorePages] = useState(true)

  useEffect(() => {
    async function fetchInitialData() {
      const response = await api.get(`items`)
      setData(response.data.data)
    }
    fetchInitialData()
  }, [])

  const fetchPages = async () => {
    if (data.length >= 10000) {
      setHasMorePages(false)
    }
    const response = await api.get(`items?page=${page}`)
    setData([...data, ...response.data.data])
    setPage(page + 1)
  }

  return (
    <InfiniteScroll
      dataLength={data.length}
      next={fetchPages}
      hasMore={hasMorePages}
      loader={<p>Loading...</p>}
      endMessage={<p>You have hit the end</p>}
    >
      <ul>
        {data.map(({ id, name }) => (
          <Item key={id} name={name} />
        ))}
      </ul>
    </InfiniteScroll>
  )
}

export default List
