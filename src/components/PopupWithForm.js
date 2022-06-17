function PopupWithForm(props) {
    return (
        <div className={`popup popup_${props.name} ${props.isOpen ? "popup_opened" : ""}`}>
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
                    <button className="popup__submit" type="submit">{props.buttonText ? props.buttonText : "Сохранить"}</button>
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;