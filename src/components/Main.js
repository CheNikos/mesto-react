import { useContext } from "react";
// import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

export default function Main(props) {
  const currentUser = useContext(CurrentUserContext)

  return (
    <main>
      <section className="profile">
        <div className="profile__image">
          <img
            src={currentUser.avatar}
            className="profile__avatar"
            alt="Аватар"
            name="avatar"
            onClick={props.onEditAvatar}
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button
            aria-label="Редактировать"
            className="profile__edit-button"
            type="button"
            onClick={props.onEditProfile}
          ></button>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button
          aria-label="Добавить"
          className="profile__add-button"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>

      {/* <section aria-label="Элементы" className="elements">
        {cards.map((card) => {
          return (
            <Card
              key={card._id}
              card={card}
              nameCard={card.name}
              linkCard={card.link}
              likesCard={card.likes}
              onCardClick={props.onCardClick}
            />
          );
        })}
      </section> */}
    </main>
  );
}
