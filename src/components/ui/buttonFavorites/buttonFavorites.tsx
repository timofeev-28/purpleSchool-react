import styles from './buttonFavorites.module.css';
import cn from "classnames";
import { ButtonFavoritesProps } from './buttonFavorites.props';

export default function ButtonFavorites({ favorites }: ButtonFavoritesProps) {
    return (
        <button
            className={cn(styles.btn, {
                [styles.btn__main]: !favorites,
                [styles.btn__fav]: favorites
            })}
        >
            {!favorites && <span>В избранное</span>}
            {favorites && <span>В избранном </span>}
        </button>
    )
}
