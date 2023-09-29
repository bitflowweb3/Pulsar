import React, { useState } from 'react';

interface AuthContextProps {
  isAuthenticated: boolean | undefined;
}

const AuthContext = React.createContext<AuthContextProps | null>(null);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, Authenticate] = useState<boolean | undefined>(
    undefined
  );
  const [waitAuthChecked, AuthChecked] = useState<boolean>(true);

  return waitAuthChecked ? (
    <div>Splash Screen</div>
  ) : (
    <AuthContext.Provider value={{ isAuthenticated }}>
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
