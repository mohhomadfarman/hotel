// redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import SignupReducer from './slices/Signup'
import HomePageDataReducer from './slices/HomeSlice'
const store = configureStore({
  reducer: {
  // Add middleware if needed
  // login: LoginReducer
  Register: SignupReducer,
  Home: HomePageDataReducer
  }
});

export default store;
