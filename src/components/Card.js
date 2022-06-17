function Card(props) {
  function handleClick() {
    props.handleClick(props.card);
  }
  return (
    <li className="card">
      <article className="card__article">
        <button className="card__trash" aria-label="корзина" type="button" />
        <img
          className="card__image"
          alt="#"
          src={props.card.link}
          onClick={handleClick}
        />
        <div className="card__caption">
          <h2 className="card__caption-title">{props.card.name}</h2>
          <div className="card__like-wrapper">
            <button
              className="card__button-like"
              aria-label="лайк"
              type="button"
            />
            <p className="card__like-count">{props.card.likes.length}</p>
          </div>
        </div>
      </article>
    </li>
  );
}

export default Card;
