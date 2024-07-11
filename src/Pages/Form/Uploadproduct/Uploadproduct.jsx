import Button from "../../../Components/Atomos/Button/Button";
import Header from "../../../Components/Organismos/Header/Header";
import Footer from "../../../Components/Organismos/Footer/Footer";
import "../Uploadproduct/uploadproduct.css";

const Uploadproduct = () => {
  const username = "Cerrar Sesion";
  return (
    <div>
      <Header userName={username}></Header>
      <div className="product-form">
        <h1 className="Product">Producto a Subir</h1>
        <div className="form-group">
          <label>Nombre del Producto</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Subir Imagen</label>
          <input type="file" />
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
          <Button name="Subir" className="btn-subir"></Button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Uploadproduct;
