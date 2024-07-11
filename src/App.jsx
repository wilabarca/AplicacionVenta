import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Customer from './Pages/Home/Customer';
import HomeAdministration from './Pages/Home/HomeAdministration';
import FormAdministrator from './Pages/Form/FormAdministration/FormAdministrator';
import FormLogin from './Pages/Form/FormLogin/FormLogin';
import FormRegistro from './Pages/Form/FormRecord/FormRegistro';
import Uploadproduct from './Pages/Form/Uploadproduct/Uploadproduct';
import Blouses from './Pages/Products/Blouses';
import Coat from './Pages/Products/Coat';
import Dresses from './Pages/Products/Dresses';
import Shirts from './Pages/Products/Shirts';
import Ties from './Pages/Products/Ties';
import Wallets from './Pages/Products/Wallets';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element ={<Customer />} />
          <Route path='/HomeAdministration' element ={<HomeAdministration />} />
          <Route path='/FormAdministrator' element = {<FormAdministrator />} />
          <Route path='/FormLogin' element = {<FormLogin />} />
          <Route path='/FormRegistro' element = {<FormRegistro />} />
          <Route path='/Uploadproduct' element = {<Uploadproduct />} />
          <Route path='/Blouses' element = {<Blouses />} />
          <Route path='/Coat' element = {<Coat />} />
          <Route path='/Dresses' element = {<Dresses />} />
          <Route path='/Shirts' element = {<Shirts />} />
          <Route path='/Ties' element = {<Ties />} />
          <Route path='/Wallets' element = {<Wallets />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
