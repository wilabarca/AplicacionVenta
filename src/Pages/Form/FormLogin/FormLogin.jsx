import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../Components/Atomos/Button/Button";
import logo from "../../../assets/Lgin.png";
import '../FormLogin/FormLogin.css';
import { Link } from "react-router-dom";
import { login } from "../../../Server/login";
const FormLogin = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  // const handlerLogin = () => {
  //   login();

  // }

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <form className="login-form">
      <h1 className="login-title">Iniciar Sesión</h1>
      <div className="login-form-group">
        <img src={logo} alt="logo" />
      </div>
      <div className="login-form-group">
        <div className="input-container">
          <FontAwesomeIcon icon={faUser} className="input-icon" />
          <input id="username" type="text" className="login-form-control" placeholder="Usuario" />
        </div>
      </div>
      <div className="login-form-group">
        <div className="input-container">
          <input
            id="password"
            type={passwordVisible ? "text" : "password"}
            className="login-form-control"
            placeholder="Contraseña"
          />
          <FontAwesomeIcon
            icon={passwordVisible ? faEyeSlash : faEye}
            className="toggle-password-icon"
            onClick={togglePasswordVisibility}
          />
        </div>
      </div>
      <Link to="/">
        <Button name="Entrar" className="login-btn" onClick={login()}></Button>
      </Link>        
      <div className="regis-container">
        <p className="regis">No tiene Cuenta</p>
        <Link to="/Registro">Registrarse</Link>
      </div>
    </form>
  );
};

export default FormLogin;
