import "./logo.css";

export default function Logo() {
  return (
    <a className="header__logo" href="./">
      <img
        className="header__logo-image"
        src="/icons/logo.svg"
        width={49}
        height={40}
        alt="Логотип сайта"
      />
    </a>
  );
}
