import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Customer from './Pages/Home/Customer';
import FormRegistro from '../src/Pages/Form/FormRegistro';
import FormSesion from './Pages/Form/FormLogin';
import Blouse from './Pages/Coat';
import Adress from './Pages/Adress';
import UploadProduct from './Pages/Form/Uploadproduct';
import Home from './Pages/MainView/Home';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element ={<Home />} />
          <Route path="/Customer" element={<Customer />} />
          <Route path='/FormSesion' element={<FormSesion />} />
          <Route path="/Registro" element={<FormRegistro />} />
          <Route path='/Blouse' element={<Blouse/>} />
          <Route path='/Form' element={<Adress/>} />
          <Route path='/uploadproduct' element={<UploadProduct />} />
          {/* Agrega más rutas según sea necesario */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
