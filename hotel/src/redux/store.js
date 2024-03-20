// redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import LoginReducer from './slices/LoginSlice'
const store = configureStore({
  reducer: {
  // Add middleware if needed
  login: LoginReducer
  }
});

export default store;
