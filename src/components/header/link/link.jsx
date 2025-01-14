import cn from "classnames";
import styles from "./link.module.css";

export default function Link({ link, text, className, countFavorites }) {
  return (
    <li className={styles["nav__item"]}>
      <a
        className={cn(styles["nav__link"], {
          [styles[className]]: className,
        })}
        href={link}
      >
        {text}
        {countFavorites && (
          <span className={styles["nav__count"]}>{countFavorites}</span>
        )}
      </a>
    </li>
  );
}
