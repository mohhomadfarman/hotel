import { createSlice } from "@reduxjs/toolkit";
import { HomePage } from "../AuthAction";


const initialState = {
  isLoading: false,
  data: [],
  error: "",
};
const HomePageData = createSlice({
  name: "HomePageData",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(HomePage.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(HomePage.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action?.payload;
      state.error = "";
    });
    bulider.addCase(HomePage.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default HomePageData.reducer;
