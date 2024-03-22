import React from 'react'
import MeinApp from './home/page';
import Header from '../components/Header';
import Footer from '../components/Footer'

function page({children}) {
  return (
    <>
    <Header/>
    <MeinApp/>
    <Footer/>
    </>
  );
}

export default page