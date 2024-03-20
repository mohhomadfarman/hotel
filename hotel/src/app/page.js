
"use client"
import React, { useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'
import { loginApi } from '../redux/AuthAction';
import store from '../redux/store';

function page({children}) {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(loginApi())
  })
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

export default page