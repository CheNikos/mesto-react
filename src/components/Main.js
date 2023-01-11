import React from "react";
import api from "../utils/api.js";
import Card from "./Card.js";

export default function Main(props) {
  const [userName, setUserName] = React.useState([]);
  const [userDescription, setUserDescription] = React.useState([]);
  const [userAvatar, setUserAvatar] = React.useState([]);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([data, initialCards]) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }, [setUserName, setUserDescription, setUserAvatar, setCards]);

  return (
    <main>
      <section className="profile">
        <div className="profile__image">
          <img
            src={userAvatar}
            className="profile__avatar"
            alt="Фото профиля"
            name="avatar"
            onClick={props.onEditAvatar}
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button
            aria-label="Редактировать"
            className="profile__edit-button"
            type="button"
            onClick={props.onEditProfile}
          ></button>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button
          aria-label="Добавить"
          className="profile__add-button"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section aria-label="Элементы" className="elements">
        {cards.map((object) => {
          return (
            <Card
              key={object}
              card={object}
              nameCard={object.name}
              linkCard={object.link}
              likesCard={object.likes}
              onCardClick={props.onCardClick}
            />
          );
        })}
      </section>
    </main>
  );
}
