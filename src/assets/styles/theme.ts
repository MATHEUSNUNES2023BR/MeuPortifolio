import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background-color: ${({theme})=> theme.backgroundBody};
  }
`

export const dark = {
  backgroundBody: '#191919',
  backgroundHeader: 'linear-gradient(95deg, #0037ff, #b853ff)',
  backgroudSidebar: 'linear-gradient(95deg, #0037ff, #b853ff)',
  colorSidebar: '#fff',
  color: '#fff'
}

export const light = {
  backgroundBody: '#F2F2F2',
  backgroundHeader: 'linear-gradient(95deg, #A67E6F,  #D9C2AD)',
  backgroudSidebar: 'linear-gradient(95deg, #A67E6F, #D9C2AD)',
  colorSidebar: '#fff',
  color: '#71736A'
}
