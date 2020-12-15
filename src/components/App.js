import React, { useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/currentUserContext";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState("");
  const [cards, setCards] = React.useState([]);

  const onEditAvatar = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const onEditProfile = () => {
    setIsEditProfilePopupOpen(true);
  };

  const onAddPlace = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  };

  const handleCurrentUser = (data) => {
    setCurrentUser(data);
  };

  const handleLikeCard = (card) => {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api.setLike(card._id, isLiked).then((newCard) => {
      const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
      setCards(newCards);
    });
  };

  const handleCardDelete = (card) => {
    api.deleteCard(card._id).then((deletedCard) => {
      const renewedCards = cards.filter((c) =>
        c._id === card._id ? deletedCard : c
      );
      setCards(renewedCards);
    });
  };

  const handleUpdateUser = (data) => {
    api
      .setUserInfo(data)
      .then((newUserInfo) => {
        setCurrentUser(newUserInfo);
      })
      .finally(() => setIsEditProfilePopupOpen(false));
  };

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([res, data]) => {
        handleCurrentUser(res);
        setCards(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <Header />
          <Main
            onEditAvatar={onEditAvatar}
            onEditProfile={onEditProfile}
            onAddPlace={onAddPlace}
            onCardClick={handleCardClick}
            сards={cards}
            onCardLike={handleLikeCard}
            onCardDelete={handleCardDelete}
          />
          <Footer />
          <PopupWithForm
            title="Обновить аватар"
            name="editAvatar"
            modifier="content_text popup__container_update"
            isOpened={isEditAvatarPopupOpen}
            buttonTextContent="Сохранить"
            children={
              <section className="popup__form-section">
                <input
                  type="url"
                  required
                  className="popup__input popup__input-update"
                  id="edit-ava-popup"
                  name="update"
                  placeholder="Обновимся?"
                />
                <span
                  className="popup__input_error"
                  id="edit-ava-popup-error"
                ></span>
              </section>
            }
            onClose={closeAllPopups}
          />
          <EditProfilePopup
            isOpened={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <PopupWithForm
            title="Новое место"
            name="addNewPlace"
            modifier="content_text"
            isOpened={isAddPlacePopupOpen}
            buttonTextContent="Добавить"
            children={
              <>
                <section className="popup__form-section">
                  <input
                    type="text"
                    required
                    className="popup__input popup__input_title"
                    id="create-title-popup"
                    minLength="2"
                    maxLength="30"
                    name="name"
                    placeholder="Название"
                  />
                  <span
                    className="popup__input_error"
                    id="create-title-popup-error"
                  ></span>
                </section>
                <section className="popup__form-section">
                  <input
                    type="url"
                    required
                    className="popup__input popup__input_link"
                    id="create-link-popup"
                    name="link"
                    placeholder="Ссылка на картинку"
                  />
                  <span
                    className="popup__input_error"
                    id="create-link-popup-error"
                  ></span>
                </section>
              </>
            }
            onClose={closeAllPopups}
          />
          <ImagePopup
            card={selectedCard || {}}
            isOpened={selectedCard && "popup_is-opened"}
            onCardClick={handleCardClick}
            onClose={closeAllPopups}
          />
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
