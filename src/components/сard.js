import { CurrentUserContext } from "../contexts/CurrentUserContext";
import React, { useContext } from "react";

function Card({ card, handleClick, }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `card__trash ${
    isOwn ? "" : "card__trash_hidden"
  }`;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `card__button-like ${
    isLiked ? "card__button-like_active" : ""
  }`;

  function handleCardClick() {
    handleClick(card);
  }
  return (
    <li className="card">
      <article className="card__article">
        <button
          className={cardDeleteButtonClassName}
          aria-label="корзина"
          type="button"
        />
        <img
          className="card__image"
          alt={card.name}
          src={card.link}
          onClick={handleCardClick}
        />
        <div className="card__caption">
          <h2 className="card__caption-title">{card.name}</h2>
          <div className="card__like-wrapper">
            <button
              className={cardLikeButtonClassName}
              aria-label="лайк"
              type="button"
            />
            <p className="card__like-count">{card.likes.length}</p>
          </div>
        </div>
      </article>
    </li>
  );
}

export default Card;
