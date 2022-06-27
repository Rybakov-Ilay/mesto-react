import PopupWithForm from "./PopupWithForm";
import React, {useContext, useState, useEffect} from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

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
          value={name}
          onChange={handleNameChange}
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
          value={description}
          onChange={handleDescriptionChange}
        />
        <span className="userJob-input-error popup__input-error" />
      </div>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
