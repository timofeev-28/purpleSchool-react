import "./nav.css";
import Link from "../link/link";
import data from "../../../assets/data";

export default function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {data &&
          data.header?.map((el) => (
            <Link
              key={el.id}
              link={el.link}
              text={el.text}
              countFavorites={el.countFavorites}
              className={el.class}
            />
          ))}
      </ul>
    </nav>
  );
}
