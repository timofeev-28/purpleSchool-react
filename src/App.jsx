import "./App.css";
import Header from "./components/header/header";
import MainContent from "./components/mainContent/mainContent";
import Logo from "./components/header/logo/logo";
import Nav from "./components/header/nav/nav";
import Title from "./components/mainContent/title/title";
import Paragraph from "./components/mainContent/paragraph/paragraph";
import SearchForm from "./components/mainContent/searchForm/searchForm";
import ListFilms from "./components/mainContent/listFilms/listFilms";
import Entrance from "./components/mainContent/entrance/entrance";
import { useLocalStorage } from "./hook/use-localstorage.hook";

function App() {
  const [user, setUser] = useLocalStorage("users");

  const linkClickHandler = (e) => {
    e.preventDefault();
    if (user?.isLogined) {
      setUser({ ...user, isLogined: false });
    }
  };

  const addUserName = (username) => {
    setUser({ name: username.userName, isLogined: true });
  };

  return (
    <>
      <Header>
        <Logo />
        <Nav userName={user?.name} onClick={linkClickHandler} />
      </Header>
      <MainContent>
        <Title title="Поиск" />
        <Paragraph
          text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное."
          appearance="fz20"
        />
        <SearchForm />
        <ListFilms />
        <Entrance onSubmit={addUserName} isLogined={user?.isLogined} />
      </MainContent>
    </>
  );
}

export default App;
