import { ButtonHTMLAttributes } from 'react';

export interface ButtonFavoritesProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    // pathname: string;
    favorites?: boolean;
}
