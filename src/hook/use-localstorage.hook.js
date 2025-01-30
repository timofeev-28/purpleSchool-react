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
        let res = JSON.parse(localStorage.getItem(key));
        const userIsLogined = res?.find(el => el.name === user.name && el.isLogined === true);

        if (!res) {
            localStorage.setItem(key, JSON.stringify([user]));
            setData(user);
        } else if (userIsLogined) {
            res = res.filter(el => el.name !== user.name);
            localStorage.setItem(key, JSON.stringify([...res, user]));
            setData(null);
        } else {
            res = res.filter(el => el.name !== user.name);
            localStorage.setItem(key, JSON.stringify([...res, user]));
            setData(user);
        }
    }

    return [data, saveData];
}
