import React from "react";
import { useEffect } from "react";
import api from "../utils/api";
import Card from "./Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);
  // try on API
  useEffect(() => {
    api
      .getUserInfo()
      .then((response) => {
        console.log(response);
        setUserName(response.name);
        setUserDescription(response.about);
        setUserAvatar(response.avatar);
      })
      .catch((error) => console.log(error));

    api
      .getCards()
      .then((data) => {
        console.log(data);
        const cards = data.map((item) => {
          return {
            id: item._id,
            src: item.link,
            title: item.name,
            likes: item.likes,
            alt: item.name,
          };
        });
        setCards(cards);
      })
      .catch((error) => console.log(error));
  }, []);

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

      <section className="elements">
        {cards.map((item) => {
          return <Card key={item.id} card={item} onCardClick={onCardClick} />;
        })}
      </section>
    </main>
  );
}

export default Main;
