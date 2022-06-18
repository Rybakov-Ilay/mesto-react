import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import React, { useState } from "react";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>

      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <div className="popup__input-wrapper">
          <input
            className="popup__input popup__input_type_name"
            type="text"
            name="userName"
            placeholder="Ваше имя"
            required
            minLength="2"
            maxLength="40"
            id="userName-input"
          />
          <span className="userName-input-error popup__input-error" />
        </div>
        <div className="popup__input-wrapper">
          <input
            className="popup__input popup__input_type_job"
            type="text"
            name="userJob"
            placeholder="Ваше призвание"
            required
            minLength="2"
            maxLength="200"
            id="userJob-input"
          />
          <span className="userJob-input-error popup__input-error" />
        </div>
      </PopupWithForm>

      <PopupWithForm
        name="add"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <div className="popup__input-wrapper">
          <input
            className="popup__input popup__input_type_place-name"
            type="text"
            name="placeName"
            placeholder="название"
            required
            minLength="2"
            maxLength="30"
            id="placeName-input"
          />

          <span className="placeName-input-error popup__input-error" />
        </div>
        <div className="popup__input-wrapper">
          <input
            className="popup__input popup__input_type_place-link"
            type="url"
            name="placeLink"
            placeholder="ссылка на картинку"
            required
            id="placeLink-input"
          />

          <span className="placeLink-input-error popup__input-error" />
        </div>
      </PopupWithForm>

      <PopupWithForm
        name="delete"
        title="Вы уверены?"
        buttonText="Да"
        onClose={closeAllPopups}
      />

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <div className="popup__input-wrapper">
          <input
            className="popup__input popup__input_type_place-link"
            type="url"
            name="avatarLink"
            placeholder="ссылка на картинку"
            required
            id="avatarLink-input"
          />
          <span className="avatarLink-input-error popup__input-error" />
        </div>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
