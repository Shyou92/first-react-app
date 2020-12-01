import React from "react";
import { useEffect } from "react";
import api from "../utils/api";

function Main({ onEditAvatar, onEditProfile, onAddPlace }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  // try on API
  useEffect(() => {
    api
      .getUserInfo()
      .then((response) => {
        setUserName(response.name);
        setUserDescription(response.about);
        setUserAvatar(response.avatar);
      })
      .catch((error) => console.log(error));
  });

  return (
    <main className="content">
      <section className="profile">
        <img
          src={userAvatar}
          className="profile__image"
          name="avatar"
          alt="Аватарка"
        />
        <button className="profile__edit" onClick={onEditAvatar}></button>

        <div className="profile__info">
          <h2 className="profile__info-name">{userName}</h2>
          <button
            className="profile__info-edit"
            onClick={onEditProfile}
          ></button>
          <p className="profile__info-job">{userDescription}</p>
        </div>
        <button className="profile__add-button" onClick={onAddPlace}></button>
      </section>

      <section className="elements"></section>
    </main>
  );
}

export default Main;
