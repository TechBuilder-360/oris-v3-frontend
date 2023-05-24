import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sign_in_interface: 'email'
};

export const Sign_in = createSlice({
  name: 'sign_in',
  initialState,
  reducers: {
    changeInterface: (state, action) => {
      state.sign_in_interface = action.payload;
    }
  }
});

export const { changeInterface } = Sign_in.actions;

export default Sign_in.reducer;
