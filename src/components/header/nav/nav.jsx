import styles from "./nav.module.css";
import Link from "../link/link";
import data from "../../../assets/data";

export default function Nav() {
  return (
    <nav className={styles["nav"]}>
      <ul className={styles["nav__list"]}>
        {data &&
          data.header?.map((el) => (
            <Link
              key={el.id}
              link={el.link}
              text={el.text}
              countFavorites={el.countFavorites}
              className={el.class}
            />
          ))}
      </ul>
    </nav>
  );
}
