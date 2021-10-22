// NPM package
import { createContext, useContext, useState } from "react";
import { newUser } from "../types/newUser";
import iUser from "../interfaces/iUser";
//interface
interface iContext {
  user: iUser;
  setUser: any;
}
// Properties
const initialState = {
  user: newUser,
  setUser: null,
};
const UserContext = createContext<iContext>(initialState);

export function UserProvider({ children }: any) {
  // Local state
  const [user, setUser] = useState(newUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
