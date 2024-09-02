import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { ThemeProvider } from "styled-components";
import { dark, GlobalStyle, light } from "../assets/styles/theme";
interface ThemeContextProps {
  children: ReactNode;
}

function ThemeProviderComponent({ children }: ThemeContextProps){
  const theme = useSelector((state:RootState)=> state.themeReducer.mode)
  return(
    <ThemeProvider theme={ theme == 'light' ? light : dark}>
      <GlobalStyle />
      { children }
    </ThemeProvider>
  )
}
export default ThemeProviderComponent