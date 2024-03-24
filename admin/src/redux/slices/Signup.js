import { createSlice } from "@reduxjs/toolkit";
import {loginApi, signup} from '../AuthAction'


const initialState = {
  isLoading: false,
  Data: [],
  error: "",
};
const Signup = createSlice({
  name: "Signup",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(signup.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(signup.fulfilled, (state, action) => {
      state.isLoading = false;
      state.dara = action?.payload;
      state.error = "";
    });
    bulider.addCase(signup.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default Signup.reducer;
