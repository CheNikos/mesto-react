import Header from "./Header.js";
import Main from "./Main.js";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup.js";
import Footer from "./Footer.js";
import { useState } from "react";

const editProfileChildren = (
  <>
    <input
      type="text"
      name="name"
      id="popup_input_profile"
      placeholder="Имя"
      required
      className="popup__input popup__input_form_name"
    />
    <input
      type="text"
      name="about"
      id="popup_input_job"
      placeholder="О Себе"
      required
      className="popup__input popup__input_form_job"
    />
  </>
);

const editAddPlaceChildren = (
  <>
    <input
      type="text"
      required
      name="name"
      placeholder="Название"
      className="popup__input popup__input_card_name"
    />
    <input
      type="url"
      required
      name="link"
      placeholder="Ссылка на картинку"
      className="popup__input popup__input_card_link"
    />
  </>
);

const editAvatarChildren = (
  <>
    <input
      type="url"
      required
      name="avatar"
      placeholder="Ссылка на картинку"
      className="popup__input popup__input_card_avatar"
    />
  </>
);

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);
  const [linkImg, setLinkImg] = useState([]);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleChangeAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(props) {
    setSelectedCard(true);
    setLinkImg(props);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <div>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleChangeAvatarClick}
        onCardClick={handleCardClick}
      />
      <PopupWithForm
        name="profile-edit"
        title="Редактировать профиль"
        children={editProfileChildren}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        name="create-card"
        title="Новое место"
        children={editAddPlaceChildren}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={editAvatarChildren}
      />
      <ImagePopup
        card={selectedCard}
        linkCard={linkImg}
        onClose={closeAllPopups}
      />
      <Footer />
    </div>
  );
}

export default App;
