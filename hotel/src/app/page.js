
"use client"
import React, { useEffect } from 'react'
import {useDispatch } from 'react-redux'
import { loginApi } from '../redux/AuthAction';
import MeinApp from './home/page';

function page({children}) {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(loginApi())
  },[])
  return (
<MeinApp/>
  );
}

export default page