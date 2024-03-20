import { createSlice } from "@reduxjs/toolkit";
import {loginApi} from '../AuthAction'


const initialState = {
  isLoading: false,
  login: [],
  error: "",
};
const Login = createSlice({
  name: "Login",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(loginApi.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(loginApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.login = action?.payload;
      state.error = "";
    });
    bulider.addCase(loginApi.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default Login.reducer;
