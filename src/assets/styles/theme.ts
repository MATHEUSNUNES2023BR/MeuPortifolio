import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background-color: #191919;
  }
`

export const dark = {
  cores: '#0000'
}

export const light = {
  cores: '#fff'
}
