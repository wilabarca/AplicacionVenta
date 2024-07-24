// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Header from "../../../Components/Organismos/Header/Header";
import Button from "../../../Components/Atomos/Button/Button";
import "../Uploadproduct/uploadproduct.css";

const Uploadproduct = () => {
  const [file, setFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');
  const [name, setName] = useState("");
  const [sizes, setSizes] = useState(["", "", ""]);
  const [totalAmount, setTotalAmount] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const username = "Cerrar Sesión";

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setUploadedImageUrl(URL.createObjectURL(e.target.files[0]));
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSizeChange = (index, value) => {
    const newSizes = [...sizes];
    newSizes[index] = value;
    setSizes(newSizes);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    const formData = new FormData();
    formData.append('name', name);
    formData.append('productImage', file);

    try {
      // Step 1: Upload the image and product data
      const response = await fetch('http://localhost:8000/api/', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Response data:', data);

      // Ensure the uploaded image URL is in data.url
      setUploadedImageUrl(data.url);

      // Step 2: Submit additional product details if needed
      const newProduct = {
        category_id_fk: categoryId,
        size_id_fk: sizes.length > 0 ? sizes[0] : "", // Use the first size as a placeholder
        name: name,
        description: description,
        price: price,
        total_amount: totalAmount,
        created_at: new Date().toISOString(),
        created_by: username,
        update_at: new Date().toISOString(),
        update_by: username,
        deleted: false,
        imageUrl: data.url, // Use the URL from the uploaded image
      };

      const productResponse = await fetch('http://localhost:5000/api/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });

      const productData = await productResponse.json();

      if (!productResponse.ok) {
        throw new Error(productData.message || 'Error al crear el producto');
      }

      console.log('Producto creado correctamente', productData);
      setSuccessMessage('Producto agregado correctamente');

      // Clear form after successful submission
      setName('');
      setSizes(["", "", ""]);
      setTotalAmount('');
      setCategoryId('');
      setPrice('');
      setDescription('');
      setFile(null);
      setUploadedImageUrl('');
    } catch (error) {
      console.error('Error al crear el producto:', error.message);
      setError('Error al crear el producto: ' + error.message);
    }
  };

  return (
    <div>
      <Header userName={username} />

      <div className="upload-container">
        <div className="product-form">
          <h1 className="Product">Producto a Subir</h1>
          {successMessage && <div className="success-message">{successMessage}</div>}
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nombre del Producto</label>
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Nombre del producto"
              />
            </div>
            <div className="form-group">
              <label>Tallas Disponibles</label>
              <div className="sizes">
                {sizes.map((size, index) => (
                  <input
                    key={index}
                    type="text"
                    value={size}
                    onChange={(e) => handleSizeChange(index, e.target.value)}
                  />
                ))}
              </div>
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
              <label>Categoría</label>
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
              />
            </div>
            <div className="form-group">
              <label>Imagen del Producto</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
              {uploadedImageUrl && (
                <div className="image-preview-container">
                  <img src={uploadedImageUrl} alt="Imagen del Producto" className="image-preview" />
                </div>
              )}
            </div>
            <button className="btn-subir" type="submit">Subir Producto</button>
          </form>
        </div>

        {/* Vista previa de la imagen */}
        {uploadedImageUrl && (
          <div className="image-preview-container">
            <img src={uploadedImageUrl} alt="Vista previa" className="image-preview" />
          </div>
        )}
        <Button></Button>
      </div>

  </div>
  );
};

export default Uploadproduct;
