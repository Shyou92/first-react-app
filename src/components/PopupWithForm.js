function PopupWithForm({
  title,
  name,
  modificator,
  isOpened,
  buttonTextContent,
  children,
  onClose,
}) {
  return (
    <div
      className={`popup popup_type_${name} ${
        isOpened ? "popup_is-opened" : ""
      } `}
      id="js-edit"
    >
      <div className={`popup__container popup__container_${modificator}`}>
        <button
          className="popup__close"
          type="button"
          onClick={onClose}
        ></button>
        <h3 className="popup__title">{title}</h3>
        <form className="popup__form" name={name} noValidate>
          {children}
          <button className="popup__submit" type="submit">
            {buttonTextContent}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
