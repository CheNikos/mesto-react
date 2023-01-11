export default function ImagePopup(props) {
  return (
    <section className={`${props.card ? `popup popup_opened` : `popup`}`}>
      <div className="popup__container popup__container_zoom">
      <button
          className="popup__close popup__close_zoom"
          type="button"
          onClick={props.onClose}
        />
        <img
          className="popup__zoom-image"
          src={`${props.linkCard.link}`}
          alt={props.linkCard.name}
        />
        <h2 className="popup__name-zoom">{props.linkCard.name}</h2>
      </div>
    </section>
  );
}