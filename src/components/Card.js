function Card(item) {
  function handleClick() {
    item.onCardClick(item.card);
  }

  return (
    <div className="element">
      <img
        src={item.card.src}
        alt={item.card.alt}
        className="element__photo"
        onClick={handleClick}
      />
      <button className="element__delete"></button>
      <div className="element__container">
        <h2 className="element__heading">{item.card.title}</h2>
        <div className="element__like-container">
          <button className="element__like" type="button"></button>
          <span className="element__like-counter">
            {item.card.likes.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
