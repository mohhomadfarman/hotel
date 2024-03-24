// redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import SignupReducer from './slices/Signup'
const store = configureStore({
  reducer: {
  // Add middleware if needed
  // login: LoginReducer
  Register: SignupReducer,
  }
});

export default store;
