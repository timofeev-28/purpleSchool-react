import cn from 'classnames';
import styles from './favoritesFilms.module.css';
import Title from '../ui/title/title';
import CardFilm from '../mainContent/listFilms/cardFilm/cardFilm';
import dataFavorites from '../../assets/dataFavorites';

export default function FavoritesFilms() {
    return (
        <section className={cn(styles.favorites, 'container')}>
            <Title text='Избранное' />
            <div className={styles.favorites__wrap}>
                {dataFavorites && dataFavorites.cardsFilms?.length > 0 &&
                    dataFavorites.cardsFilms?.map((card) => (
                        <CardFilm
                            key={card.id}
                            id={card.id}
                            title={card.title}
                            image={card.image}
                            rating={card.rating}
                        />
                ))}
                {(dataFavorites && dataFavorites.cardsFilms?.length === 0) && (
                <p className={styles.favorites__text}>Здесь пока ничего нет, выберите любимые фильмы!</p>
                )}
            </div>
        </section>
    )
}
