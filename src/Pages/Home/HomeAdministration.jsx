// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../Home/HomeAdministration.css';
import Header from "../../Components/Organismos/Header/Header";
import Button from '../../Components/Atomos/Button/Button';
import { Link } from 'react-router-dom';

const HomeAdministration = () => {
    const userName = "Cerrar Sesion"; // Ajusta el nombre de la variable a userName si es el nombre correcto
    return (
        <div>
            {/* Renderizamos el componente Header y pasa userName como prop */}
            <Header userName={userName}></Header>
            <div className="nav-header">
                <p className="Producto subido">Productos subidos</p>
                <Link to="/uploadproduct">
                <Button name="Subir Producto"></Button>
                </Link>
            </div>
        </div>
    );
}

export default HomeAdministration;
