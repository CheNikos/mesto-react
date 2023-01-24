export default function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <div className="element__template">
      <div className="element">
        {props.isOwn && (
          <button
            aria-label="Удалить"
            onClick={handleDeleteClick}
            className="element__trash"
            type="button"
          />
        )}
        <img
          className="element__image"
          onClick={handleClick}
          src={props.card.link}
          alt={props.card.name}
        />
        <div className="element__text">
          <h2 className="element__title">{props.card.name}</h2>
          <div className="element__likes">
            <button
              className={props.likes}
              type="submit"
              onClick={handleLikeClick}
            />
            <span className="element__numbers">{props.card.likes.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
