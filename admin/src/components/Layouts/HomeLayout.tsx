"use client";
import React, { useState, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

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
