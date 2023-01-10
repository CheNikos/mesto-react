import Header from "./Header.js";
import Main from "./Main.js";
import PopUpWithForm from "./PopUpWithForm";
import Footer from "./Footer.js";
import { useState } from "react";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleChangeAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  return (
    <div>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleChangeAvatarClick}
      />
      <PopUpWithForm
        name="profile-edit"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />
      <PopUpWithForm
        name="create-card"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      />
      <PopUpWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />
      <Footer />
    </div>
  );
}

export default App;
