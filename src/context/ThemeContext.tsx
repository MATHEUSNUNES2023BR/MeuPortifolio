import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { ThemeProvider } from "styled-components";
import { dark, light } from "../assets/styles/theme";
interface ThemeContextProps {
  children: ReactNode;
}

function ThemeProviderComponent({ children }: ThemeContextProps){
  const theme = useSelector((state:RootState)=> state.themeReducer.mode)
  console.log(theme)
  return(
    <ThemeProvider theme={ theme == 'light' ? light : dark}>
      { children }
    </ThemeProvider>
  )
}
export default ThemeProviderComponent