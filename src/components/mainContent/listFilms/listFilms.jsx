import styles from "./listFilms.module.css";
import CardFilm from "./cardFilm/cardFilm";

export default function ListFilms() {
  return (
    <div className={styles.list_films}>
      <CardFilm />
    </div>
  );
}
