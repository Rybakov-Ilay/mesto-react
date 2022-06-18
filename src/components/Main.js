import React, { useState, useEffect } from "react";
import avatar from "../images/avatar-kusto.png";
import api from "../utils/Api";
import Card from "../components/Card.js";

function Main(props) {
  const [userName, setUserName] = useState("Кусто");
  const [userDescription, setUserDescription] = useState("Исследователь");
  const [userAvatar, setUserAvatar] = useState(avatar);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUser()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
            src={userAvatar}
            alt="Портрет автора"
          />
          <div className="profile__avatar-edit" onClick={props.onEditAvatar} />
        </div>
        <div className="profile__info">
          <div className="profile__title-container">
            <h1 className="profile__title">{userName}</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="редактировать профиль"
              onClick={props.onEditProfile}
            />
          </div>
          <p className="profile__subtitle">{userDescription}</p>
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
            <Card key={card._id} card={card} handleClick={props.onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
