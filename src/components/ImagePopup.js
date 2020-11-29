function ImagePopup() {
  return (
    <div className="popup " id="js-image">
      <div className="popup__container popup__container_content_image">
        <img src="#" alt="" className="popup__image" />
        <h3
          className="popup__title popup__title_content-heading"
          id="js__title"
        >
          {}
        </h3>
        <button className="popup__close" type="button"></button>
      </div>
    </div>
  );
}

export default ImagePopup;
