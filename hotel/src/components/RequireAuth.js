// components/RequireAuth.js

import { useEffect } from 'react';
import { isAuthenticated } from '../service/auth';
import { useRouter } from 'next/navigation';

const RequireAuth = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/auth/login');
    }
  }, []);

  return isAuthenticated() ? children : null;
};

export default RequireAuth;
