import React, { useState } from 'react';
import { useRouter } from 'next/router';

interface AppProviderProps {
  children: React.ReactNode;
}

interface ProviderValues {
  sidebarOpen?: boolean;
  openSidebar?: () => void;
  closeSidebar?: () => void;
}

const Context = React.createContext<ProviderValues>({});

const AppProvider = ({ children }: AppProviderProps) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const router = useRouter();

  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <Context.Provider value={{ sidebarOpen, openSidebar, closeSidebar }}>
      {children}
    </Context.Provider>
  );
};

const useAppContext = () => {
  return React.useContext(Context);
};

export { AppProvider, useAppContext };
