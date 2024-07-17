/* Formulario de corbata */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';  // Importa el ícono correcto
import Button from "../../../Components/Atomos/Button/Button";
import Header from "../../../Components/Organismos/Header/Header";
import Footer from "../../../Components/Organismos/Footer/Footer";
import "../FormTie/FormTie.css";
import { Link } from 'react-router-dom';

const FormTie = () => {
  const username = "Cerrar Sesion";
  return (
    <div>
      <Header userName={username} />
      <div className="nav-header-col-23">
        <div className="out">
          <Link to="/HomeAdministration">
          <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#4e535a", fontSize: "160%", marginLeft: "152%"}} />
          </Link>
        </div>
      </div>
      
      <div className="product-upload-form">
        <h1 className="product-upload-title">Producto a Subir</h1>
        <div className="form-group">
          <label>Nombre del Producto</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Subir Imagen</label>
          <input type="file" />
        </div>
        <div className="form-group">
          <label>Cantidad Producto</label>
          <input type="number" />
        </div>
        <div className="form-group">
          <label>Categoria</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Precio</label>
          <div className="price">
            <input type="number" placeholder="$0.00" />
          </div>
        </div>
        <div className="form-group">
          <label>Descripcion</label>
          <textarea></textarea>
          <Button name="Subir" className="btn-upload" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FormTie;