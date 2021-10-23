// NPM package
import { createContext, useContext, useState } from "react";
import { newUser } from "../types/newUser";
import iUser from "../interfaces/iUser";
//interface
interface iContext {
  userData: iUser;
  setUserData: any;
  participants: iUser[];
  setParticipants: any;
}
// Properties
const initialState = {
  userData: newUser,
  setUserData: null,
  participants: [],
  setParticipants: null,
};
const UserDataContext = createContext<iContext>(initialState);

export function UserDataProvider({ children }: any) {
  // Local state
  const [userData, setUserData] = useState(newUser);
  const [participants, setParticipants] = useState([]);

  return (
    <UserDataContext.Provider
      value={{ participants, setParticipants, userData, setUserData }}
    >
      {children}
    </UserDataContext.Provider>
  );
}

export function useUserData() {
  return useContext(UserDataContext);
}
