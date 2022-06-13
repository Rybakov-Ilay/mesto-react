function ImagePopup() {
    return (
        <div className="popup popup_view-image">
            <div className="popup__wrapper">
                <button
                    className="popup__button-close"
                    type="button"
                    aria-label="закрыть форму добавления"
                />
                <img className="popup__image" src="#" alt="#"/>
                <p className="popup__image-caption">подпись</p>
            </div>
        </div>
    )
}

export default ImagePopup;