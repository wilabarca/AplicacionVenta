// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import './Navar.css'; // Importar estilos CSS
import Dropdown from "../../Moleculas/Dropdown/Dropdown";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Navar = ({ title, className }) => {
    return (
        <nav className={`hol-3 ${className}`}>
            <Dropdown />
            <p>{title}</p>
            <NavLink to="/FormRegistro"><a href="#">Cuenta</a></NavLink>
            <a href="#">Acerca de</a>
            <FontAwesomeIcon icon={faCartShopping} className="icon-cart" />
        </nav>
    );
}

export default Navar;
