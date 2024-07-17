// eslint-disable-next-line no-unused-vars
import React from 'react';

import '../Home/HomeAdministration.css';
import Header from "../../Components/Organismos/Header/Header";
import Button from '../../Components/Atomos/Button/Button';
import { Link } from 'react-router-dom';

import { useEffect } from 'react';

const HomeAdministration = () => {
    useEffect(()=>{

    })
    const userName = "Cerrar Sesion"; // Ajusta el nombre de la variable a userName si es el nombre correcto
    return (
        <div>
            {/* Renderizamos el componente Header y pasa userName como prop */}
            <Header userName={userName}></Header>
            <div className="nav-header">
                <p className="Producto subido">Productos subidos</p>
                
            </div>
               <div className='card-2'>
                  <h1>Formulario Ropa</h1>
                  <Link to="/uploadproduct">
                <Button name="Entrar" className="btn-col-123"></Button>
                </Link>
               </div>
               <div className='card-3'>
                 <h2>Formulario Cartera</h2>
                 <Link to="/FormTie">
                 <Button name="Entrar" className="btn-129-col"></Button>
                 </Link>
               </div>
           
        </div>
    );
}

export default HomeAdministration;
