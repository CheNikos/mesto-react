import { useContext } from "react";
import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

export default function Main(props) {
  const currentUser = useContext(CurrentUserContext);

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
          <h1 className="profile__title" name="name">
            {currentUser.name}
          </h1>
          <button
            aria-label="Редактировать"
            className="profile__edit-button"
            type="button"
            onClick={props.onEditProfile}
          ></button>
          <p className="profile__subtitle" name="about">
            {currentUser.about}
          </p>
        </div>
        <button
          aria-label="Добавить"
          className="profile__add-button"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section aria-label="Элементы" className="elements">
        {props.cards.map((card) => {
          const isOwn = card.owner._id === currentUser._id;
          const isLiked = card.likes.some((i) => i._id === currentUser._id);
          const cardLikeButtonClassName = `element__like ${
            isLiked && "element__like_active"
          }`;

          return (
            <Card
              key={card._id}
              card={card}
              isOwn={isOwn}
              likes={cardLikeButtonClassName}
              onCardClick={props.onCardClick}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
            />
          );
        })}
      </section>
    </main>
  );
}
