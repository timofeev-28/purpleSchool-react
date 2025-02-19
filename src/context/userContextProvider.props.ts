import { ReactNode } from 'react';

export interface UserContextProviderProps {
  children: ReactNode;
}

export interface UserContextType {
  user: {
    name: string;
    isLogined: boolean;
  };
  // setUser: React.Dispatch<React.SetStateAction<{ name: string; isLogined: boolean }>>

  setUser: (user: {
    name: string;
    isLogined: boolean;
  }) => void;
}

// export interface UserContextType {
//   user: { name: string; isLogined: boolean } | null;
//   setUser: React.Dispatch<React.SetStateAction<{ name: string; isLogined: boolean } | null>>;
// }
