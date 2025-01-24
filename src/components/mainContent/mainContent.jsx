import styles from "./mainContent.module.css";
// import data from "../../assets/data.jsx";
// import Title from "./title/title.jsx";
// import Paragraph from "./paragraph/paragraph.jsx";
// import SearchForm from "./searchForm/searchForm.jsx";
// import ListFilms from "./listFilms/listFilms.jsx";
// import Entrance from "./entrance/entrance.jsx";

export default function MainContent({ children }) {
  return (
    <main className={styles["main"]}>
      <div className="container">
        {children}

        {/* <Title title={data.mainPage.title} /> */}

        {/* Для примера пока передан font-size: 20px, но будет 16 по-умолчанию */}
        {/* <Paragraph text={data.mainPage.text} className="fz20" /> */}
        {/* <SearchForm /> */}
        {/* <ListFilms /> */}
        {/* <Entrance /> */}
      </div>
    </main>
  );
}
