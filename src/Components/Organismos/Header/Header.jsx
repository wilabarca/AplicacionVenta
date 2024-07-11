// eslint-disable-next-line no-unused-vars
import React from 'react';
import img from "../../../assets/Logotipo.png";
import Sesion from "../../Atomos/Sesion/Sesion";
import Titulo from "../../Atomos/Titulo/Titulo";
import "../Header/Header.css";
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Header = ({ userName }) => {
    return (
        <header>
            <Link to="/">
                <img src={img} alt="logo" />
            </Link>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Titulo />
            </div>
            <Sesion name="Iniciar Sesion" userName={userName} />
        </header>
    );
};

export default Header;
