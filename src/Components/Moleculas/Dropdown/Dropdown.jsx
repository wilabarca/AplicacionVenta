/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "../Dropdown/Dropdown.css"; // Asegúrate de que la ruta sea correcta
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("Categorías");
    const navigate = useNavigate(); // Utiliza useNavigate en lugar de useHistory

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleCategoryClick = (category, path) => {
        setSelectedCategory(category);
        setIsOpen(false); // Cierra el dropdown después de seleccionar una opción
        navigate(path); // Navega a la ruta correspondiente
    };

    return (
        <div className="dropdown-container">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
                {selectedCategory}
                <FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: "10px", color: "#000000" }} />
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    <li onClick={() => handleCategoryClick("Blusa", "/Blouses")}>Blusa</li>
                    <li onClick={() => handleCategoryClick("Sacos", "/Coat")}>Sacos</li>
                    <li onClick={() => handleCategoryClick("Vestidos", "/Dresses")}>Vestidos</li>
                    <li onClick={() => handleCategoryClick("Camisas", "/Shirts")}>Camisas</li>
                    <li onClick={() =>handleCategoryClick("Corbatas","/Ties")}>Corbatas</li>
                    <li onClick={() =>handleCategoryClick("Carteras", "/Wallets")}>Carteras</li>
                   
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
