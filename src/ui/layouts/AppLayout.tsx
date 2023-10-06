import React from 'react';
import { AppProvider } from './AppProvider';
import Header from './header';
import Sidebar from './sidebar';
import { ThemeProvider } from '@mui/material';
import { pulsarTheme } from '../../theme';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <AppProvider>
      <ThemeProvider theme={pulsarTheme}>
        <Header />
        <section className='main-content'>
          <Sidebar />
          {children}
        </section>
      </ThemeProvider>
    </AppProvider>
  );
};
export default AppLayout;
