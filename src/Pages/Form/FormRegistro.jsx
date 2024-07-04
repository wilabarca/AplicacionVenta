/* eslint-disable react/jsx-no-undef */
import logo from "./../../assets/form.png";
import "../Form/FormRegistro.css";
import Button from "../../Components/Atomos/Button/Button";

const FormRegistro = () => {
  return (
    <form className="form">
      <h1 className="titl-19 ">Registro</h1>
      <div className="form-group">
        <img src={logo} alt="logo" />
      </div>
      <div className="form-group">
        <input id="user" type="text" className="form-control" placeholder=" " />
        <label htmlFor="user">Usuario</label>
      </div>
      <div className="form-group">
        <input
          id="password"
          type="password"
          className="form-control"
          placeholder=" "
        />
        <label htmlFor="password">Contraseña Nueva</label>
      </div>
      <div className="form-group">
        <input
          id="passwordRepeat"
          type="password"
          className="form-control"
          placeholder=" "
        />
        <label htmlFor="passwordRepeat">Repetir Contraseña</label>
      </div>
      <Button name="Entrar" className="btn"></Button>
    </form>
  );
};

export default FormRegistro;
