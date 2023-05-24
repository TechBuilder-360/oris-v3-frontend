import { configureStore } from '@reduxjs/toolkit';
import StateManager from './slices/sign_up';

export const store = configureStore({
  reducer: {
    signup: StateManager
  }
});
