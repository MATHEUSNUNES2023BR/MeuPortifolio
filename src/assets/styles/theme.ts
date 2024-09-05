import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background-color: ${({theme})=> theme.backgroundBody};
    overflow-x: hidden;

  }
`

export const dark = {
  backgroundBody: '#191919',
  backgroundHeader: 'linear-gradient(95deg, #0037ff, #b853ff)',
  backgroudSidebar: 'linear-gradient(95deg, #0037ff, #b853ff)',
  colorSidebar: '#fff',
  color: '#fff',
  textShadow: 'lightblue',
  sidebarIconsBackground: 'linear-gradient(220deg, lightgray, white, #1956E6)',
  photoShadow: 'black',
  businesCardBackground: 'linear-gradient(220deg, #b853ff, #1956E6)',
}

export const light = {
  backgroundBody: '#F2F2F2',
  backgroundHeader: 'linear-gradient(95deg, #A67E6F,  #D9C2AD)',
  backgroudSidebar: 'linear-gradient(95deg, #A67E6F, #D9C2AD)',
  colorSidebar: '#fff',
  color: '#71736A',
  textShadow: '#A67E6F',
  sidebarIconsBackground: 'linear-gradient(220deg, lightgray, white, #A67E6F)',
  photoShadow: '#6E6E6E',
  businesCardBackground: 'linear-gradient(220deg, #D9C2AD, lightgray)',

}
