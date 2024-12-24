import "./link.css";

export default function Link({ link, text, className, countFavorites }) {
  const cl = "nav__link" + " " + (className ? className : "");

  return (
    <li className="nav__item">
      <a className={cl} href={link}>
        {text}
        {countFavorites && <span className="nav__count">{countFavorites}</span>}
      </a>
    </li>
  );
}
