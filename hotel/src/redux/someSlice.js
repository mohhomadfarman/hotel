// redux/someSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Initial state goes here
};

const someSlice = createSlice({
  name: 'some',
  initialState,
  reducers: {
    someAction(state, action) {
      // Reducer logic goes here
    },
  },
});

export const { someAction } = someSlice.actions;
export default someSlice.reducer;
