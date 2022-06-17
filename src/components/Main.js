import React from "react";
import avatar from '../images/avatar-kusto.png'
import api from "../utils/Api";

function Main(props) {
    const [userName, setUserName] = React.useState("Кусто");
    const [userDescription, setUserDescription] = React.useState("Исследователь");
    const [userAvatar, setUserAvatar] = React.useState(avatar);

    React.useEffect(() => {
        api.getUser()
            .then((data) => {
                setUserName(data.name);
                setUserDescription(data.about);
                setUserAvatar(data.avatar);
            })
            .catch((err) => {
                console.log(err);
            });
    });


    return (
        <main className="content">

            <section className="profile">
                <div className="profile__avatar-wrapper">
                    <img className="profile__avatar" src={userAvatar} alt="Портрет автора"/>
                    <div className="profile__avatar-edit" onClick={props.onEditAvatar}/>
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
                <ul className="cards__list"></ul>
            </section>

        </main>
    )
}

export default Main;