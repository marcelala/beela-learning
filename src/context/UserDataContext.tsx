// NPM package
import { createContext, useContext, useState } from "react";
import { newUser } from "../types/newUser";
import iUser from "../interfaces/iUser";
//interface
interface iContext {
  userData: iUser;
  setUserData: any;
}
// Properties
const initialState = {
  userData: newUser,
  setUserData: null,
};
const UserDataContext = createContext<iContext>(initialState);

export function UserDataProvider({ children }: any) {
  // Local state
  const [userData, setUserData] = useState(newUser);

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
}

export function useUserData() {
  return useContext(UserDataContext);
}
