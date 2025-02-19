import styles from "./mainContent.module.css";
import Title from "./title/title.js";
import Paragraph from "./paragraph/paragraph.js";
import SearchForm from "./searchForm/searchForm.js";
import ListFilms from "./listFilms/listFilms.js";
import Entrance from "./entrance/entrance.js";

export default function MainContent() {
  return (
    <main className={styles.main}>
      <div className='container'>
        <Title title='Поиск' />
        <Paragraph
          text='Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
          appearance='fz20'
        />
        <SearchForm />
        <ListFilms />
        <Entrance />
      </div>
    </main>
  );
}
