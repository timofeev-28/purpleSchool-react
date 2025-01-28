import "./App.css";
import Header from "./components/header/header";
import MainContent from "./components/mainContent/mainContent";
import { UserContextProvider } from "./context/user.context";

function App() {
  return (
    <UserContextProvider>
      <Header />
      <MainContent />
    </UserContextProvider>
  );
}

export default App;
