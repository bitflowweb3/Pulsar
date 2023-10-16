import React, { useState, useEffect } from 'react';
import { getAccessToken } from '../services/auth';

export interface AuthContextProps {
  isAuthenticated: boolean | undefined;
  setAuthenticate: ({ authed }: { authed: boolean }) => void;
}

const AuthContext = React.createContext<AuthContextProps | null>(null);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, Authenticate] = useState<boolean | undefined>(
    undefined
  );
  const setAuthenticate = ({ authed }: {authed: boolean}) => {
    Authenticate(authed);
  }

  useEffect(() => {
    CheckAuthenticated();
  }, []);
  const CheckAuthenticated = async () => {
    if ((await getAccessToken()) === 'bearer123123') {
      Authenticate(true);
    }
  };
  return  (
    <AuthContext.Provider value={{ isAuthenticated, setAuthenticate }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
