// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from "react";
import { AuthContext } from "../../../Server/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../Components/Atomos/Button/Button";
import logo from "../../../assets/Lgin.png";
import '../FormLogin/FormLogin.css';
import { Link } from "react-router-dom";

const FormLogin = () => {
    const [first_name, setFirstName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const { login } = useContext(AuthContext);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (first_name === "" || password === "") {
            alert("Por favor, complete todos los campos.");
            return;
        }

        fetch('http://localhost:5000/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({ first_name, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.token) {
                login({ first_name, token: data.token });
                setSuccessMessage("Usuario ha iniciado sesión correctamente.");
            } else {
                alert(data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <h1 className="login-title">Iniciar Sesión</h1>
            {successMessage && <div className="success-message">{successMessage}</div>}
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
                        value={first_name}
                        onChange={(e) => setFirstName(e.target.value)}
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
            <Button name="Entrar" className="login-btn" />
            <div className="regis-container">
                <p className="regis">No tiene Cuenta</p>
                <Link to="/Registro">Registrarse</Link>
            </div>
        </form>
    );
};

export default FormLogin;
