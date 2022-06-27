import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
    >
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
        <span className="userName-input-error popup__input-error" />
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
        <span className="userJob-input-error popup__input-error" />
      </div>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
