import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <div className="page">
        <Header/>
        <Main/>
        <Footer/>
      </div>

      <div className="popup popup_edit">
        <div className="popup__container">
          <button
              className="popup__button-close"
              type="button"
              aria-label="закрыть форму редактировать профиль"
          ></button>
          <h3 className="popup__form-title">Редактировать профиль</h3>

          <form className="popup__form" name="profileEditingForm" noValidate>
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
          </form>
        </div>
      </div>

      <div className="popup popup_add">
        <div className="popup__container">
          <button
              className="popup__button-close"
              type="button"
              aria-label="закрыть форму добавления"
          ></button>
          <h3 className="popup__form-title">Новое место</h3>

          <form className="popup__form" name="addCardForm" noValidate>
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
          </form>
        </div>
      </div>

      <div className="popup popup_view-image">
        <div className="popup__wrapper">
          <button
              className="popup__button-close"
              type="button"
              aria-label="закрыть форму добавления"
          ></button>
          <img className="popup__image" src="#" alt="#"/>
          <p className="popup__image-caption">подпись</p>
        </div>
      </div>

      <div className="popup popup_delete">
        <div className="popup__container">
          <button
              className="popup__button-close"
              type="button"
              aria-label="закрыть форму добавления"
          ></button>
          <h3 className="popup__form-title">Вы уверены?</h3>
          <form className="popup__form" name="deleteCardForm" noValidate>
            <button className="popup__submit" type="submit">Да</button>
          </form>
        </div>
      </div>

      <div className="popup popup_avatar">
        <div className="popup__container">
          <button
              className="popup__button-close"
              type="button"
              aria-label="закрыть форму добавления"
          ></button>
          <h3 className="popup__form-title">Обновить аватар</h3>
          <form className="popup__form" name="avatarEditForm" noValidate>
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
          </form>
        </div>
      </div>

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
