import { useState, useEffect } from "react";

export function useLocalStorage(key) {
    const [data, setData] = useState();
    
    useEffect(() => {
        const res = JSON.parse(localStorage.getItem(key));
        const userIsLogined = res?.find(el => el.isLogined === true);
        if (userIsLogined) {
            setData(userIsLogined);
        }
    }, []);

    const saveData = (user) => {
        const res = JSON.parse(localStorage.getItem(key));

        const getFilteredRes = () => {
            const filteredRes = res.filter(el => el.name !== user.name);
            localStorage.setItem(key, JSON.stringify([...filteredRes, user]));
        }

        if (!res) {
            localStorage.setItem(key, JSON.stringify([user]));
            setData(user);
        } else if (!user.isLogined) {
            getFilteredRes();
            setData(null);
        } else {
            getFilteredRes();
            setData(user);
        }
    }

    return [data, saveData];
}
