import styles from "./nav.module.css";
import Link from "../link/link";
import { useContext } from "react";
import { UserContext } from "../../../context/user.context";

export default function Nav() {
  const { user, setUser } = useContext(UserContext);

  const linkClickHandler = (e) => {
    e.preventDefault();
    if (user?.isLogined) {
      setUser({ ...user, isLogined: false });
    }
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <Link link='./' text='Поиск фильмов' />
        <Link link='./' text='Мои фильмы' countFavorites='2' />
        {user?.name && (
          <Link link='./' text={user?.name} appearance='icon-user' />
        )}
        <Link
          onClick={linkClickHandler}
          link='./'
          text={user?.isLogined ? "Выйти" : "Войти"}
          appearance='icon-entrance'
        />
      </ul>
    </nav>
  );
}
