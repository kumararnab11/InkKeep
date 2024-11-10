import { createSlice } from '@reduxjs/toolkit'

export const popSlice = createSlice({
  name: 'popslice',
  initialState: {
    value: false
  },
  reducers: {
    setPop: state => {
      state.value = true;
    },
    unsetPop: state => {
      state.value = false;
    }
  }
})

export const { setPop, unsetPop } = popSlice.actions;

export default popSlice.reducer;
