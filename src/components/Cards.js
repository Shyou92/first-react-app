function Cards({ src, alt, title, likes }) {
  return (
    <div className="element">
      <img src={src} alt={alt} className="element__photo" />
      <button className="element__delete"></button>
      <div className="element__container">
        <h2 className="element__heading">{title}</h2>
        <div className="element__like-container">
          <button className="element__like" type="button"></button>
          <span className="element__like-counter">{likes.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Cards;
