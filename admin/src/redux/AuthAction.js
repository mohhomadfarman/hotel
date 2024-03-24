

import axios from "axios";
import {createAsyncThunk} from '@reduxjs/toolkit'
import {CurrentApi} from '../config'
import {getToken} from '@/service/auth'


export const axiosInstance = axios.create({
  baseURL: CurrentApi,
  headers: {
    "Content-Type": "application/json",
    // "x-auth-token":getToken()
  },
});
export const axiosInstanceToken = axios.create({
  baseURL: CurrentApi,
  headers: {
    "Content-Type": "multipart/form-data",
    "x-auth-token":getToken()
  },
});
export const axiosInstanceGet = axios.create({
  baseURL: CurrentApi,
  headers: {
    "Content-Type": "application/json",
    "x-auth-token":getToken()
  },
});

export const signup = createAsyncThunk("signup", async (payload) => {
  const response = await axiosInstance.post(`/api/hotels/signup`, payload)
  return response.data;
})
export const login = createAsyncThunk("Login", async (payload) => {
  const response = await axiosInstance.post(`/api/hotels/login`, payload)
  return response.data;
})

// -----------------
export const createHotelStep1 = createAsyncThunk("createHotelStep1", async (payload) => {
  const response = await axiosInstanceToken.post(`api/hotels/profile-details`, payload)
  return response.data;
})
export const AddHotelContact = createAsyncThunk("AddHotelContact", async (payload) => {
  const response = await axiosInstanceGet.post(`api/hotels/contact-details`, payload)
  return response.data;
})


export const GetmyHotel = createAsyncThunk("GetmyHotel", async (payload) => {
  const response = await axiosInstanceGet.get(`api/hotels/my`, payload)
  return response.data;
})
