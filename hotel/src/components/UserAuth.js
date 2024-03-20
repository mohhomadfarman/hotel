// components/RequireAuth.js

import { useEffect } from 'react';
import { getUserFromToken, isAuthenticated } from '../service/auth';
import { useRouter } from 'next/navigation';

const UserAuth = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const user = getUserFromToken();
    console.log(user)
    if (user?.role === 'hotel') {
      router?.replace('/users/home'); // Replace the URL instead of pushing it
    }else{
        router?.replace('/auth/login')
    }
  }, []);

  return isAuthenticated() ? children : null;
};

export default UserAuth;