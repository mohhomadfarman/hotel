"use client"
import { useEffect } from 'react';
import {getUserFromToken} from '../../service/auth'
import { redirect, useRouter } from 'next/navigation';

function Users({ children}) {
  const router = useRouter();

  useEffect(() => {
    const user = getUserFromToken();
    console.log(user)
    if (user?.role === 'hotel') {
      router?.replace('/users/home'); // Replace the URL instead of pushing it
    }else{
        router?.replace('/auth/login');
    }
  }, []);

  return children;
}

export default Users;