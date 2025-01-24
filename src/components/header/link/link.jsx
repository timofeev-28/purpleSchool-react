import cn from "classnames";
import styles from "./link.module.css";

export default function Link({
  link,
  text,
  appearance,
  countFavorites,
  onClick,
}) {
  return (
    <li className={styles["nav__item"]}>
      <a
        className={cn(styles["nav__link"], {
          [styles["link-entrance"]]: appearance === "icon-entrance",
          [styles["link-user"]]: appearance === "icon-user",
        })}
        href={link}
        onClick={onClick}
      >
        {text}
        {countFavorites && (
          <span className={styles["nav__count"]}>{countFavorites}</span>
        )}
      </a>
    </li>
  );
}
