import Header from "./Header.js";
import Main from "./Main.js";
import PopUpWithForm from "./PopUpWithForm";
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
    <span className="popup__error" id="name-input-error"></span>
    <input
      type="text"
      name="about"
      id="popup_input_job"
      placeholder="О Себе"
      required
      className="popup__input popup__input_form_job"
    />
    <span className="popup__error" id="job-input-error"></span>
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
    <span className="popup__error" id="card-input-error"></span>
    <input
      type="url"
      required
      name="link"
      placeholder="Ссылка на картинку"
      className="popup__input popup__input_card_link"
    />
    <span className="popup__error" id="link-input-error"></span>
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
    <span className="popup__error" id="avatar-input-error"></span>
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
      <PopUpWithForm
        name="profile-edit"
        title="Редактировать профиль"
        children={editProfileChildren}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />
      <PopUpWithForm
        name="create-card"
        title="Новое место"
        children={editAddPlaceChildren}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      />
      <PopUpWithForm
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
