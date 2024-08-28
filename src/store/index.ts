import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../features/theme/sliceTheme'

const store = configureStore({
  reducer:{
    themeReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export default store
