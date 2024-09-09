import { createSlice } from "@reduxjs/toolkit";
interface ThemeState {
  mode: string | null
}

const initialState: ThemeState = {
  mode: sessionStorage.getItem('theme')
}
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme : (state) => {
      state.mode = state.mode == 'dark' ? 'light' : 'dark'
      sessionStorage.setItem('theme', `${state.mode}`)
      sessionStorage.setItem('switchButton', `${state.mode == 'dark' ? 0 : -1}`)
    }
  }
})
export const { toggleTheme  } = themeSlice.actions
export default themeSlice.reducer