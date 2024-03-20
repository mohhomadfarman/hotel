// services/auth.js

import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';

const TOKEN_KEY = 'jwtToken';

export const login = (token) => {
  Cookies.set(TOKEN_KEY, token);
};

export const logout = () => {
  Cookies.remove(TOKEN_KEY);
};

export const getToken = () => {
  return Cookies.get(TOKEN_KEY);
};

export const getUserFromToken = () => {
  const token = getToken();
  if (token) {
    return jwtDecode(token);
  }
  return null;
};

export const isAuthenticated = () => {
  const token = getToken();
  return !!token;
};

