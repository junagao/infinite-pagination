import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const GlobalStyles = css`
  html {
    margin: 0;
    border: 0;
    padding: 0;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
    font-family: inherit;
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
  body::-webkit-scrollbar {
    width: 1.25rem;
    background-color: rgba(0, 0, 0, 0.05);
  }
  body::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #f7971e, #ffd200);
    outline: 1px solid black;
    border-radius: 1rem;
  }
`

export const AppContainer = styled.div`
  text-align: center;
  margin: 0 auto;
`
