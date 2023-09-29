import { useEffect } from 'react';
import { useAuth } from './AuthProvider';
import { useRouter } from 'next/router';

const withAuth = (WrappedComponent: React.ComponentType<any>) => {
  const WrapperCommponent: React.FC<any> = (props) => {
    const auth = useAuth();
    const router = useRouter();

    // useEffect(() => {
    //   if (!auth?.isAuthenticated) {
    //     router.push('/');
    //   }
    // }, [auth, router]);

    if (!auth?.isAuthenticated) {
        return <div>{`Don\'t have permission`}</div>;
    }
    return <WrappedComponent {...props} />;
  };
  return WrapperCommponent;
};

export default withAuth;
