import React, { useCallback, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Browser from "./components/Browser";
import { getDocument } from "./firebaseServices/firestore";
import { useUser } from "./context/UserContext";
import { useAuthentication } from "./context/AuthenticationContext";

export default function App() {
  // Global state
  const { uid, setIsAuthenticated, isAuthenticated } = useAuthentication();
  const { setUser } = useUser();

  // Local state
  const [status, setStatus] = useState(0); // 0 pending, 1 ready, 2 error

  // Methods
  const fetchUser = useCallback(
    async (path: string, uid: string) => {
      if (uid === "no user") {
        setStatus(1);
        console.log("user not registered on fetch");
      } else if (uid !== "") {
        // @ts-ignore
        const user = await getDocument(path, uid);
        console.log("tries to set user Data on fetch");
        setIsAuthenticated(true);
        setUser(user);
        console.log(user);
        setStatus(1);
      }
    },
    [setIsAuthenticated, setUser]
  );

  useEffect(() => {
    fetchUser("participants", uid);
    console.log(uid);
  }, [fetchUser, uid]);

  return (
    <div className="App">
      <Browser />
    </div>
  );
}
