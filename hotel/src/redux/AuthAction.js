

import axios from "axios";
import {createAsyncThunk} from '@reduxjs/toolkit'
import {CurrentApi} from '../config'

export const axiosInstance = axios.create({
  baseURL: CurrentApi,
  headers: {
    "Content-Type": "application/json",
  },
});

export const signup = createAsyncThunk("signup", async (payload) => {
  const response = await axiosInstance.post(`/api/hotels/signup`, payload)
  return response.data;
})


// Abc

export const HomePage = createAsyncThunk("HomePage", async (payload) => {
  const response = await axiosInstance.get(`api/homes`, payload)
  return response.data;
})