import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import FormRegistro from '../src/Pages/Form/FormRegistro';
import Blouse from './Pages/Coat';
import Adress from './Pages/Adress';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Registro" element={<FormRegistro />} />
          <Route path='/Blouse' element={<Blouse/>} />
          <Route path='/Form' element={<Adress/>} />
          {/* Agrega más rutas según sea necesario */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
