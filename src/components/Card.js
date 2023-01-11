export default function card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="element__template">
      <div className="element">
        <button
          aria-label="Удалить"
          className="element__trash"
          type="button"
        ></button>
        <img
          className="element__image"
          onClick={handleClick}
          src={`${props.linkCard}`}
          alt={props.nameCard}
        />
        <div className="element__text">
          <h2 className="element__title">{props.nameCard}</h2>
          <div className="element__likes">
            <button className="element__like" type="submit"></button>
            <span className="element__numbers">{props.likesCard.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
