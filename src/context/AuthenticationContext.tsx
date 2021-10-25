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
  error: any;
}

// Properties
const initialState = {
  uid: "",
  setUid: null,
  setError: null,
  error: null,
};
// @ts-ignore
const AuthenticationContext = createContext<iContext>(initialState);

export function AuthenticationProvider({ children }: iProps) {
  // Local state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState({});
  const [uid, setUid] = useState("");

  useEffect(() => {
    onAuthStateChanged(
      authInstance,
      (user) => {
        if (user) setUid(user.uid);
        else setUid("no user");
      },
      setError
    );
  }, [isAuthenticated]);

  return (
    <AuthenticationContext.Provider
      value={{ error, uid, setUid, isAuthenticated, setIsAuthenticated }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

export function useAuthentication() {
  const auth = useContext(AuthenticationContext);
  return { ...auth };
}
