"use client"
import { useEffect } from 'react';
import {getUserFromToken} from '../../service/auth'
import { useRouter } from 'next/navigation';

// function Auth({children}) {
//   const router = useRouter();

//   useEffect(() => {
//     const user = getUserFromToken();
//     if (!user?.role || !user ) {
//       router?.replace('/auth/create-profile'); // Replace the URL instead of pushing it
//     }else{
//         router?.replace('/users/home');
//     }
//   }, []);

//   return children;
// }

// export default Auth;

import React from 'react'

function Auth() {
  return (
    <div>page</div>
  )
}

export default Auth