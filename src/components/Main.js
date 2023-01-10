import avatar from "../images/profile/image.jpg";

export default function Main(props) {
  return (
    <main>
      <section className="profile">
        <div className="profile__image">
          <img
            src={avatar}
            className="profile__avatar"
            alt="Фото профиля"
            name="avatar"
            onClick={props.onEditAvatar}
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">Жак-Ив Кусто</h1>
          <button
            aria-label="Редактировать"
            className="profile__edit-button"
            type="button"
            onClick={props.onEditProfile}
          ></button>
          <p className="profile__subtitle">Исследователь океана</p>
        </div>
        <button
          aria-label="Добавить"
          className="profile__add-button"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section aria-label="Элементы" className="elements"></section>
    </main>
  );
}
