// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import logo from "../../../assets/form.png";
import "../FormRecord/FormRegistro.css";
import Button from "../../../Components/Atomos/Button/Button";

const FormRegistro = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);

  const validateUser = (value) => {
    const regex = /^[a-zA-Z0-9]{4,}$/; // Solo letras y números, al menos 4 caracteres
    return regex.test(value);
  };

  const validatePassword = (value) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/; // Al menos 6 caracteres, una mayúscula, una minúscula y un número
    return regex.test(value);
  };

  const validatePasswordRepeat = (value) => {
    return value === password;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = [];

    if (!validateUser(user)) {
      formErrors.push("El usuario debe tener al menos 4 caracteres y solo puede contener letras y números.");
    }

    if (!validatePassword(password)) {
      formErrors.push("La contraseña debe tener al menos 6 caracteres, una mayúscula, una minúscula y un número.");
    }

    if (!validatePasswordRepeat(passwordRepeat)) {
      formErrors.push("Las contraseñas no coinciden.");
    }

    if (formErrors.length > 0) {
      alert(formErrors.join("\n"));
    } else {
      // Enviar el formulario
      console.log("Formulario enviado");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="titl-19">Registro</h1>
      <div className="form-group">
        <img src={logo} alt="logo" />
      </div>
      <div className="form-group">
        <input
          id="user"
          type="text"
          className="form-control"
          placeholder=" "
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <label htmlFor="user">Usuario</label>
      </div>
      <div className="form-group">
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          className="form-control"
          placeholder=" "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="password">Contraseña Nueva</label>
        <span
          className="toggle-password"
          onClick={() => setShowPassword(!showPassword)}
        >
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
        </span>
      </div>
      <div className="form-group">
        <input
          id="passwordRepeat"
          type={showPasswordRepeat ? "text" : "password"}
          className="form-control"
          placeholder=" "
          value={passwordRepeat}
          onChange={(e) => setPasswordRepeat(e.target.value)}
        />
        <label htmlFor="passwordRepeat">Repetir Contraseña</label>
        <span
          className="toggle-password"
          onClick={() => setShowPasswordRepeat(!showPasswordRepeat)}
        >
          <FontAwesomeIcon icon={showPasswordRepeat ? faEyeSlash : faEye} />
        </span>
      </div>
      <Button name="Entrar" className="btn" />
    </form>
  );
};

export default FormRegistro;
