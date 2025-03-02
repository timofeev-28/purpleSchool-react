import cn from 'classnames';
import styles from './film.module.css';
import ButtonFavorites from '../ui/buttonFavorites/buttonFavorites';
import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { FilmProps } from './film.props';

export default function Film() {
    const data = useLoaderData() as FilmProps;

    return (
        <Suspense fallback={'Загрузка...'}>
            <Await resolve={data}>
            {({ short }: FilmProps) => (
                <section className={cn(styles.film, 'container')}>
                    <h1 className={styles.film__title}>
                        <span>Поиск фильмов</span>
                        {short?.name}
                    </h1>
                    <div className={styles.film__content_wrap}>
                        <div className={styles.film__image_wrap}>
                            <img src={short?.image} alt={short?.name} />
                        </div>
                        <div className={styles.film__content}>
                            <p className={styles.film__descr}>{short?.description}</p>
                            <div className={styles.film__rating_wrap}>
                                <p className={styles.film__rating}>{short?.aggregateRating?.ratingValue}</p>
                                <ButtonFavorites />
                            </div>
                            <p className={styles.film__text}>
                                <span className={styles.film__subtitle}>Тип</span>
                                {short['@type']}
                            </p>
                            <p className={styles.film__text}>
                                <span className={styles.film__subtitle}>Дата выхода</span>
                                {short?.datePublished}
                            </p>
                            <p className={styles.film__text}>
                                <span className={styles.film__subtitle}>Длительность</span>
                                {}
                            </p>
                            <p className={styles.film__text}>
                                <span className={styles.film__subtitle}>Жанр</span>
                                {short?.genre?.join(', ')}
                            </p>
                        </div>
                    </div>
                    <div className={styles.film__reviews}>
                        <h2 className={styles.film__reviews_title}>Отзывы</h2>
                            <div className={styles.film__reviews_wrap}>
                                <div className={styles.film__reviews_subtitle_wrap}>
                                    <p className={styles.film__reviews_subtitle}>{short?.review?.name}</p>
                                    <p className={styles.film__reviews_date}>{short?.review?.dateCreated}</p>
                                </div>
                                <p className={styles.film__reviews_descr}>{short?.review?.reviewBody}</p>
                            </div>
                    </div>
                </section>
            )}
            </Await>
        </Suspense>
    )
}
