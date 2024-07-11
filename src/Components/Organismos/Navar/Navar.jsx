// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import './Navar.css'; // Importar estilos CSS
import Dropdown from "../../Moleculas/Dropdown/Dropdown";
import { NavLink } from "react-router-dom";

const Navar = () => {
    return (
        <nav className="hol-3">
            <Dropdown />

        <NavLink to="/FormRegistro"><a href="#">Cuenta</a></NavLink>
            
            <a href="#">Acerca de</a>
            <FontAwesomeIcon icon={faCartShopping} className="icon-cart" />
        </nav>
    );
}

export default Navar;
