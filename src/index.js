import 'core-js/stable'
import 'regenerator-runtime/runtime'
import React from 'react'
import { render } from 'react-dom'
import App from 'pages'
import { ThemeProvider } from 'emotion-theming'
import { Global } from '@emotion/core'
import GlobalStyles from './global.styles'
import theme from './theme'

render(
  <ThemeProvider theme={theme}>
    <Global styles={GlobalStyles} />
    <App />
  </ThemeProvider>,
  document.getElementById('app'),
)
