import styles from "./nav.module.css";
import { MouseEvent, useContext } from "react";
import { UserContext } from "../../../context/user.context";
import NavItem from '../navItem/navItem';

export default function Nav() {
  const { user, setUser } = useContext(UserContext);

  const linkClickHandler = (e: MouseEvent) => {
      if (user?.isLogined) {
          setUser({ ...user, isLogined: false });
      }
  };

  return (
    <nav className={styles.nav}>
        <ul className={styles.nav__list}>
            <NavItem link='./' text='Поиск фильмов' />
            <NavItem link='./favorites' text='Мои фильмы' countFavorites='2' />
            {user?.name && (
                <NavItem link='./user' text={user?.name} appearance='icon-user' />
            )}
            <NavItem
                onClick={linkClickHandler}
                link='./login'
                text={user?.isLogined ? "Выйти" : "Войти"}
                appearance='icon-entrance'
            />
        </ul>
    </nav>
  );
}
