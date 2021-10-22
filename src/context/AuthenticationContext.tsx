// dependencies
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { onAuthStateChanged } from "firebase/auth";
import { authInstance } from "../firebaseServices/firebase";
// Interfaces
interface iProps {
  children: ReactNode;
}
interface iContext {
  uid: string;
  setUid: any;
  isAuthenticated: boolean;
  setIsAuthenticated: any;
}

// Properties
const initialState = {
  uid: "",
  setUid: null,
  isLogged: false,
  setIsLogged: null,
  setError: null,
};
// @ts-ignore
const AuthenticationContext = createContext<iContext>(initialState);

export function AuthenticationProvider({ children }: iProps) {
  // Local state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState({});
  const [uid, setUid] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      authInstance,
      (user) => {
        if (user) setUid(user.uid);
        else setUid("no user");
      },
      setError
    );
    return unsubscribe();
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{ uid, setUid, isAuthenticated, setIsAuthenticated }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

export function useAuthentication() {
  const auth = useContext(AuthenticationContext);
  return { ...auth };
}
