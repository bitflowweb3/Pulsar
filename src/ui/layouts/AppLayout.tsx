import React from 'react';
import { AccountProvider } from './AccountProvider';
import Header from './header';
import Sidebar from './sidebar';
import { ThemeProvider } from '@mui/material';
import { pulsarTheme } from '../../theme';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <AccountProvider>
      <ThemeProvider theme={pulsarTheme}>
        <Header />
        <section className='main-content'>
          <Sidebar />
          {children}
        </section>
      </ThemeProvider>
    </AccountProvider>
  );
};
export default AppLayout;
