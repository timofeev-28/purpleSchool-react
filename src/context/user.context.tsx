import { createContext } from "react";
import { UserContextProviderProps, UserContextType } from './userContextProvider.props';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';


export const UserContext = createContext<UserContextType>({
    name: '',
    isLogined: false,
    favorites: []
});

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const { name, isLogined, favorites } = useSelector((s: RootState) => s.user);

  return (
    <UserContext.Provider value={{ name, isLogined, favorites }}>
      {children}
    </UserContext.Provider>
  );
};
