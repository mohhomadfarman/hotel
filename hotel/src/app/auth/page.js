"use client"
import { Component, useEffect } from 'react';
import {getUserFromToken} from '../../service/auth'
import { useRouter } from 'next/navigation';
import Router from 'next/router';

function Auth({children,pageProps}) {
  const router = useRouter();

  useEffect(() => {
    const user = getUserFromToken();
    console.log(user)
    if (!user?.role || !user ) {
      router?.replace('/auth/login'); // Replace the URL instead of pushing it
    }else{
        router?.replace('/users');
    }
  }, []);

  return  pageProps;
}

export default Auth;