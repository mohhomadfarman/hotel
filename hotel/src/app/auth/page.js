"use client"
import { Component, useEffect } from 'react';
import {getUserFromToken} from '../../service/auth'
import { useRouter } from 'next/navigation';

function Auth({pageProps}) {
  const router = useRouter();

  useEffect(() => {
    const user = getUserFromToken();
    console.log(user)
    if (!user?.role || !user ) {
      router?.replace('/auth/create-profile'); // Replace the URL instead of pushing it
    }else{
        router?.replace('/users/home');
    }
  }, []);

  return  pageProps;
}

export default Auth;