
"use client"
import React, { useEffect } from 'react'
import {useDispatch } from 'react-redux'
import { loginApi } from '../redux/AuthAction';
import MeinApp from './home/page';
import Header from '../components/Header';
import Footer from '../components/Footer'
import Swiper from 'swiper';
import { Scrollbar } from 'smooth-scrollbar-react';

function page({children}) {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(loginApi())
  },[])

  return (
    <>
    <Header/>
    <MeinApp/>
    <Footer/>
    </>
  );
}

export default page