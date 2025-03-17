import { ReactNode } from 'react';
import { CardFilmProps } from '../components/mainContent/listFilms/cardFilm/cardFilm.props';


export interface UserContextProviderProps {
    children: ReactNode;
}

export interface UserContextType {
    name: string;
    isLogined?: boolean;
    favorites: CardFilmProps[];
}
