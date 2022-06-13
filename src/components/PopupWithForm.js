function PopupWithForm(props) {
    return (
        <div className={`popup popup_${props.name}`}>
            <div className="popup__container">
                <button
                    className="popup__button-close"
                    type="button"
                    aria-label="закрыть форму добавления"
                />
                <h3 className="popup__form-title">{props.title}</h3>
                <form className="popup__form" name={`${props.name}Form`} noValidate>
                    {/*<button className="popup__submit" type="submit">Да</button>*/}
                    {props.children}
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;