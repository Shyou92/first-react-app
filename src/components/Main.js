function Main({ onEditAvatar, onEditProfile, onAddPlace }) {
  return (
    <main className="content">
      <section className="profile">
        <img src="#" className="profile__image" name="avatar" alt="Аватарка" />
        <button className="profile__edit" onClick={onEditAvatar}></button>

        <div className="profile__info">
          <h2 className="profile__info-name">Жак-Ив Кусто</h2>
          <button
            className="profile__info-edit"
            onClick={onEditProfile}
          ></button>
          <p className="profile__info-job">Исследователь океана</p>
        </div>
        <button className="profile__add-button" onClick={onAddPlace}></button>
      </section>

      <section className="elements"></section>
    </main>
  );
}

export default Main;
