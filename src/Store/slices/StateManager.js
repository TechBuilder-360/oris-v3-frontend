import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signup_interface: "interface1",
};

export const StateManager = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeInterface: (state, action) => {
      state.signup_interface = action.payload;
    },
  },
});

export const { changeInterface } = StateManager.actions;

export default StateManager.reducer;
