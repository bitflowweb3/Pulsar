import React, {useEffect} from 'react';
import withAuth from '../auth/withAuth';
import Home from '../ui/pages/dashboard';
import {useRouter} from 'next/router';

function HomePage() {
  const router = useRouter();
  useEffect(() => {
    router.push('/dashboard')
  }, []);
  return <Home />;
}

export default withAuth(HomePage);
