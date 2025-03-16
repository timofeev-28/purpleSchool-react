import { useContext } from 'react';
import { UserContext } from '../../context/user.context';
import styles from './userProfile.module.css';
import cn from 'classnames';

export default function userProfile() {
      const { name } = useContext(UserContext);

    return (
        <div className={cn(styles.user, 'container')}>
            <h1 className={styles.user__title}>Профиль пользователя</h1>
            <p className={styles.user__name}>Имя пользователя: {name}</p>
        </div>
    )
}
