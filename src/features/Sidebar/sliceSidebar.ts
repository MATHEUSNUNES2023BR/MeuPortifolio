import { createSlice } from "@reduxjs/toolkit";

interface HamburguerState{
  hamburgerState: 'active' | 'disabled'
}

const initialState: HamburguerState = {
  hamburgerState: 'disabled'
}

const HambugerSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleHambuguer : (state) => {
      state.hamburgerState = state.hamburgerState == 'disabled' ? 'active' : 'disabled'
    }
  }
})
export const { toggleHambuguer  } = HambugerSlice.actions
export default HambugerSlice.reducer