// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "../Dropdown/Dropdown.css"; // Archivo CSS para estilos
import { Link } from "react-router-dom";

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen); 
    };

    return (
        <div className="dropdown-container">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
                Categorias
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    <Link to="/Adress">
                        <li>Blusa</li>
                    </Link>
                    <li>Vestidos</li>
                    <Link to="/Blouse">
                        <li>Saco</li>
                    </Link>
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
