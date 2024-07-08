import Titulo from "../../Components/Atomos/Titulo/Titulo";
import icon from "../../assets/user icon.png";
import user from "../../assets/user icon.png";
import imagen from "../../assets/Logotipo.png";
import "../MainView/Home.css"; // Asegúrate de que la ruta sea correcta
import Button from "../../Components/Atomos/Button/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="header">
        <img src={imagen} alt="logo" className="imagen" />
        <Titulo />
      </div>
      <div className="card-12">
        <img src={icon} className="icono-12"></img>
        <h1 className="title-34 ">Cliente</h1>
        <p className="subtitle">
          Explora ofertas, realiza pedidos y gestiona tu cuenta.
        </p>
        <Link to="/FormSesion">
        <Button name="Iniciar Sesion" className="Button"></Button>
        </Link>
      </div>
      <div className="card-13">
        <img src={user} className="user-16"></img>
        <h1 className=" heading">Administradora</h1>
        <p className="text-muted">
          Administra productos, pedidos e inventarios.
        </p>
        <Button name="Acceder" className="Button"></Button>
      </div>
    </div>
  );
};

export default Home;
