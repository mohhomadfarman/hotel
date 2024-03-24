"use client";
import React, { useState, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import "@/app/globals.css";
import "@/app/main.scss";
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
            <Header/>         
             {children}
             <Footer/>  
    </>
  );
}
