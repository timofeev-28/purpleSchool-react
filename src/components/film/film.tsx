import data from '../../assets/data';
import cn from 'classnames';
import styles from './film.module.css';
import ButtonFavorites from '../ui/buttonFavorites/buttonFavorites';

export default function Film() {
    const { title, image, alt, description, rating, favorites, type, date, length, genre, reviews} = data.film;

    return (
        <section className={cn(styles.film, 'container')}>
            <h1 className={styles.film__title}>
                <span>Поиск фильмов</span>
                {title}
            </h1>
            <div className={styles.film__content_wrap}>
                <div className={styles.film__image_wrap}>
                    <img src={image} alt={alt} />
                </div>
                <div className={styles.film__content}>
                    <p className={styles.film__descr}>{description}</p>
                    <div className={styles.film__rating_wrap}>
                        <p className={styles.film__rating}>{rating}</p>
                        <ButtonFavorites favorites={favorites} />
                    </div>
                    <p className={styles.film__text}>
                        <span className={styles.film__subtitle}>Тип</span>
                        {type}
                    </p>
                    <p className={styles.film__text}>
                        <span className={styles.film__subtitle}>Дата выхода</span>
                        {date}
                    </p>
                    <p className={styles.film__text}>
                        <span className={styles.film__subtitle}>Длительность</span>
                        {length}
                    </p>
                    <p className={styles.film__text}>
                        <span className={styles.film__subtitle}>Жанр</span>
                        {genre}
                    </p>
                </div>
            </div>
            <div className={styles.film__reviews}>
                <h2 className={styles.film__reviews_title}>Отзывы</h2>
                {data &&
                    data.film?.reviews?.map((review) => (
                        <div className={styles.film__reviews_wrap}>
                            <div className={styles.film__reviews_subtitle_wrap}>
                                <p className={styles.film__reviews_subtitle}>{review.title}</p>
                                <p className={styles.film__reviews_date}>{review.date}</p>
                            </div>
                            <p className={styles.film__reviews_descr}>{review.description}</p>
                        </div>
                    ))}
            </div>
        </section>
    )
}
