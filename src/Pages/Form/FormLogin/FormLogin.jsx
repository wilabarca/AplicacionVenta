// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../Components/Atomos/Button/Button";
import logo from "../../../assets/Lgin.png";
import '../FormLogin/FormLogin.css';
import { Link } from "react-router-dom";

const FormLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validateUsername = (value) => {
    const regex = /^[a-zA-Z0-9]{4,}$/; // Solo letras y números, al menos 4 caracteres
    return regex.test(value);
  };

  const validatePassword = (value) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/; // Al menos 6 caracteres, una mayúscula, una minúscula y un número
    return regex.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = [];

    if (!validateUsername(username)) {
      formErrors.push("El usuario debe tener al menos 4 caracteres y solo puede contener letras y números.");
    }

    if (!validatePassword(password)) {
      formErrors.push("La contraseña debe tener al menos 6 caracteres, una mayúscula, una minúscula y un número.");
    }

    if (formErrors.length > 0) {
      alert(formErrors.join("\n"));
    } else {
      fetch('http://localhost:5000/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: username,
          password: password,
          email: "djshkd", // Asigna el email apropiadamente
          gender: "Ajjas23", // Asigna el género apropiadamente
          age: 18, // Asigna la edad apropiadamente
          deleted: 0,
          created_by: username,
          update_by: username
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log('Formulario enviado', data);
        // Maneja la respuesta de la API aquí
      })
      .catch(error => {
        console.error('Error:', error);
        // Maneja el error aquí
      });
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h1 className="login-title">Iniciar Sesión</h1>
      <div className="login-form-group">
        <img src={logo} alt="logo" />
      </div>
      <div className="login-form-group">
        <div className="input-container">
          <FontAwesomeIcon icon={faUser} className="input-icon" />
          <input
            id="username"
            type="text"
            className="login-form-control"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      </div>
      <div className="login-form-group">
        <div className="input-container">
          <input
            id="password"
            type={passwordVisible ? "text" : "password"}
            className="login-form-control"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FontAwesomeIcon
            icon={passwordVisible ? faEyeSlash : faEye}
            className="toggle-password-icon"
            onClick={togglePasswordVisibility}
          />
        </div>
      </div>
      <Link to="/">
      <Button name="Entrar" className="login-btn"></Button>
      </Link>
      <div className="regis-container">
        <p className="regis">No tiene Cuenta</p>
        <Link to="/Registro">Registrarse</Link>
      </div>
    </form>
  );
};

export default FormLogin;
