import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

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

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main
          onEditAvatar={onEditAvatar}
          onEditProfile={onEditProfile}
          onAddPlace={onAddPlace}
          onCardClick={handleCardClick}
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
        <PopupWithForm
          title="Редактировать профиль"
          name="editProfile"
          modifier="content_text"
          isOpened={isEditProfilePopupOpen}
          buttonTextContent="Сохранить"
          children={
            <>
              <section className="popup__form-section">
                <input
                  type="text"
                  required
                  className="popup__input popup__input_name"
                  id="edit-name-popup"
                  minLength="2"
                  maxLength="40"
                  name="name"
                  placeholder="Имя"
                />
                <span
                  className="popup__input_error"
                  id="edit-name-popup-error"
                ></span>
              </section>
              <section className="popup__form-section">
                <input
                  type="text"
                  required
                  className="popup__input popup__input_job"
                  id="edit-job-popup"
                  minLength="2"
                  maxLength="200"
                  name="about"
                  placeholder="Профессия"
                />
                <span
                  className="popup__input_error"
                  id="edit-job-popup-error"
                ></span>
              </section>
            </>
          }
          onClose={closeAllPopups}
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
          card={selectedCard || ""}
          name="image"
          isOpened={selectedCard && "popup_is-opened"}
          onCardClick={handleCardClick}
          onClose={closeAllPopups}
        />
      </div>
    </div>
  );
}

export default App;
