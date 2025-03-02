import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

export default function userProfile() {
      const { user, setUser } = useContext(UserContext);

    return (
        <div>
            <h1>Профиль пользователя</h1>
            <h2>Имя пользователя: {user?.name}</h2>
        </div>
    )
}
