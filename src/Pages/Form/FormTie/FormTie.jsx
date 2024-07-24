// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Button from "../../../Components/Atomos/Button/Button";
import Header from "../../../Components/Organismos/Header/Header";
import Footer from "../../../Components/Organismos/Footer/Footer";
import "../FormTie/FormTie.css";
import { Link } from 'react-router-dom';

const FormTie = () => {
  const username = "Cerrar Sesion";
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');
  const [totalAmount, setTotalAmount] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreviewUrl(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    const formData = new FormData();
    formData.append('name', name);
    formData.append('productImage', image);
    formData.append('category_id_fk', categoryId);
    formData.append('color_id_fk', 1);  // Valor de marcador de posición, cámbialo según sea necesario
    formData.append('size_id_fk', 1);   // Valor de marcador de posición, cámbialo según sea necesario
    formData.append('description', description);
    formData.append('price', price);
    formData.append('total_amount', totalAmount);
    formData.append('created_at', new Date().toISOString());
    formData.append('created_by', username);
    formData.append('update_at', new Date().toISOString());
    formData.append('update_by', username);
    formData.append('deleted', false);

    try {
      const response = await fetch('http://localhost:8000/api/products', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al crear el producto');
      }

      console.log('Producto creado correctamente', data);
      setSuccessMessage('Producto creado correctamente');

      // Limpiar el formulario después de un registro exitoso
      setName('');
      setImage(null);
      setImagePreviewUrl('');
      setTotalAmount('');
      setCategoryId('');
      setPrice('');
      setDescription('');

    } catch (error) {
      console.error('Error al crear el producto:', error.message);
      setError('Error al crear el producto: ' + error.message);
    }
  };

  return (
    <div>
      <Header userName={username} />
      <div className="nav-header-col-23">
        <div className="out">
          <Link to="/HomeAdministration">
            <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#4e535a", fontSize: "160%", marginLeft: "152%" }} />
          </Link>
        </div>
      </div>

      <div className="container">
        <div className="image-preview-container">
          {imagePreviewUrl && (
            <img src={imagePreviewUrl} alt="Vista previa" />
          )}
        </div>
        <div className="product-upload-form">
          <h1 className="product-upload-title">Producto a Subir</h1>
          {successMessage && <div className="success-message">{successMessage}</div>}
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nombre del Producto</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Subir Imagen</label>
              <input
                type="file"
                onChange={handleFileChange}
              />
            </div>
            <div className="form-group">
              <label>Cantidad Producto</label>
              <input
                type="number"
                value={totalAmount}
                onChange={(e) => setTotalAmount(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Categoria</label>
              <input
                type="text"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Precio</label>
              <div className="price">
                <input
                  type="number"
                  placeholder="$0.00"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Descripción</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <Button name="Subir" className="btn-upload" />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FormTie;
