import { createContext } from "react";
import { useLocalStorage } from "../hook/use-localstorage.hook";
import { UserContextProviderProps, UserContextType } from './userContextProvider.props';

export const UserContext = createContext<UserContextType>({
  user: {
    name: '',
    isLogined: false
  },
  setUser: () => {}
});

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useLocalStorage("users");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
