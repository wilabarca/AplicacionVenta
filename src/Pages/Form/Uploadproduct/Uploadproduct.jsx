// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Asegura la importación de Link
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Button from "../../../Components/Atomos/Button/Button";
import Header from "../../../Components/Organismos/Header/Header";
import Footer from "../../../Components/Organismos/Footer/Footer";
import "../Uploadproduct/uploadproduct.css";  // Asegura la importación del archivo CSS

const Uploadproduct = () => {
  const [, setImage] = useState(null);
  const username = "Cerrar Sesion";

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
      localStorage.setItem('uploadedImage', reader.result); // Guardar la imagen en localStorage
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Header userName={username} />

      {/* Contenedor del encabezado */}
      <div className="header-container-col-123">
        <div className="navigation-out">
         <Link to="/HomeAdministration">
            <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#4e535a", fontSize: "160%", marginLeft: "40px" }} />
          </Link>
        </div>
      </div>

      {/* Formulario de carga de productos */}
      <div className="product-form">
        <h1 className="Product">Producto a Subir</h1>
        <div className="form-group">
          <label>Nombre del Producto</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Subir Imagen</label>
          <input type="file" onChange={handleImageUpload} />
        </div>
        <div className="form-group">
          <label>Tallas Disponibles</label>
          <div className="sizes">
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
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
          <Button name="Subir" className="btn-subir" />
        </div>
      </div>

      {/* Pie de página */}
      <Footer />
    </div>
  );
};

export default Uploadproduct;
