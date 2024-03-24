import { getUserFromToken, isAuthenticated } from '@/service/auth';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const IsLogin = ({ children }) => {
  const router = useRouter();
const pathname = usePathname()
  useEffect(() => {
    const user = getUserFromToken();
    if (user?.role === 'hotel' && !pathname.startsWith('/dashboard')) {
      router.replace('/dashboard'); // Redirect to dashboard if the user's role is hotel and pathname is not under /dashboard
    } else if (user?.role !== 'hotel' && pathname?.startsWith('/dashboard')) {
      router.replace('/'); // Redirect to home if the user's role is not hotel and they try to access routes under /dashboard
    }
  }, [router.pathname]); // Include router.pathname in the dependency array to track changes in pathname

  return isAuthenticated() ? <>{children}</> : <>{children}</>; // Render children only if user is authenticated
};

export default IsLogin;
