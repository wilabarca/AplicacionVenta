import Header from "../../Components/Organismos/Header/Header";
import './uploadproduct.css';

const uploadproduct = () =>{
    return(
        
        <div>
            <Header></Header>
            <div className="product-form">
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
      </div>
    </div>

        </div>
    )}

    export default uploadproduct;

