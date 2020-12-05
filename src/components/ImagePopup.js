function ImagePopup(card) {
  console.log(card);
  return (
    <div className={`popup popup_type_${card.name} ${card.isOpened}`}>
      <div className="popup__container popup__container_content_image">
        <img
          src={card.card.src}
          alt={card.card.title}
          className="popup__image"
        />
        <h3
          className="popup__title popup__title_content-heading"
          id="js__title"
        >
          {card.card.title}
        </h3>
        <button
          className="popup__close"
          type="button"
          onClick={card.onClose}
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
