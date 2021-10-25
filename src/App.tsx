import React, { useCallback, useEffect, useState } from "react";
import "./styles/index.sass";
import Browser from "./components/Browser";
import { getDocument } from "./firebaseServices/firestore";
import { useUserData } from "./context/UserDataContext";
import { useAuthentication } from "./context/AuthenticationContext";
import Spinner from "./components/Spinner";

export default function App() {
  // Global state
  const { uid, setIsAuthenticated, isAuthenticated } = useAuthentication();
  const { setUserData } = useUserData();

  // Local state
  const [status, setStatus] = useState(0); // 0 pending, 1 ready, 2 error

  // Methods
  const fetchUserData = useCallback(
    async (path: string, uid: string) => {
      if (uid === "no user") {
        setStatus(1);
      } else if (uid !== "") {
        // @ts-ignore
        const userData = await getDocument(path, uid);
        setIsAuthenticated(true);
        setUserData(userData);
        setStatus(1);
        console.log(userData, "tries to set ");
      }
    },
    [setIsAuthenticated, setUserData]
  );

  useEffect(() => {
    fetchUserData("userData", uid);
  }, [fetchUserData, uid]);

  return (
    <div className="App">
      {status === 0 && <Spinner />}
      {status === 1 && <Browser />}
      {status === 2 && <p>Error 🚨</p>}
    </div>
  );
}
