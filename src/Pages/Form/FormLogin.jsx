/* eslint-disable react/jsx-no-undef */
import Button from "../../Components/Atomos/Button/Button";
import logo from "./../../assets/form.png";



const FormLogin = () => {
  return (
    <form className="login-form">
      <h1 className="login-title">Iniciar Sesión</h1>
      <div className="login-form-group">
        <img src={logo} alt="logo" />
      </div>
      <div className="login-form-group">
        <input id="username" type="text" className="login-form-control" placeholder=" " />
        <label htmlFor="username">Usuario</label>
      </div>
      <div className="login-form-group">
        <input
          id="password"
          type="password"
          className="login-form-control"
          placeholder=" "
        />
        <label htmlFor="password">Contraseña</label>
      </div>
       <Button name="Entrar login-btn"></Button>
    </form>
  );
};

export default FormLogin;
