import { configureStore } from '@reduxjs/toolkit';
import pastes from './redux/pasteSlice';
import popslice from './redux/popslice';

export const store = configureStore({
  reducer: {
    pastes: pastes,
    popslice: popslice
  }
});
