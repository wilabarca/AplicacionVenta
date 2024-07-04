import img from "../../../assets/Logotipo.png";
import Sesion from "../../Atomos/Sesion/Sesion";
import Titulo from "../../Atomos/Titulo/Titulo";
import "../Header/Header.css";

const Header = () => {
    return (
        <header>
            <img src={img} alt="logo"></img>
            <Titulo></Titulo>
            <Sesion name="Iniciar Sesion"></Sesion>
        </header>
    );
};

export default Header;
