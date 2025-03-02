import { ReactNode } from 'react';
import { UseLocalStorageProps } from '../hook/use-localstorage.props';
import { Navigate } from 'react-router-dom';

export const RequireAuth = ({ children }: {children: ReactNode}) => {
    const res = localStorage.getItem('users');
    const parsedRes: UseLocalStorageProps[] = res ? JSON.parse(res) : [];
    const userIsLogined = parsedRes.find((el: UseLocalStorageProps) => el.isLogined === true);

    if (!userIsLogined) {
        return <Navigate to='/login' replace />;
    }
    return children;
}
