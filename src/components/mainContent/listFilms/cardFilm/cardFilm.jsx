import "./cardFilm.css";
import data from "../../../../assets/data";

export default function CardFilm() {
  return (
    <>
      {data &&
        data.mainPage?.cardsFilms?.map((card) => (
          <div className="card" key={card.id}>
            <span className="card__rating ">{card.rating}</span>
            <a className="card__img-link" href="./">
              <img className="card__image" src={card.image} alt={card.title} />
            </a>
            <h2 className="card__title">{card.title}</h2>
            <button className="card__btn">В избранное</button>
          </div>
        ))}
    </>
  );
}
