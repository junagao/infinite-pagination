import React from 'react'
import { hot } from 'react-hot-loader/root'
import { List } from 'components'
import AppContainer from './App.styles'

const App = () => (
  <AppContainer>
    <List />
  </AppContainer>
)

export default hot(App)
