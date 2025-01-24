import styles from "./nav.module.css";
import Link from "../link/link";

export default function Nav({ userName, onClick }) {
  return (
    <nav className={styles["nav"]}>
      <ul className={styles["nav__list"]}>
        <Link link="./" text="Поиск фильмов" />
        <Link link="./" text="Мои фильмы" countFavorites="2" />
        {userName && <Link link="./" text={userName} appearance="icon-user" />}
        <Link
          onClick={onClick}
          link="./"
          text={userName ? "Выйти" : "Войти"}
          appearance="icon-entrance"
        />
      </ul>
    </nav>
  );
}
