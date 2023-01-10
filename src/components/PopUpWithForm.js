export default function PopupWithForm(props) {
  return (
    <>
      <section
        className={`${
          props.isOpen ? `popup popup_type_${props.name} popup_opened` : `popup`
        }`}
      >
        <div className="popup__overlay"></div>
        <div className="popup__container">
          <div className="popup__content">
            <h2 className="popup__title">{props.title}</h2>
            <form name="profile-form" className="popup__form" noValidate="">
              <input
                type="text"
                name="name"
                id="popup_input_profile"
                placeholder="Имя"
                required
                className="popup__input popup__input_form_name"
              />
              <span className="popup__error" id="name-input-error"></span>
              <input
                type="text"
                name="about"
                id="popup_input_job"
                placeholder="О Себе"
                required
                className="popup__input popup__input_form_job"
              />
              <span className="popup__error" id="job-input-error"></span>
              <button
                aria-label="Сохранить"
                className="popup__button"
                type="submit"
              >
                Сохранить
              </button>
            </form>
          </div>
          <button
            aria-label="Закрыть"
            className="popup__close"
            type="button"
            onClick={props.onClose}
          ></button>
        </div>
      </section>
    </>
  );
}
