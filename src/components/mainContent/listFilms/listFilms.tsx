import styles from './listFilms.module.css';
import CardFilm from './cardFilm/cardFilm';
import data from '../../../assets/data';

export default function ListFilms() {
    return (
        <div className={styles.list_films}>
            {data &&
              data.cardsFilms?.map((card) => (
                  <CardFilm
                      key={card.id}
                      id={card.id}
                      title={card.title}
                      image={card.image}
                      rating={card.rating}
                      favorites={card.favorites}
                  />
              ))}
            {(!data || !data.cardsFilms) && (
              <p className={styles.error__text}>Упсс... Ничего не загрузилось!</p>
            )}
        </div>
    );
}
