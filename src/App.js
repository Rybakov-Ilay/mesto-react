import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import PopupWithForm from "./components/PopupWithForm";
import ImagePopup from "./components/ImagePopup";
import React from "react";


function App() {
    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true)
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
    }

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);


  return (
    <div className="App">
      <div className="page">
        <Header/>
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}/>
        <Footer/>
      </div>

      <PopupWithForm name="edit" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
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
          <span className="userName-input-error popup__input-error"/>
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
          <span className="userJob-input-error popup__input-error"/>
        </div>
      </PopupWithForm>

      <PopupWithForm name="add" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
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

          <span className="placeName-input-error popup__input-error"/>
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

          <span className="placeLink-input-error popup__input-error"/>
        </div>
      </PopupWithForm>

      <PopupWithForm name="delete" title="Вы уверены?" buttonText="Да" onClose={closeAllPopups}/>

      <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <div className="popup__input-wrapper">
              <input
                  className="popup__input popup__input_type_place-link"
                  type="url"
                  name="avatarLink"
                  placeholder="ссылка на картинку"
                  required
                  id="avatarLink-input"
              />
              <span className="avatarLink-input-error popup__input-error"/>
          </div>
      </PopupWithForm>

      <ImagePopup/>

      <template className="cards cards_template">
        <li className="card">
          <article className="card__article">
            <button
                className="card__trash"
                aria-label="корзина"
                type="button"
            ></button>
            <img className="card__image" alt="#" src="#"/>
            <div className="card__caption">
              <h2 className="card__caption-title"></h2>
              <div className="card__like-wrapper">
                <button
                    className="card__button-like"
                    aria-label="лайк"
                    type="button"
                ></button>
                <p className="card__like-count">1</p>
              </div>
            </div>
          </article>
        </li>
      </template>

    </div>
  );
}

export default App;
