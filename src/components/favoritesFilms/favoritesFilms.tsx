import cn from 'classnames';
import styles from './favoritesFilms.module.css';
import Title from '../ui/title/title';
import CardFilm from '../mainContent/listFilms/cardFilm/cardFilm';
import data from '../../assets/data';

export default function FavoritesFilms() {
    return (
        <section className={cn(styles.favorites, 'container')}>
            <Title text='Избранное' />
            <div className={styles.favorites__wrap}>
                {data && data.favorites?.length > 0 &&
                    data.favorites?.map((card) => (
                        <CardFilm
                            key={card.id}
                            id={card.id}
                            title={card.title}
                            image={card.image}
                            rating={card.rating}
                            favorites={card.favorites}
                        />
                ))}
                {(data && data.favorites?.length === 0) && (
                <p className={styles.favorites__text}>Здесь пока ничего нет, выберите любимые фильмы!!</p>
                )}
            </div>
        </section>
    )
}
