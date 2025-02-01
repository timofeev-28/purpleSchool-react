import { createContext } from "react";
import { useLocalStorage } from "../hook/use-localstorage.hook";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("users");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
