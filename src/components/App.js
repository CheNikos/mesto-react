import Header from "./Header.js";
import Main from "./Main.js";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup.js";
import Footer from "./Footer.js";
import { useState, useEffect } from "react";
import api from "../utils/api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import { ArrayCardsContext } from "../contexts/ArrayCardsContext.js";
import EditProfilePopup from "./EditProfilePopup.js";

// const editProfileChildren = (
//   <>
//     <input
//       type="text"
//       name="name"
//       id="popup_input_profile"
//       placeholder="Имя"
//       required
//       className="popup__input popup__input_form_name"
//     />
//     <input
//       type="text"
//       name="about"
//       id="popup_input_job"
//       placeholder="О Себе"
//       required
//       className="popup__input popup__input_form_job"
//     />
//   </>
// );

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
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, initialCards]) => {
        setCurrentUser(userData);
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }, [setCurrentUser, setCards]);

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

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards((state) => state.filter((item) => item._id !== card._id));
    });
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }

  function handleUpdateUser({ name, about }) {
    api.updateUserInfo({ name, about }).then((newUserInfo) => {
      setCurrentUser(newUserInfo);
      closeAllPopups();
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <ArrayCardsContext.Provider value={cards}>
        <div>
          <Header />
          <Main
            cards={cards}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleChangeAvatarClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
            name={currentUser.name}
            description={currentUser.about}
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
      </ArrayCardsContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
