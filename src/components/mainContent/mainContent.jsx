import "./mainContent.css";
import data from "../../assets/data.jsx";
import Title from "./title/title.jsx";
import Paragraph from "./paragraph/paragraph.jsx";
import Form from "./form/form.jsx";
import ListFilms from "./listFilms/listFilms.jsx";

export default function MainContent() {
  return (
    <main className="main">
      <div className="container">
        <Title title={data.mainPage.title} />

        {/* Для примера пока передан font-size: 20px, но будет 16 по-умолчанию */}
        <Paragraph text={data.mainPage.text} className="fz20" />
        <Form />
        <ListFilms />
      </div>
    </main>
  );
}
