import React from "react";
import { useEffect } from "react";
import api from "../utils/api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/currentUserContext";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [cards, setCards] = React.useState([]);

  const currentUser = React.useContext(CurrentUserContext);

  useEffect(() => {
    api
      .getCards()
      .then((data) => {
        data.forEach((item) => {
          return {
            id: item._id,
            src: item.link,
            title: item.name,
            likes: item.likes,
            alt: item.name,
          };
        });
        setCards(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <img
          src={currentUser.avatar}
          className="profile__image"
          name="avatar"
          alt="Аватарка"
        />
        <button className="profile__edit" onClick={onEditAvatar}></button>

        <div className="profile__info">
          <h2 className="profile__info-name">{currentUser.name}</h2>
          <button
            className="profile__info-edit"
            onClick={onEditProfile}
          ></button>
          <p className="profile__info-job">{currentUser.about}</p>
        </div>
        <button className="profile__add-button" onClick={onAddPlace}></button>
      </section>

      <section className="elements">
        {cards.map((item) => {
          return <Card key={item._id} card={item} onCardClick={onCardClick} />;
        })}
      </section>
    </main>
  );
}

export default Main;
