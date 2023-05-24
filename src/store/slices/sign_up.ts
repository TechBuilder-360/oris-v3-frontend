import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  signup_interface: 'interface1',
};

export const Sign_up = createSlice(
  {
    name: 'sign_up',
    initialState,
    reducers: {
      changeInterface: (state, action) => {
        state.signup_interface = action.payload;
      }
    }
  });

export const { changeInterface } = Sign_up.actions;

export default Sign_up.reducer;
