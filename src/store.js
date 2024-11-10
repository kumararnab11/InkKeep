import { configureStore } from '@reduxjs/toolkit'
import pastes from './redux/pasteSlice'

export const store = configureStore({
  reducer: {
    pastes:pastes
  },
})