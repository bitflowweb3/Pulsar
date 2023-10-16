import type { AppProps } from 'next/app';
import AppLayout from '../ui/layouts/AppLayout';
import '../styles/globals.scss';
import { AuthProvider } from '../auth/AuthProvider';
import { AccountProvider } from '../ui/layouts/AccountProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AccountProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </AccountProvider>
    </AuthProvider>
  );
}
