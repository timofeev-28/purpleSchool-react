import styles from "./mainContent.module.css";
import Title from "./title/title.jsx";
import Paragraph from "./paragraph/paragraph.jsx";
import SearchForm from "./searchForm/searchForm.jsx";
import ListFilms from "./listFilms/listFilms.jsx";
import Entrance from "./entrance/entrance.jsx";

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
