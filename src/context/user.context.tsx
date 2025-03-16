import { createContext } from "react";
// import { useLocalStorage } from "../hook/use-localstorage.hook";
import { UserContextProviderProps, UserContextType } from './userContextProvider.props';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const UserContext = createContext<UserContextType>({
  // user: {
  //   name: '',
  //   isLogined: false,
  //   favorites: []
  // },
  // setUser: () => {}

    name: '',
    isLogined: false,
    favorites: []
});

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  // const [user, setUser] = useLocalStorage("users");
  const { name, isLogined, favorites } = useSelector((s: RootState) => s.user);

  return (
    <UserContext.Provider value={{ name, isLogined, favorites }}>
      {children}
    </UserContext.Provider>
  );
};
