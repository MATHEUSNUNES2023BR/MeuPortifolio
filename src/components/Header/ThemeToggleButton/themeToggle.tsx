import {  useDispatch } from "react-redux";
import { toggleTheme } from "../../../features/theme/sliceTheme";

function ThemeToggleButton (){
  const dispatch = useDispatch()
  const handleThemeToggle = () => {
    dispatch(toggleTheme())
  }
  return <button onClick={handleThemeToggle}></button>
}

export default ThemeToggleButton