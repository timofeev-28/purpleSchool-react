import { Link, useLocation } from 'react-router-dom';
import styles from './cardFilm.module.css';
import { CardFilmProps } from './cardFilm.props';
import cn from "classnames";

export default function CardFilm({id, title, image, rating }: CardFilmProps) {
    const location = useLocation();
    const {pathname} = location;

    return (
        <div className={styles.card} key={id}>
            <span className={styles.card__rating}>{rating}</span>
            <Link className={styles.card__img_link} to='movie/:id'>
                <img
                    className={styles.card__image}
                    src={image}
                    alt={title}
                />
            </Link>
            <h2 className={styles.card__title}>{title}</h2>
            <button
                className={cn(styles.card__btn, {
                  [styles.card__btn_main]: pathname === '/',
                  [styles.card__btn_fav]: pathname === '/favorites',
                })}
            >
                {pathname === '/' && <span>В избранное</span>}
                {pathname === '/favorites' && <span>В избранном </span>}
            </button>
        </div>
    );
}
