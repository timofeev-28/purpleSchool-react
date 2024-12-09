import "./App.css";
import data from "./assets/data.jsx";
import Header from "./components/header/header";
import Paragraph from "./components/paragraph/paragraph";
import Button from "./components/button/button.jsx";

function App() {
  return (
    <div className="container">
      <Header title={data.mainPage.title} />

      {/* Для примера пока передан font-size: 20px, но будет 16 по-умолчанию */}
      <Paragraph text={data.mainPage.text} className="fz20" />
      <Button text={data.mainPage.button} />
    </div>
  );
}

export default App;
