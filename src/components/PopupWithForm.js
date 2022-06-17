function PopupWithForm(props) {
  const popupOpen = props.isOpen ? "popup_opened" : "";
  const buttonText = props.buttonText ? props.buttonText : "Сохранить";

  return (
    <div className={`popup popup_${props.name} ${popupOpen}`}>
      <div className="popup__container">
        <button
          className="popup__button-close"
          type="button"
          aria-label="закрыть форму добавления"
          onClick={props.onClose}
        />
        <h3 className="popup__form-title">{props.title}</h3>
        <form className="popup__form" name={`${props.name}Form`} noValidate>
          {props.children}
          <button className="popup__submit" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
