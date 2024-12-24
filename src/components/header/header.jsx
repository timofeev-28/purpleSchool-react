import "./header.css";
import Logo from "./logo/logo";
import Nav from "./nav/nav";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container container">
        <Logo />
        <Nav />
      </div>
    </header>
  );
}
