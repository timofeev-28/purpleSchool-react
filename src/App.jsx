import "./App.css";
import data from "./assets/data.jsx";
import Header from "./components/header/header";
import Paragraph from "./components/paragraph/paragraph";
import Button from "./components/button/button.jsx";

function App() {
  return (
    <div className="container">
      <Header title={data.mainPage.title} />
      <Paragraph text={data.mainPage.text} fz={data.mainPage.fz} />
      <Button text={data.mainPage.button} />
    </div>
  );
}

export default App;
