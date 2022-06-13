import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import PopupWithForm from "./components/PopupWithForm";
import ImagePopup from "./components/ImagePopup";


function App() {
    function handleEditAvatarClick() {
        document.querySelector('.popup_avatar').classList.add('popup_opened');
    }

    function handleEditProfileClick() {
        document.querySelector('.popup_edit').classList.add('popup_opened');
    }

    function handleAddPlaceClick() {
        document.querySelector('.popup_add').classList.add('popup_opened');
    }
  return (
    <div className="App">
      <div className="page">
        <Header/>
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}/>
        <Footer/>
      </div>

      <PopupWithForm name="edit" title="Редактировать профиль">
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

          <span className="userName-input-error popup__input-error"></span>
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

          <span className="userJob-input-error popup__input-error"></span>
        </div>
        <button className="popup__submit" type="submit" name="popupSubmit">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm name="add" title="Новое место">
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

          <span className="placeName-input-error popup__input-error"></span>
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

          <span className="placeLink-input-error popup__input-error"></span>
        </div>
        <button className="popup__submit" type="submit" name="popupSubmit">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm name="delete" title="Вы уверены?">
        <button className="popup__submit" type="submit">Да</button>
      </PopupWithForm>

      <PopupWithForm name="avatar" title="Обновить аватар">
          <div className="popup__input-wrapper">
              <input
                  className="popup__input popup__input_type_place-link"
                  type="url"
                  name="avatarLink"
                  placeholder="ссылка на картинку"
                  required
                  id="avatarLink-input"
              />
              <span className="avatarLink-input-error popup__input-error"></span>
          </div>
          <button className="popup__submit" type="submit" name="popupSubmit">Сохранить</button>
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
