import { useState, useEffect } from 'react';
import { UseLocalStorageProps, ResFunctionProps } from './use-localstorage.props';

export function useLocalStorage(key: string): ResFunctionProps {
    const [data, setData] = useState<UseLocalStorageProps>({name: '', isLogined: false});

    const checkResLocalStorage = () => {
        const res = localStorage.getItem(key);
        const parsedRes: UseLocalStorageProps[] = res ? JSON.parse(res) : [];
        return parsedRes;
    }
    
    useEffect(() => {
        const userIsLogined = checkResLocalStorage().find((el: UseLocalStorageProps) => el.isLogined === true);
        if (userIsLogined) {
            setData(userIsLogined);
        }
    }, []);

    const saveData = (user: UseLocalStorageProps) => {
        const res = checkResLocalStorage();

        const getFilteredRes = () => {
            const filteredRes = res.filter((el: UseLocalStorageProps) => el.name !== user?.name);
            localStorage.setItem(key, JSON.stringify([...filteredRes, user]));
        }

        if (res.length === 0) {
            localStorage.setItem(key, JSON.stringify([user]));
            setData(user);
        } else if (user && !user.isLogined) {
            getFilteredRes();
            setData({name: '', isLogined: false});
        } else {
            getFilteredRes();
            setData(user);
        }
    }

    return [data, saveData];
}
