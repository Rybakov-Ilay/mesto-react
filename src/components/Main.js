import React, { useState, useEffect, useContext } from "react";
import api from "../utils/Api";
import Card from "./сard.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }


  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-wrapper">
          <img
            className="profile__avatar"
            src={currentUser.avatar}
            alt="Портрет автора"
          />
          <div className="profile__avatar-edit" onClick={props.onEditAvatar} />
        </div>
        <div className="profile__info">
          <div className="profile__title-container">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="редактировать профиль"
              onClick={props.onEditProfile}
            />
          </div>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <div className="profile__form-add">
          <button
            className="profile__add-button"
            type="button"
            aria-label="добавить фотографию"
            onClick={props.onAddPlace}
          />
        </div>
      </section>

      <section className="cards" aria-label="Фотографии автора с подписями">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card key={card._id}
                  card={card}
                  handleClick={props.onCardClick}
                  onCardLike={handleCardLike}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
