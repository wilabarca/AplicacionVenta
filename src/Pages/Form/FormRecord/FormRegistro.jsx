// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import logo from "../../../assets/form.png";
import '../FormRecord/FormRegistro.css'

const FormRegistro = () => {
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [rol_id_fk, setRole] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Limpiar cualquier error previo al enviar el formulario

    // Validaciones del formulario
    if (!validateField(firstName)) {
      setError("El campo Nombre es requerido");
      return;
    }
    if (!validateField(lastName)) {
      setError("El campo Apellido es requerido");
      return;
    }
    if (!validateEmail(email)) {
      setError("El correo electrónico no es válido");
      return;
    }
    if (!validatePassword(password)) {
      setError("La contraseña debe tener al menos 8 caracteres");
      return;
    }
    if (password !== passwordRepeat) {
      setError("Las contraseñas no coinciden");
      return;
    }

    const newUser = {
      rol_id_fk: rol_id_fk,
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
    };

    try {
      const response = await fetch('http://localhost:5000/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Incluir credenciales (cookies) en la solicitud
        body: JSON.stringify(newUser),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al registrar el usuario');
      }

      console.log('Usuario registrado correctamente', data);

      // Limpiar el formulario después de un registro exitoso
      setPassword('');
      setPasswordRepeat('');
      setFirstName('');
      setLastName('');
      setEmail('');
      setRole('');
      setError(''); // Limpiar cualquier mensaje de error después del registro exitoso

    } catch (error) {
      console.error('Error al registrar el usuario:', error.message);
      setError('Error al registrar el usuario: ' + error.message);
      // Puedes manejar el error aquí, mostrar un mensaje al usuario, etc.
    }
  };

  const validateField = (value) => {
    return value.trim() !== '';
  };

  const validateEmail = (value) => {
    // Validación de correo electrónico básica
    return /\S+@\S+\.\S+/.test(value);
  };

  const validatePassword = (value) => {
    return value.length >= 8;
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="titl-19">Registro</h1>
      <div className="form-group">
        <img src={logo} alt="logo" />
      </div>
      <div className="form-group">
        <input
          id="firstName"
          type="text"
          className="form-control"
          placeholder=" "
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="firstName">Nombre</label>
      </div>
      <div className="form-group">
        <input
          id="lastName"
          type="text"
          className="form-control"
          placeholder=" "
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="lastName">Apellido</label>
      </div>
      <div className="form-group">
        <input
          id="email"
          type="email"
          className="form-control"
          placeholder=" "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="email">Correo Electrónico</label>
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
      <div className="form-group">
        <input
          id="role"
          type="text"
          className="form-control"
          placeholder=" "
          value={rol_id_fk}
          onChange={(e) => setRole(e.target.value)}
        />
        <label htmlFor="role">Rol</label>
      </div>
      {error && <p className="error-message">{error}</p>}
      <button type="submit" className="btn">Registrar</button>
    </form>
  );
};

export default FormRegistro;
