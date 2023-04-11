import { configureStore } from "@reduxjs/toolkit";
import StateManager from "./slices/StateManager";
export const store = configureStore({
  reducer: {
    signup: StateManager,
  },
});
