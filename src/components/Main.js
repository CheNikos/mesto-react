import { useEffect, useState } from "react";
import api from "../utils/api.js";
import Card from "./Card.js";

export default function Main(props) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
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
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__image">
          <img
            src={userAvatar}
            className="profile__avatar"
            alt="Аватар"
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
      </section>
    </main>
  );
}
