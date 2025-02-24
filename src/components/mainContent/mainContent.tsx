import styles from "./mainContent.module.css";
import Title from "../ui/title/title";
import Paragraph from "../ui/paragraph/paragraph";
import SearchForm from "./searchForm/searchForm";
import ListFilms from "./listFilms/listFilms";

export default function MainContent() {
    return (
        <section className={styles.main__content}>
            <div className='container'>
              <Title text='Поиск' />
              <Paragraph
                text='Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
                appearance='fz20'
              />
              <SearchForm />
              <ListFilms />
            </div>
        </section>
    );
}
