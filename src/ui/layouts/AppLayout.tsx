import React from 'react';
import { AppProvider } from './AppProvider';
import Header from './header';
import Sidebar from './sidebar';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <AppProvider>
      <Header />
      <section className='main-content'>
        <Sidebar />
        {children}
      </section>
    </AppProvider>
  );
};
export default AppLayout;
