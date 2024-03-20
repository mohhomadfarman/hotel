

import axios from "axios";
import {createAsyncThunk} from '@reduxjs/toolkit'
import {CurrentApi} from '../config'

export const axiosInstance = axios.create({
  baseURL: CurrentApi,
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginApi = createAsyncThunk("login", async (payload) => {
  const response = await axiosInstance.post(`login`, payload)
  return response.data;
})

