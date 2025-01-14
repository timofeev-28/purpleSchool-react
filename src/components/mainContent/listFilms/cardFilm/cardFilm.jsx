import styles from "./cardFilm.module.css";
import data from "../../../../assets/data";

export default function CardFilm() {
  return (
    <>
      {data &&
        data.mainPage?.cardsFilms?.map((card) => (
          <div className={styles["card"]} key={card.id}>
            <span className={styles["card__rating"]}>{card.rating}</span>
            <a className={styles["card__img-link"]} href="./">
              <img
                className={styles["card__image"]}
                src={card.image}
                alt={card.title}
              />
            </a>
            <h2 className={styles["card__title"]}>{card.title}</h2>
            <button className={styles["card__btn"]}>В избранное</button>
          </div>
        ))}
    </>
  );
}
