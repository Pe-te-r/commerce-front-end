import React, { createContext, useState, ReactNode } from "react";

interface AuthContextProps {
  isLoggedIn: boolean;
  toggleLogin: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    const user = localStorage.getItem('user')
    console.log(user)
    setIsLoggedIn((prev) => !prev)
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, toggleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
