// dependencies
import React, { createContext, ReactNode, useContext, useState } from "react";
import iUser from "../interfaces/iUser";
// Interfaces
interface iProps {
  children: ReactNode;
}
interface iContext {
  users: iUser[];
  dispatch: Function;
}

// Properties
const AuthenticationContext = createContext(null);

export function AuthenticationProvider({ children }: any) {
  // Local state
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({});

  return (
    <AuthenticationContext.Provider
      value={{ user, setUser, isLogged, setIsLogged }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

export function useAuthentication() {
  const context = useContext(AuthenticationContext);

  return context;
}
