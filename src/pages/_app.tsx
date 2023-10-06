import type { AppProps } from 'next/app';
import AppLayout from '../ui/layouts/AppLayout';
import '../styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}
