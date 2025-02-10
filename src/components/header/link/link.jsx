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
    <li>
      <a
        className={cn(styles.nav__link, {
          [styles.link_entrance]: appearance === "icon-entrance",
          [styles.link_user]: appearance === "icon-user",
        })}
        href={link}
        onClick={onClick}
      >
        {text}
        {countFavorites && (
          <span className={styles.nav__count}>{countFavorites}</span>
        )}
      </a>
    </li>
  );
}
