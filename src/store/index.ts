import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../features/theme/sliceTheme'
import sliceSidebar from "../features/Sidebar/sliceSidebar";
const store = configureStore({
  reducer:{
    themeReducer,
    sliceSidebar
  }
})

export type RootState = ReturnType<typeof store.getState>
export default store
