import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import Browser from "./components/Browser";
import { getDocument } from "./firebaseServices/firestore";
import { useUserData } from "./context/UserDataContext";
import { useAuthentication } from "./context/AuthenticationContext";

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
        console.log("user not registered on fetch");
      } else if (uid !== "") {
        // @ts-ignore
        const userData = await getDocument(path, uid);
        console.log("tries to set user Data on fetch");
        setIsAuthenticated(true);
        setUserData(userData);
        console.log(userData);
        setStatus(1);
      }
    },
    [setIsAuthenticated, setUserData]
  );

  useEffect(() => {
    fetchUserData("participants", uid);
    console.log(uid);
  }, [fetchUserData, uid]);

  return (
    <div className="App">
      <Browser />
    </div>
  );
}
