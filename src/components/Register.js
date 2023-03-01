export default function Register() {
    return (
      <div className="register">
        <h2 className="register__title">Регистрация</h2>
        <form className="register__form">
        <input className="register__input register__input_form_email" />
        <input className="register__input register__input_form_password" />
        <button className="register__button">Зарегистрироваться</button>
        </form>
        <p className="register__question">Уже зарегистрированы? Войти</p>
      </div>
    );
  }