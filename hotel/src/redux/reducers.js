// redux/reducers.js

import { combineReducers } from '@reduxjs/toolkit';
import someReducer from './someSlice';

const rootReducer = combineReducers({
  someReducer,
  // Add other reducers here
});

export default rootReducer;
